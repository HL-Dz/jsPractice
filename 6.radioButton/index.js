var elems = document.querySelectorAll('.inpRad'),
		button = document.querySelector('.forme');

button.addEventListener('click', function () {
	for (var i = 0; i < elems.length; i++) {
		if(elems[i].checked) {
			alert('Выбранный элемент: '+elems[i].value);
			break;
		}
	}
});