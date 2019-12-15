let values = ['-15edg', '-10%', '35px', '1em', '13pt', '2rem'];


function toNum(arr) {
	let out = [];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = parseFloat(arr[i]);
		if(arr[i]>0) out.push(arr[i]);
	}

	out.sort((a,b)=> {
		return a-b;
	});

	return out;
}

console.log(toNum(values));