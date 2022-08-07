const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const randomNum = Math.random();
		setTimeout(() => {
			if (randomNum < 0.5) {
				resolve('data is here');
			}
			reject('request error');
		}, 1000);
	});
};

fakeRequest('udemy.com')
	.then((data) => {
		console.log('udemy response');
		console.log('data received:', data);
	})
	.catch((err) => console.log('udemy timeout', err));
