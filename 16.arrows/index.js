var out = document.querySelector('.out'),
		top1 = 0,
		left1 = 0;
document.addEventListener('keydown', function (e) {
	console.log(e.key);
	if (e.key =='ArrowRight') {
		out.style.left = left1+'px';
		left1++;
	} else if (e.key =='ArrowDown') {
		out.style.top = top1+'px';
		top1++;
	}
});