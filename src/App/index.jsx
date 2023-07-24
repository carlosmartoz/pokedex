import "../Styles/index.css";
import { useLoadingSplash } from "../Hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Home, Pokedex, Pokemon } from "../Sections";
import { List, Splash } from "../Components";

// App
function App() {
	// State to indicate if the page is still loading
	const [isLoading] = useLoadingSplash();

	return (
		<>
			<Router>
				<main className="grid place-items-center w-screen min-h-screen">
					<section className="flex flex-col items-center gap-6 w-full p-8">
						{/* Router */}
						<Routes>
							{/* Error Page */}
							<Route path="*" element={<Error />} />

							{/* Home Page */}
							<Route path="/" element={isLoading ? <Splash /> : <Home />} />

							{/* Pokédex List */}
							<Route path="/pokedex" element={<Pokedex />}>
								{/* Pokédex List pagination */}
								<Route path=":pages" element={<List />} />
							</Route>

							{/* Pokémon Page */}
							<Route path="/pokemon/:id" element={<Pokemon />} />
						</Routes>
					</section>
				</main>
			</Router>
		</>
	);
}

export { App };
