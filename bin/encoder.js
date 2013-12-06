#!/usr/bin/env node

var __ 			= require('underscore'),
	btoa		= require('btoa'),
	atob		= require('atob'),
	values 		= [0, 1, 128, 254, 255],
	buffer 		= new ArrayBuffer(values.length),
	uint8array 	= new Uint8Array(buffer),
	encoding	= 'utf-8';

var toString = function(array) {
	var string = '';

	__.each(array, function(e) { string += String.fromCharCode(e); });
	return string;
}

var fromString = function(string) {
	var buffer 		= new ArrayBuffer(string.length), 
		uint8array 	= new Uint8Array(buffer);

	__.each(string, function(e, i) { uint8array[i] = string.charCodeAt(i); }); 
	return uint8array;
}

__.each(uint8array, function(e, i, l) { l[i] = values[i]; });

var result = toString(uint8array);
var b64 = btoa(result);

var orig = atob(b64);
var array = fromString(orig);

console.log('==> The original array:');
console.log(uint8array);

console.log('==> The resuting string:');
console.log(result);

console.log('==> values:');
__.each(result, function(e) {console.log(e.charCodeAt(0)); });

console.log('==> The base64 encoded string:');
console.log(b64);


console.log('==> The string converted from base64:');
console.log(orig);

console.log('==> Encoded into the original array:');
console.log(array);
