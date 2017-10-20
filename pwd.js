var select = function (id) {
    return document.getElementById(id);
};

var generate = function () {
    var charSet = "";
    var specialCharSet = "";
    var passLength = parseInt(select("passLength").value);
    var pwd = "";

    switch (document.querySelector('input[name = "charSet"]:checked').value) {
        case "minuscoleMaiuscoleNumeri":
            charSet = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
        case "minuscoleMaiuscoleNumeriSpecial":
            charSet = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            specialCharSet += select("!").checked ? select("!").value : "";
            specialCharSet += select("?").checked ? select("?").value : "";
            specialCharSet += select("$").checked ? select("$").value : "";
            specialCharSet += select("%").checked ? select("%").value : "";
            specialCharSet += select("&").checked ? select("&").value : "";
            charSet += specialCharSet;
            break;
        case "numeri":
            charSet = "0123456789";
    }

    if (isNaN(passLength) || passLength <= 0 || passLength > 20) {
        select("error").innerHTML = "Length must be a number between 1 and 20";
        pwd = "-";
    } else {
        for (var i = 1; i <= passLength; i++) {
            pwd += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        //TODO regex from the special chars selected and decide how many special char in pwd
        if (select('minuscoleMaiuscoleNumeriSpecial').checked && !pwd.match(/[!?$%&]/g)) {
            var randomSpecialChar = specialCharSet.charAt(Math.floor(Math.random() * specialCharSet.length));
            pwd = pwd.split('');
            pwd.splice(Math.floor(Math.random() * pwd.length), 1, randomSpecialChar);
            pwd = pwd.join('');
        }
    }
    select("pwd").innerHTML = pwd;
};

var refresh = function () {
    select("passLength").value = "8";
    select("pwd").innerHTML = "(Click Generate)";
    select("error").firstChild.nodeValue = "*";
};

