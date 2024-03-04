var words = [
	'программа',
	'макака',
	'ребус',
	'информатика'
	];

//выбераем случайное слово
var word = words[Math.floor(Math.random()*words.length)];

//создаем итоговый массив
var answerArray = [];
for (var i = 0; i < words.length; i++) {
	answerArray[i] = '_';
}

var remainigLetters = word.length;

//игровой цикл
while (remainigLetters > 0) {
	//показываем состояние игры
	alert(answerArray.join(''));
	//Запрашиваем вариант ответа
	var guess = prompt('Угадай букву или нажми Отмена, для выхода из игры');
	if (guess === null)  {
		//выходим из игрового цикла
		break;
	} else if (guess.length !== 1) {
		alert('Ведите одиночную букву');
	} else {
		//Обновляем состояние игры
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainigLetters--;
			}
		}
	}
//конец игрового цикла

//Отображаем ответ пользователя
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);
}