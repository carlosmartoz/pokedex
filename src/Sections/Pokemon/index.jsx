import { Link, Navigate, useParams } from "react-router-dom";
import { useFetchPokemon } from "../../Hooks/useFetchPokemon";
import { Logo } from "../../Components";
import { calculatePageForPokemon, formatNumber } from "../../Utils/Constants";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Render Section UI
const Pokemon = () => {
	// Get the 'id' parameter from the URL using 'useParams' hook
	const { id } = useParams();

	// Use the custom hook 'useFetchPokemon' to fetch Pokemon data by ID
	const [pokemonData, isLoading] = useFetchPokemon(id);

	// If still loading, display a loading spinner (Logo) until the data is fetched
	if (isLoading) {
		return <Logo width="56" height="56" className="stroke-dark animate-spin" />;
	}

	// If the 'id' is less than 1, navigate to the first Pokemon page
	if (id < 1) {
		return <Navigate to="/pokemon/1" />;
	}

	// If the 'id' is greater than 1008, navigate to the last Pokemon page
	if (id > 1008) {
		return <Navigate to="/pokemon/1008" />;
	}

	// If the data is fetched and valid, render the Pokemon details
	return (
		<>
			<div className="flex flex-col items-center gap-2 w-full max-w-sm">
				<div className="flex justify-between items-center w-full">
					<Link
						to={`/pokedex/${calculatePageForPokemon(pokemonData.id)}`}
						className="flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-1 hover:text-main-light hover:bg-main-dark transition-all"
					>
						<BiArrowBack />
					</Link>

					<div className="flex items-center gap-1">
						<Link
							to={`/pokemon/${pokemonData.id - 1}`}
							className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-1 hover:text-main-light hover:bg-main-dark transition-all ${
								pokemonData.id <= 1 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
							}`}
						>
							<BiChevronLeft />
						</Link>

						<Link
							to={`/pokemon/${pokemonData.id + 1}`}
							className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-1 hover:text-main-light hover:bg-main-dark transition-all ${
								pokemonData.id >= 1008 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
							}`}
						>
							<BiChevronRight />
						</Link>
					</div>
				</div>

				<div
					className={`flex flex-col items-center gap-1 w-full bg-${pokemonData.types[0].type.name} bg-opacity-10 border-2 border-solid border-${pokemonData.types[0].type.name} p-6`}
				>
					<header className="flex justify-between items-center w-full">
						<Logo width="32" height="32" className={`stroke-${pokemonData.types[0].type.name}`} />

						<p className="text-2xl text-main-dark font-code font-normal capitalize">{pokemonData.name}</p>
					</header>

					<img
						src={pokemonData.sprites.other["official-artwork"].front_default}
						alt={pokemonData.name}
						className="w-full sm:w-3/4 h-auto m-auto"
					/>

					<div className="flex flex-col gap-4 w-full">
						<div className="flex items-center gap-1">
							{pokemonData.types.map((type) => (
								<span
									key={type.type.name}
									className={`text-base text-main-light font-code font-medium capitalize bg-${type.type.name} px-6 py-1`}
								>
									{type.type.name}
								</span>
							))}
						</div>

						<hr className={`border-${pokemonData.types[0].type.name}`} />

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
							<div className="flex flex-col">
								<p className="text-sm text-main-dark font-code font-normal">Number:</p>

								<p className="text-base text-main-dark font-code font-medium">
									#{pokemonData.id < 999 ? String(pokemonData.id).padStart(4, "0") : pokemonData.id}
								</p>
							</div>

							<div className="flex flex-col">
								<p className="text-sm text-main-dark font-code font-normal">Ability:</p>

								<p className="text-base text-main-dark font-code font-medium capitalize">
									{pokemonData.abilities[0].ability.name}
								</p>
							</div>

							<div className="flex flex-col">
								<p className="text-sm text-main-dark font-code font-normal">Weight:</p>

								<p className="text-base text-main-dark font-code font-medium capitalize">
									{formatNumber(pokemonData.weight)}kg
								</p>
							</div>

							<div className="flex flex-col">
								<p className="text-sm text-main-dark font-code font-normal">Height:</p>

								<p className="text-base text-main-dark font-code font-medium capitalize">
									{formatNumber(pokemonData.height)}m
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { Pokemon };
