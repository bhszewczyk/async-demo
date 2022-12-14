const login = async (username, password) => {
	if (!username || !password) {
		throw 'Missing credentials!';
	}

	if (password === 'secret') {
		return 'nice, come in!';
	}

	throw 'Incorrect password';
};

login('whatever', 'corgi')
	.then((msg) => {
		console.log('logged in!');
		console.log(msg);
	})
	.catch((err) => {
		console.log('Login failed');
		console.log(err);
	});

//how we can handle rejected promises in async await functions
async function retreiveDataOnLogin() {
	try {
		let data1 = await login('username', 'secret');
		console.log(data1);
	} catch (e) {
		console.log('error', e);
	}
}
