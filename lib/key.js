
var __ 		= require('underscore'),
	btoa 	= require('btoa'),
	atob 	= require('atob');

var LOWER_BOUND = 0;
var UPPER_BOUND = 255;
var KEY_LENGTH 	= 8;

exports.Key = function(b64String) {

	var _store = null;
	var fromString 	= function(b64String) {
			var buffer 		= new ArrayBuffer(b64String.length), 
				uint8array 	= new Uint8Array(buffer),
				rawString	= atob(b64String);

			__.each(rawString, function(e, i) { 
				uint8array[i] = rawString.charCodeAt(i); 
			}); 
			return uint8array;
		};

	if (b64String != undefined) {
		if (str.length < KEY_LENGTH) throw 'key too short';
		_store = fromString(b64String);
	}

	return {
		toString: function() {
			if (_store == null) return null;
			var string = '';
			__.each(array, function(e) {
				string += String.fromCharCode(e);
			});
			return atob(string);
		}
	}
}