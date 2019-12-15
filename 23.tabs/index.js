window.addEventListener('load', function () {
	let head = document.querySelector('.tabs__header');
	head.onclick =  function (e) {
		let target = e.target;
		if(target.className == 'tabs__headline') {
			let dataT = target.getAttribute('data-tab');
			let tabsH = document.querySelectorAll('.tabs__headline');

			for (var i = 0; i < tabsH.length; i++) {
				tabsH[i].classList.remove('tabs__headlin_active');
			}

			target.classList.add('tabs__headlin_active');

			let items = document.querySelectorAll('.tabs__item');
			for (var i = 0; i < items.length; i++) {
				if(dataT == i) {
					items[i].style.display = 'block';
				} else {
					items[i].style.display = 'none';
				}
			}
		}
	}
});