
var Key = require('../lib/key').Key;

describe('A DES key', function() {
	it('should be creatable without a string', function() {
		var key = new Key();
		expect(key).not.toBe(undefined);
	});
});