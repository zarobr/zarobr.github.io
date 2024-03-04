function checkForm(el) {
	/*var x = Number(el.x.value);
	var y = Number(el.y.value);*/
	var state1 = el.state1.value;
	var state2 = el.state2.value;
	var state3 = el.state3.value;
	var itog = 0;
	var rez;
	
	if (state1 == 'Геппард'){
		rez = 'Верно';
		itog = itog + 1;
	}
	else {
		rez = 'Неверно';
	}

	if (state2 == '8'){
		rez2 = 'Верно';
		itog = itog + 1;
	}
	else {
		rez2 = 'Неверно';
	}

	if (state3 == 'Пекин'){
		rez3 = 'Верно';
		itog = itog + 1;
	}
	else {
		rez3 = 'Неверно';
	}
	
	

	document.getElementById('rez').innerHTML = rez;
	document.getElementById('rez2').innerHTML = rez2;
	document.getElementById('rez3').innerHTML = rez3;
	document.getElementById('itog').innerHTML = 'Вы набрали ' + itog + ' очков';
		return false;
		

	

	//return false;
}