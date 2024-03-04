var sumClick = 0;

function onClikButton() {
	//alert('Вы нажали на кнопку!!!');
	sumClick++;
	
	console.log(sumClick);
}

function vvod1(el) {
	console.log(el.value);
	if (el.value == 'Ограбление') {
		alert('Внимание кто-то задумал ограбление');
	}
}

function onClikButton2() {
	//alert('Вы нажали на кнопку!!!');
	sumClick++;
	for (var i = 0; i < 10; i++) {
		document.write(i*i);
		document.write(' | ');
		
	}
	console.log(sumClick);
}

function onClikButton3() {
	//alert('Вы нажали на кнопку!!!');
	sumClick++;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			document.write(i*j);
			document.write(' | ');
		}
		document.write('<br>');
		
	}
	console.log(sumClick);
}

function onClikButton4() {
	//alert('Вы нажали на кнопку!!!');
	sumClick++;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			document.write(i*j);
			document.write(' | ');
		}
		document.write('<br>');
		
	}
	console.log(sumClick);
}
