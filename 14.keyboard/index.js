var elem = document.querySelector('.forme');
elem.addEventListener('keypress', function (e) {
	var keyCode = e.keyCode;
	if(keyCode<48 || keyCode>57) {
		e.preventDefault();
	}
});

