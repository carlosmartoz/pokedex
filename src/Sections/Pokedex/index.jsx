import { Outlet, Link } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";

// Render Section UI
function Pokedex() {
	return (
		<>
			<header className="flex flex-col items-center gap-2 text-center">
				<h2 className="text-4xl text-main-dark font-inter font-bold">Pokédex</h2>

				<Link to="/">
					<BiSolidHome className="text-2xl text-main-dark hover:scale-110 transition-all" />
				</Link>
			</header>

			{/* Dynamic content through the url */}
			<Outlet />
		</>
	);
}

export { Pokedex };
