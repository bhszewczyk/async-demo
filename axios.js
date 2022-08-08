const getStarWarsStarships = async () => {
	const response = await axios
		.get('https://swapi.dev/api/starships/9/')
		.then((res) => console.log(res.data))
		.catch((err) => console.log('Error:', err.message));
};

getStarWarsStarships();
