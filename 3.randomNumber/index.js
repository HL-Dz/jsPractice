var ranNum = Math.floor((Math.random()*100)+1),
		guess = document.querySelector('.guess');
console.log(ranNum);

guess.addEventListener('click', function () {
	var num = document.querySelector('.forme').value,
			out = document.querySelector('.out');

	if(num == ranNum) {
		out.innerHTML = 'Поздравляем, вы угадали число!'
	} else if (num<ranNum) {
		out.innerHTML = 'Заданное число меньше, попробуйте еще раз.'
	} else {
		out.innerHTML = 'Заданное число больше, попробуйте еще раз.'
	}
});


