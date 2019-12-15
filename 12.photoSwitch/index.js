var slide = document.querySelector('.slide');
slide.addEventListener('mousemove', function (e) {
	var x = e.offsetX,
			two = document.querySelector('.slide__two');
	two.style.width = x+'px';
});


slide.addEventListener('mouseleave', function (e) {
	var two = document.querySelector('.slide__two');
	two.style.width = 50+'%';
});