var LOWER_BOUND = 33;
var UPPER_BOUND = 127 + LOWER_BOUND;
var KEY_LENGTH 	= 7;

exports.stringToKey = function(str) {
	if (key.length < KEY_LENGTH) throw 'key too short';
	var retval = new Array();
	for (var i = 0; i < KEY_LENGTH; i++) {
		retval.push(str.charCodeAt(i));
	}
	return retval;
};

exports.keyToString = function(key) {
	if (key.length < KEY_LENGTH) throw 'key too short';
	var retval = '';
	for (var i = 0; i < KEY_LENGTH; i++) {
		var code = key[i];
		if (code < LOWER_BOUND || code > UPPER_BOUND) {
			throw 'key byte out-of-bounds';
		}
		retval += String.fromCharCode(code); 
	}
	return retval;
}
