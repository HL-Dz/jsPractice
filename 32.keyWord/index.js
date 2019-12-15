document.addEventListener('DOMContentLoaded', function () {
	let block = document.querySelector('.block'),
			keyWord = '';

	document.addEventListener('keydown', startCollection);

	function startCollection(e) {
		console.log(e.key);
		if(e.key == 'w') {
			document.removeEventListener('keydown', startCollection);
			document.addEventListener('keydown', symbolsCollection);
		}
	}

	function symbolsCollection(e) {
		if(e.key == 'Escape' || e.key == ' ') {
			stopCollection();
		} else {
			keyWord += e.key;
			if(keyWord == 'hlushak') {
				block.style.display = 'block';
				setTimeout(function () {
					block.style.display = 'none';
				}, 3000)
			}
		}
	}

	function stopCollection(e) {
		console.log('НАЧНИТЕ СНАЧАЛА!');
		keyWord = '';
		document.removeEventListener('keydown', symbolsCollection);
		document.addEventListener('keydown', startCollection);
	}
});


document.addEventListener('DOMContentLoaded', function () {
	let block = document.querySelector('.block'),
			keyWord = '';

	document.addEventListener('keydown', startCollection);

	function startCollection(e) {
		console.log(e.key);
		if(e.key == 'w') {
			document.removeEventListener('keydown', startCollection);
			document.addEventListener('keydown', symbolsCollection);
		}
	}

	function symbolsCollection(e) {
		if(e.key == 'Escape' || e.key == ' ') {
			stopCollection();
		} else {
			keyWord += e.key;
			if(keyWord == 'hlushak') {
				block.style.display = 'block';
				setTimeout(function () {
					block.style.display = 'none';
				}, 3000)
			}
		}
	}

	function stopCollection(e) {
		console.log('НАЧНИТЕ СНАЧАЛА!');
		keyWord = '';
		document.removeEventListener('keydown', symbolsCollection);
		document.addEventListener('keydown', startCollection);
	}
});


