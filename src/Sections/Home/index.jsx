import { Logo } from "../../Components";
import { Link } from "react-router-dom";

// Render UI Section
function Home() {
	return (
		<>
			<Logo width="56" height="56" className="stroke-main-dark" />

			<div className="flex flex-col gap-2 text-center items-center">
				<h1 className="text-5xl text-main-dark font-inter font-bold">Welcome to the Pokédex!</h1>

				<p className="text-base text-main-dark font-code font-normal max-w-md">
					Your ultimate <strong className="font-medium">Pokémon</strong> resource.
				</p>

				<p className="text-base text-main-dark font-code font-normal max-w-md">
					Discover, explore, and catch them all! Unleash the adventure now!
				</p>
			</div>

			<Link
				to="/pokedex/1"
				className="text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-6 py-1.5 hover:text-main-light hover:bg-main-dark transition-all"
			>
				Start Pokédex
			</Link>
		</>
	);
}

export { Home };
