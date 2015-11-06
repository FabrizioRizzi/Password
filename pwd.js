var $ = function (id) {
    return document.getElementById(id);
}

var generateClick = function () {
	if (document.getElementsByName('set')[0].checked) {
		var set ="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	} else {
		var set ="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%&-_()=?"
	}


	/* function getRadio () {
    	for (var i = 0; i < document.getElementsByName('set').length; i++) {
    		if (document.getElementsByName('set')[i].checked) {
    			return document.getElementsByName('set')[i].value;
    		}
    	}
	} 
	var set = getRadio(); */

	var num = parseInt($("num").value);
	
	var pwd = "";
	

	if (isNaN(num) || num <= 0 || num > 20){
		$("error").firstChild.nodeValue = "Length must be a number between 1 and 20";
	} else {
		var value2 = true;
	}

	if (value2) {
		for (i = 1; i <= num; i++) {
			pwd += set.charAt(Math.floor(Math.random() * set.length));
		}
		//se non ci sono numeri ne inserisce uno
		
		//se non ci sono caratteri speciali ne inserisce uno
	}
	$("pwd").value = pwd;
}
var clear = function() {
			$("num").value = "8";
			$("pwd").value = "";
			$("error").firstChild.nodeValue = "*";
			$("num").select();
}
window.onload = function () {
	$("clear").onclick = clear;
	$("generate").onclick = generateClick;
	$("num").select();
}