
var DES 		= require('../lib/DES').DES;

describe('DES', function() {

	it('should reject a large block', function() {
		var des = new DES();
		expect(
			function() { des._initialPermutation(new Array(10)); }
		).toThrow();
	});

	it('should reject a small block', function() {
		var des = new DES();
		expect(
			function() { des._initialPermutation(new Array(6)); }
		).toThrow();
	});

});