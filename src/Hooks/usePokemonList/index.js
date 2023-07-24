import axios from "axios";
import { useState, useEffect } from "react";
import { POKEMON_PER_PAGE } from "../../Utils/Constants";

const usePokemonList = ({ pages }) => {
	// Custom hook to fetch a list of Pokémon based on the provided 'pages' parameter

	// State to store the fetched Pokémon list
	const [pokemonList, setPokemonList] = useState([]);

	// State to indicate if the data is still loading
	const [isLoading, setIsLoading] = useState(true);

	// Calculate the maximum number of pages based on the total number of Pokémon available
	const maxPages = Math.ceil(1008 / POKEMON_PER_PAGE);

	// useEffect hook to fetch the Pokémon list when the 'pages' parameter changes
	useEffect(() => {
		// Function to fetch the Pokémon list from the API
		const fetchPokemonList = async () => {
			try {
				// Check if the requested page is beyond the maximum number of pages available
				// If so, set isLoading to false and return to prevent unnecessary API calls
				if (pages > maxPages) {
					setIsLoading(false);

					return;
				}

				// Calculate the 'offset' based on the current page and the number of Pokémon per page
				const offset = (pages - 1) * POKEMON_PER_PAGE;

				// Fetch the list of Pokémon from the PokeAPI
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_PER_PAGE}&offset=${offset}`
				);

				// Create an array of promises to fetch details for each Pokémon in the list
				const promises = response.data.results.map(async (pokemon) => {
					const pokemonDetails = await axios.get(pokemon.url);

					return pokemonDetails.data;
				});

				// Wait for all promises to resolve and get details for all Pokémon
				const allPokemonDetails = await Promise.all(promises);

				// Update the state with the fetched Pokémon list and set isLoading to false
				setPokemonList(allPokemonDetails);

				setIsLoading(false);
			} catch (error) {
				// Handle errors during the API call and set isLoading to false
				setIsLoading(false);
			}
		};

		// Set isLoading to true and call the fetchPokemonList function
		setIsLoading(true);

		fetchPokemonList();
	}, [pages, maxPages]); // The effect will re-run whenever 'pages' or 'maxPages' change

	// Return the Pokémon list, isLoading state, and maxPages value
	return [pokemonList, isLoading, maxPages];
};

export { usePokemonList };
