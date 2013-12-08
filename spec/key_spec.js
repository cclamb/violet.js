
var Key 		= require('../lib/key').Key,
	__ 			= require('underscore'),
	btoa		= require('btoa'),
	atob		= require('atob'),
	testKey 	= [0, 1, 98, 42, 198, 254, 255],
	buffer 		= new ArrayBuffer(testKey.length),
	uint8array 	= new Uint8Array(buffer);

var toString 	= function(array) {
		var string = '';

		__.each(array, function(e) { string += String.fromCharCode(e); });
		return string;
	},
	fromString 	= function(string) {
		var buffer 		= new ArrayBuffer(string.length), 
			uint8array 	= new Uint8Array(buffer);

		__.each(string, function(e, i) { uint8array[i] = string.charCodeAt(i); }); 
		return uint8array;
	};

__.each(testKey, function(e,i) { uint8array[i] = e; })

var testB64String = btoa(toString(uint8array));

describe('A DES key', function() {

	it('should be creatable without a string', function() {
		var key = new Key();
		expect(key).not.toBe(undefined);
	});

	it('should be creatable with a B64 string', function() {
		var key = new Key(testB64String);
		expect(key).not.toBe(undefined);
	});

	it('should return a copy of the binary array', function() {
		var key 	= new Key(testB64String),
			array 	= key.array();
		expect(array.length).toEqual(testKey.length);
		__.each(testKey, function(e, i) {
			expect(e).toEqual(array[i]);
		});
	});
});