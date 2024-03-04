function checkForm(el) {
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;

	var fall = '';

	if (name == '' || pass == '' || state == '')
		fall = 'Заполните все поля';
	else if (name.length <= 1 || name.length > 50)
		fall = 'Введите коректное имя';
	else if (pass != repass)
		fall = 'Пароли должны совпадать!'
	else if (pass.split('$').length > 1)
		fall = 'Некоректный пароль'

	if (fall != '') {
		document.getElementById('error').innerHTML = fall;
		return false;
	} else {
		alert('Все данные корректно заполнены');
		return true;
	}
	

	//console.log(fall);

	//return false;
}