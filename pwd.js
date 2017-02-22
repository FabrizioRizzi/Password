var $ = function (id) {
    return document.getElementById(id);
}
var generateClick = () => {
	let set;
	let num = parseInt($("num").value);
	let pwd = "";
	let value2 = false;
	if (document.getElementsByName('set')[0].checked) {
		set ="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	} else {
		set ="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"=?@"
	}
	if (isNaN(num) || num <= 0 || num > 20){
		$("error").firstChild.nodeValue = "Length must be a number between 1 and 20";
	} else {
		value2 = true;
	}
	if (value2) {
		for (i = 1; i <= num; i++) {
			pwd += set.charAt(Math.floor(Math.random() * set.length));
		}
	}
	if (!pwd.match(/!|\"|\=|\?|\@/g) && !document.getElementsByName('set')[0].checked) {
		pwd = pwd.slice(0, -1);
		pwd += "!\"=?@".charAt(Math.floor(Math.random() * "!\"=?@".length))
	}
	$("pwd").value = pwd;
}
var clear = () => {
			$("num").value = "8";
			$("pwd").value = "";
			$("error").firstChild.nodeValue = "*";
			$("num").select();
}
window.onload = () => {
	$("clear").onclick = clear;
	$("generate").onclick = generateClick;
	$("num").select();
}
