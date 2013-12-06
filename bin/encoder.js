#!/usr/bin/env node

var __ 			= require('underscore'),
	TextDecoder	= require('stringencoding').TextDecoder,
	TextEncoder	= require('stringencoding').TextEncoder,
	values 		= [1, 232, 12, 123, 237],
	buffer 		= new ArrayBuffer(values.length),
	uint8array 	= new Uint8Array(buffer),
	encoding	= 'UTF-8';

__.each(uint8array, function(e, i, l) { l[i] = values[i]; });

var result = TextDecoder(encoding).decode(uint8array);
var array = TextEncoder(encoding).encode(result);

console.log('The resuting string:');
console.log(result);
console.log('Encoded into the original array:');
console.log(array);



