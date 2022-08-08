fetch('https://swapi.dev/api/people/1')
	.then((res) => {
		console.log(res);
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
