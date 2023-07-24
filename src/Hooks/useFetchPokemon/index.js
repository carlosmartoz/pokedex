import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching Pokemon data by ID
const useFetchPokemon = (id) => {
	// State to store the fetched Pokemon data
	const [pokemonData, setPokemonData] = useState({});

	// State to track the loading state of the API request
	const [isLoading, setIsLoading] = useState(true);

	// Effect to fetch Pokemon data when the component mounts or when the 'id' prop changes
	useEffect(() => {
		// Function to fetch Pokemon data from the API
		const fetchPokemon = async () => {
			try {
				// Make a GET request to the PokeAPI endpoint with the provided 'id'
				const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

				// Set the fetched Pokemon data to the state
				setPokemonData(response.data);

				// Set 'isLoading' to false to indicate that the data has been fetched
				setIsLoading(false);
			} catch (error) {
				// If there's an error while fetching data, set 'isLoading' to false to indicate the request is complete
				setIsLoading(false);
			}
		};

		// Call the fetchPokemon function to initiate the API request
		fetchPokemon();
	}, [id]); // The effect will re-run whenever the 'id' prop changes

	// Return the fetched Pokemon data and the loading state as an array
	return [pokemonData, isLoading];
};

export { useFetchPokemon };
