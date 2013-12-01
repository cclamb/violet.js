#!/usr/bin/env node
var __ = require('underscore');

var my_buf = new Buffer(10);

console.log('after initialization...');

__.each(my_buf, function(e) { console.log(e.toString(16)); });

console.log(my_buf);

for(var i = 0; i < my_buf.length; i++) {
	my_buf[i] = 0x00;
}

console.log('after alteration...')

__.each(my_buf, function(e) { console.log(e.toString(16)); });

console.log(my_buf);

console.log('finished.');