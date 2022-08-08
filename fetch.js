// fetch('https://swapi.dev/api/people/1')
// 	.then((res) => {
// 		console.log(res);
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const loadStarWarsPeople = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/people/1');
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log('Something went wrong :(', err);
	}
};

loadStarWarsPeople();
