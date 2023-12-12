/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

	function passWord() {
	var testV = 1;
	var pass1 = prompt('Password','');
	while (testV < 3) {
	if (!pass1)
	history.go(-1);
	if (pass1.toLowerCase() == "mypassword") {
	window.location.replace(''https://helder-furniture.com/work_pt.html'');
	break;
	}
	testV+=1;
	var pass1 =
	prompt('Acesso negado - Senha incorreta, tente novamente.','');
	}
	if (pass1.toLowerCase()!="password" & testV ==3)
	history.go(-1);
	return " ";
	}
