import { Logo } from "../../Components";
import { Link } from "react-router-dom";

// Render Section UI
function Error() {
	return (
		<>
			<Logo width="56" height="56" className="stroke-main-dark" />

			<div className="flex flex-col gap-2 text-center">
				<h3 className="text-2xl text-main-dark font-inter font-bold">A wild 404 Error appeared!</h3>

				<p className="text-base text-main-dark font-code font-normal max-w-md">
					<strong className="font-medium">Error 404</strong> - Page Not Found.
				</p>

				<p className="text-base text-main-dark font-code font-normal max-w-md">
					Sorry, Trainer! The Pokémon you are seeking is nowhere to be found.
				</p>
			</div>

			<Link
				to="/"
				className="text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-6 py-1.5 hover:text-main-light hover:bg-main-dark transition-all"
			>
				Go to Home
			</Link>
		</>
	);
}

export { Error };
