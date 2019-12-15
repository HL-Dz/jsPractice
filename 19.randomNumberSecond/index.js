var numb = Math.floor((Math.random()*10)+1),
		btn = document.querySelector('.check'),
		count = 2,
		countOut = document.querySelector('.count');
console.log(numb);

btn.addEventListener('click', function () {
	if(count>0) {
		var out = document.querySelector('.out'),
				userNum = document.querySelector('.forme').value;
		if(userNum == numb) {
			out.innerHTML = 'Вы угадали число! Поздравляем!'
		} else if (userNum>numb) {
			out.innerHTML = 'Число больше'
		} else {
			out.innerHTML = 'Число меньше'
		}

		countOut.innerHTML = 'Осталось '+count+' попытки';
		count--;

	} else {
		alert('Вы использовали все попытки');
		location.reload();
	}
});