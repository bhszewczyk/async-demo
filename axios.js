const getStarWarsStarships = async (id) => {
	try {
		const response = await axios
			.get(`https://swapi.dev/api/starships/${id}/`)
			.then((res) => console.log(res.data));
	} catch (err) {
		console.log('Error:', err.message);
	}
};

const id = Math.floor(Math.random() * 10);
getStarWarsStarships(id);
getStarWarsStarships(4);
getStarWarsStarships(5);
getStarWarsStarships(6);
