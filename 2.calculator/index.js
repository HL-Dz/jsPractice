var btn1 = document.querySelector('.btn1'),
		btn2 = document.querySelector('.btn2'),
		btn3 = document.querySelector('.btn3'),
		btn4 = document.querySelector('.btn4');

// Сложение
btn1.addEventListener('click', function () {
	var num1 = document.querySelector('.num1').value,
			num2 = document.querySelector('.num2').value,
			out = document.querySelector('.out'),
			result;

	num2 = parseInt(num2);
	num1 = parseInt(num1);
	result = num1+num2;

	out.innerHTML = 'Результат равен: '+result;
});

// Вычитание
btn2.addEventListener('click', function () {
	var num1 = document.querySelector('.num1').value,
			num2 = document.querySelector('.num2').value,
			out = document.querySelector('.out'),
			result;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1-num2;

	out.innerHTML = 'Результат равен: '+result;
});

// Умноежение
btn3.addEventListener('click', function () {
	var num1 = document.querySelector('.num1').value,
			num2 = document.querySelector('.num2').value,
			out = document.querySelector('.out'),
			result;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1*num2;

	out.innerHTML = 'Результат равен: '+result;
});

btn4.addEventListener('click', function () {
	var num1 = document.querySelector('.num1').value,
			num2 = document.querySelector('.num2').value,
			out = document.querySelector('.out'),
			result;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1/num2;

	if(num2 == 0) {
		out.innerHTML = 'На ноль делить НЕЛЬЗЯ, попробуйте еще раз.'
	} else {
		out.innerHTML = 'Результат равен: '+result;
	}
});