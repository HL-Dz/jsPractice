var elem = document.querySelector('.forme');
elem.addEventListener('input', function () {
	var out = document.querySelector('.out');
	var text = document.querySelector('.text');
	out.style.borderRadius = this.value+'px';

	if(this.value > 50) {
		out.style.backgroundColor = '#d46868';
	} else {
		out.style.backgroundColor = '';
	}
	text.innerHTML = '-webkit-border-radius: '+ this.value+'px;'+'\n';
	text.innerHTML += 'border-radius: '+this.value+'px;';

});
