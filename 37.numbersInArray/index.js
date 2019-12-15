window.addEventListener('load', function () {
	let elem = document.querySelector('.checkElem');

	elem.onclick = function () {
		let len = document.querySelector('.lengthNum').value,
		min = document.querySelector('.minNum').value,
		max = document.querySelector('.maxNum').value,
		out = document.querySelector('.out');
		arr = [];

		for (var i = 0; i < len; i++) {
			arr.push(randomInteger( min, max ));
		}

		out.innerHTML = arr;
	}

	function randomInteger(min,max) {
		var rand = min - 0.5 +Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	}

});



