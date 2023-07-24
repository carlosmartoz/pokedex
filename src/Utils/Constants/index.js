// Constants for the number of Pokémon per page and the total number of Pokémon
export const POKEMON_PER_PAGE = 18;
export const TOTAL_POKEMON = 1008;

// Function to calculate the page number for a given Pokémon ID
export const calculatePageForPokemon = (id) => {
	// Use Math.ceil to round up the division result to get the page number
	return Math.ceil(id / POKEMON_PER_PAGE);
};

// Function to format the number with one decimal place
export const formatNumber = (number) => {
	// Divide the number by 10 and use toLocaleString() to format with one decimal place
	const numberDivider = number / 10;
	return numberDivider.toLocaleString(undefined, { minimumFractionDigits: 1 });
};
