//ƒ‰ƒ“ƒ_ƒ€”z—ñæ“¾ num‚Íæ‚èo‚·”
function random(array, num) {
	var a = array;
	var t = [];
	var r = [];
	var l = a.length;
	var n = num < l ? num : l;
	while (n-- > 0) {
		var i = Math.random() * l | 0;
		r[n] = t[i] || a[i];
		--l;
		t[i] = t[l] || a[l];
	}
	return r;
}