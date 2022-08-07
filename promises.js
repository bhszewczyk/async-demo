const fakeRequestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Connection Timeout :(');
			} else {
				resolve(`Here is your fake data from ${url}`);
			}
		}, delay);
	});
};

const udemyResponse = fakeRequestPromise('udemy.com/course/my-course');

console.log(udemyResponse);
udemyResponse
	.then(() => {
		console.log('IT WORKED FOR UDEMY');
		fakeRequestPromise('udemy.com/course/my-course/progress')
			.then(() => console.log('STATUS RETRIEVED'))
			.catch(() => console.log('STATUS NOT RETRIEVED'));
	})
	.catch(() => console.log('UDEMY TIMEOUT'));
