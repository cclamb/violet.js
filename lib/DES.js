
exports.DES = function(key) {

	var _key = key;

	return {

		_initialPermutation: function(block) {
			if (block.length != 8) throw 'block is incorrectly sized';
			return block;
		},

		_truncate8thBits: function() {

		},

		initialPermutation: function() {

		}
	};
}