
var __ 		= require('underscore'),
	btoa 	= require('btoa'),
	atob 	= require('atob');

var LOWER_BOUND = 0;
var UPPER_BOUND = 255;
var KEY_LENGTH 	= 8;

exports.Key = function(b64String) {

	var _store = null;
	var fromString 	= function(b64String) {
			var rawString	= atob(b64String),
				buffer 		= new ArrayBuffer(rawString.length), 
				uint8array 	= new Uint8Array(buffer);

			__.each(rawString, function(e, i) { 
				uint8array[i] = rawString.charCodeAt(i); 
			}); 
			return uint8array;
		};

	if (b64String != undefined) {
		if (b64String.length < KEY_LENGTH) throw 'key too short';
		_store = fromString(b64String);
	}

	return {
		extractBits: function(extractor) {
			return extractor(_store);
		},
		array: function() {
			if (_store === null) return null;
			var array = new Uint8Array(_store.length);
			__.each(array, function(e,i) { array[i] = _store[i]; });
			return array;
		},
		toString: function() {
			if (_store == null) return null;
			debugger;
			var string = '';
			__.each(_store, function(e) {
				string += String.fromCharCode(e);
			});
			return btoa(string);
		}
	}
}