window.addEventListener('load', function(){
	let addElem = document.querySelector('.addElem');
	addElem.addEventListener('click', function() {
		let text = document.querySelector('.forme').value;
		// document.querySelector('.forme').value='';
		let chips = document.createElement('div');
		chips.classList.add('chips');
		chips.innerText = text;

		if( !document.querySelector('.wrap-chips') ) {
			let wrap = document.createElement('div');
			wrap.classList.add('wrap-chips');
			document.body.appendChild(wrap);
		}

		document.querySelector('.wrap-chips').appendChild(chips);

		setTimeout(function () {
			chips.style.left = 150+'%';
		}, 5000)

		setTimeout(function()  {
			chips.remove();
			clearWrap();
		}, 6000)

		function clearWrap() {
			let chips = document.querySelectorAll('.chips');

			if( chips.length == 0 ) {
				setTimeout(function () {
					document.querySelector('.wrap-chips').remove();
				}, 1500)
			}
		}


	})
});


