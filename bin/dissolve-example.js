#!/usr/bin/env node

var Dissolve = require("dissolve");

console.log('Starting...')
var parser = Dissolve().loop(function(end) {
  this.uint8("id").tap("payload", function() {
    this.tap("asdf", function() {
      if (this.vars.id === 0x01) {
        this.uint16be("a").uint16be("b");
      } else if (this.vars.id === 0x02) {
        this.uint32be("x").uint32be("y");
      } else if (this.vars.id === 0x03) {
        this.floatbe("l").doublebe("m");
      }
    });
  }).tap(function() {
    this.push(this.vars);
    this.vars = Object.create(null);
  });
});

console.log('finished parser build.');
//console.log(parser);
console.log('extracting...');
parser.on("readable", function() {
  var e;
  console.log('reading...');
  while (e = parser.read()) {
    console.log(e);
  }
});
