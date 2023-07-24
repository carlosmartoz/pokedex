import { Link, Navigate, useParams } from "react-router-dom";
import { usePokemonList } from "../../Hooks";
import { POKEMON_PER_PAGE } from "../../Utils/Constants";
import { Loader, Item, Pagination } from "../index.js";

// Render Component UI
function List() {
	// Get the 'pages' parameter from the URL using the useParams hook.
	const { pages } = useParams();

	// Use the custom hook usePokemonList to fetch Pokemon data based on the 'pages' parameter.
	// It returns an array with 'pokemonList' containing Pokemon data for the current page,
	// 'isLoading' to indicate if the data is still loading, and 'maxPages' to indicate the total number of pages.
	const [pokemonList, isLoading, maxPages] = usePokemonList({ pages });

	// If the 'pages' parameter is less than 1, redirect to page 1.
	if (pages < 1) {
		return <Navigate to="/pokedex/1" />;
	}

	// If the 'pages' parameter is greater than 56, redirect to page 56 (the maximum number of pages).
	else if (pages > 56) {
		return <Navigate to="/pokedex/56" />;
	}

	return (
		<>
			{/* If the data is still loading, display a loading animation */}
			{isLoading ? (
				<ul className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 lg:grid-cols-3">
					{/* Create a placeholder list with Loader components while data is loading */}
					{Array.from({ length: POKEMON_PER_PAGE }, (_, index) => (
						<Loader key={index} />
					))}
				</ul>
			) : (
				<>
					{/* If data is loaded, display the list of Pokemon */}
					<ul className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 lg:grid-cols-3">
						{/* Map through the 'pokemonList' array and render each Pokemon as a Item component */}
						{pokemonList.map((pokemon) => (
							<li key={pokemon.id}>
								<Link to={`/pokemon/${pokemon.id}`}>
									<Item
										id={pokemon.id}
										name={pokemon.name}
										number={pokemon.id < 1000 ? String(pokemon.id).padStart(4, "0") : pokemon.id}
										type={pokemon.types[0].type.name}
									/>
								</Link>
							</li>
						))}
					</ul>
				</>
			)}

			{/* Render the pagination component to allow navigating between different pages */}
			<Pagination pages={parseInt(pages)} maxPages={maxPages} />
		</>
	);
}

export { List };
