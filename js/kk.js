function checkForm(el) {
	var x = Number(el.x.value);
	var y = Number(el.y.value);
	var state = el.state.value;
	var c;
	
	if (state == 'Сложение')
		c = x + y;
	if (state == 'Разность')
		c = x - y;
	if (state == 'Умножение')
		c = x * y;
	if (state == 'Деление')
		c = x / y;
	

	console.log(state);

	document.getElementById('rez').innerHTML = c;
		return false;
		

	

	//return false;
}