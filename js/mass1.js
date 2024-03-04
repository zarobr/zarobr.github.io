function mass() {
	var data = [];
	var div = document.createElement('div')
	var text ='';
	var slov = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (var i = 0; i < 100; i++) {
		data[i] = Math.round(Math.random()*10);
	}
	
	for (el of data) {
		for (n of slov) {
			if (n == el){
				s[n] = s[n] + 1;
			}
		}
		if (el == 10) {
			text = text + el + '||';
		}
		else {
			text = text + el + '  ||';
		}
	}

	text = text + '*********' + s;
	div.innerHTML = text;
	document.body.append(div);
	return s;
}

var sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var m = [];
for (var i = 0; i < 100; i++) {
	mass();
	m = mass();
	for (var j = 0; j < 10; j++) {
		sum[j] = sum[j] + m[j];
	}

}

console.log(sum);
