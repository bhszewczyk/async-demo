const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Connection Timeout :(');
		} else {
			success(`Here is your fake data from ${url}`);
		}
	}, delay);
};

// callback hell
fakeRequestCallback(
	'books.com/page1',
	function () {
		console.log('IT WORKED!');
		fakeRequestCallback(
			'books/com/page2',
			function () {
				console.log('IT WORKED FOR THE SECOND TIME');
				fakeRequestCallback(
					'books.com/page3',
					function () {
						console.log('IT WORKED FOR THE THIRD TIME');
					},
					function () {
						console.log('PAGE 3 TIMEOUT');
					}
				);
			},
			function () {
				console.log('PAGE 2 TIMEOUT');
			}
		);
	},
	function () {
		console.log('TIMEOUT :(');
	}
);
