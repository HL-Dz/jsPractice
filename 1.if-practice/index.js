var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
	var num = document.querySelector('.forme').value,
			out = document.querySelector('.out');
	num = parseInt(num);

	if(num>=1) {
		out.innerHTML = 'Условие соблюдено'
	} else {
		out.innerHTML = 'Условие НЕВЫПОЛНЕНО!'
	}
});
 