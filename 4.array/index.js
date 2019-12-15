var addElem = document.querySelector('.addElem'),
		remElem = document.querySelector('.remElem'),
		arr = [];

function showArr() {
	var out = document.querySelector('.out'),
			str = '',
			i;
	for (i = 0; i < arr.length; i++) {
		str += i+'-й элемент массива --- '+arr[i]+'<br>';
	}

	out.innerHTML = str;
}

showArr();

addElem.addEventListener('click', function () {
	var elem = document.querySelector('.forme').value;
	arr.push(elem);
	var elem = document.querySelector('.forme').value = '';
	showArr();
});

remElem.addEventListener('click', function () {
	var elem = document.querySelector('.forme').value;
	arr.pop(elem);
	showArr();
});