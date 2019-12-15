var btn = document.querySelector('.btn');

btn.onclick = function () {
	userProgress(100);
}

function userProgress(time) {
	var progress = document.querySelector('.progressBar');
	var start = 0;

	var intId = setInterval(function () {
		if(start>100) {
			clearInterval(intId)
		} else {
			progress.value = start;
		}
		start+=10;
	}, time)
};
