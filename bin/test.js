#!/usr/bin/env node

var __ = require('underscore');
var json = require('JSON2');


var test_obj = { name: 'object name', data: 234145 };
var json_obj = json.stringify(test_obj);

console.log(json_obj);

console.log('----> characters...');
for (var i = 0; i < json_obj.length; i++) {
  console.log(json_obj.charAt(i));
}

console.log('----> codes...');
for (var i = 0; i < json_obj.length; i++) {
  console.log(json_obj.charCodeAt(i));
}

console.log('----> binary');
for (var i = 0; i < json_obj.length; i++) {
  console.log(json_obj.charCodeAt(i).toString(2));
}

console.log('----> block');
var block = [];
for (var i = 0; i < json_obj.length; i++) {
  block.push(json_obj.charCodeAt(i).toString(2));
}
console.log(block);

console.log('----> string');
var str = '';
for (var i = 0; i < json_obj.length; i++) {
  str += json_obj.charCodeAt(i).toString(2);
}
console.log(str);

console.log('----> hex block');
var block = [];
for (var i = 0; i < json_obj.length; i++) {
  block.push(json_obj.charCodeAt(i).toString(16));
}
console.log(block);

console.log('----> decimal block');
var block = [];
for (var i = 0; i < json_obj.length; i++) {
  block.push(json_obj.charCodeAt(i).toString(10));
}
console.log(block);

console.log('----> decimal codes');
var block = [];
for (var i = 0; i < json_obj.length; i++) {
  block.push(json_obj.charCodeAt(i));
}
console.log(block);