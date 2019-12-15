window.addEventListener('load', function () {
	
	document.addEventListener('click', function (event) {
		event = event || window.event;
		let target = event.target;

		if( target.classList.contains('slider-min__img') ) {
			let allImg = document.querySelectorAll('.slider-min__img'),
					mainImg = document.querySelector('#main-img');
			for (var i = 0; i < allImg.length; i++) {
				allImg[i].classList.remove('slider-min__img_active');
			}

			target.classList.add('slider-min__img_active');
			mainImg.src = target.src;
		}
	});

});