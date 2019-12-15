window.onload = function () {
	var menu = document.querySelector('.menu');

	menu.onmouseover = showMenu;
	menu.onmouseout = hideMenu;

	document.onkeydown = function (e) {

		if(e.code == 'ArrowLeft') showMenu();
		if(e.code == 'Escape' || e.code == 'ArrowRight') hideMenu();

	}

	function showMenu() {
		menu.style.right = 0;
	}

	function hideMenu() {
		menu.style.right = -300+'px';
	}
}