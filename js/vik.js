var ball = 0;

function vopros (name, yes) {
	otvet = prompt(name)
		if (otvet == yes) {
			document.getElementById('vik').innerHTML = 'Ответ верный!';
			ball = ball + 1;
		} else {
			document.getElementById('vik').innerHTML = 'Ответ неверный!'
			}
}

vopros('Какая минимальная еденица информации?', 'бит');
vopros('Сколько байт содержится в 32 битах?', '4');
t = confirm('да');
console.log(t);

document.getElementById('itog').innerHTML = ('Вы набрали ' + ball + ' баллов')