window.onload = function () {
	var btn = document.querySelector('.addElem'),
			toDoList = [];

	btn.onclick = function () {
		var elem = document.querySelector('.forme').value;

		var temp = {};
		temp.todo = elem;
		temp.check = false;
		var i  = toDoList.length;
		toDoList[i] = temp;
		console.log(toDoList);
	}

	function out() {
		
	}

}