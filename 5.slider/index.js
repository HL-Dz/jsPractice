autoSlider();

var left = 0;
		timer,
		slider =  document.querySelector('.slider');

function autoSlider() {
	timer = setTimeout(function () {
		var line = document.querySelector('.slider__line');
		left = left - 254;
		if(left < -1524) {
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 1000)
}
