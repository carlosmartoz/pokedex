import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import PropTypes from "prop-types";

// Define the Pagination component.
function Pagination({ pages, maxPages }) {
	return (
		<>
			<footer className="flex justify-center gap-1">
				{/* Link to the first page (/pokedex/1) */}
				<Link
					to="/pokedex/1"
					className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all ${
						pages <= 1 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
					}`}
				>
					<BiChevronsLeft />
				</Link>

				{/* Link to the previous page (/pokedex/pages-1) */}
				<Link
					to={`/pokedex/${pages - 1}`}
					className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all ${
						pages <= 1 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
					}`}
				>
					<BiChevronLeft />
				</Link>

				{/* Link to page (pages-2) if the current page is the last page */}
				{pages === 56 && (
					<Link
						to={`/pokedex/${pages - 2}`}
						className="flex items-center justify-center text-base text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all"
					>
						{pages - 2 < 10 ? `0${pages - 2}` : pages - 2}
					</Link>
				)}

				{/* Link to page (pages-1) if the current page is greater than 1 */}
				{pages > 1 && (
					<Link
						to={`/pokedex/${pages - 1}`}
						className="flex items-center justify-center text-base text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all"
					>
						{pages - 1 < 10 ? `0${pages - 1}` : pages - 1}
					</Link>
				)}

				{/* Display the current page */}
				<span className="text-base text-main-light font-code font-medium border-2 border-solid border-main-dark outline-none bg-main-dark px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all">
					{pages < 10 ? `0${pages}` : pages}
				</span>

				{/* Link to page (pages+1) if the current page is less than the last page */}
				{pages < 56 && (
					<Link
						to={`/pokedex/${pages + 1}`}
						className="flex items-center justify-center text-base text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all"
					>
						{pages + 1 < 10 ? `0${pages + 1}` : pages + 1}
					</Link>
				)}

				{/* Link to page (pages+2) if the current page is the first page */}
				{pages === 1 && (
					<Link
						to={`/pokedex/${pages + 2}`}
						className="flex items-center justify-center text-base text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all"
					>
						{pages + 2 < 10 ? `0${pages + 2}` : pages + 2}
					</Link>
				)}

				{/* Link to the next page (/pokedex/pages+1) */}
				<Link
					to={`/pokedex/${pages + 1}`}
					className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all ${
						pages >= 56 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
					}`}
				>
					<BiChevronRight />
				</Link>

				{/* Link to the last page (/pokedex/maxPages) */}
				<Link
					to={`/pokedex/${maxPages}`}
					className={`flex items-center justify-center text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-2 py-0 hover:text-main-light hover:bg-main-dark transition-all ${
						pages >= 56 ? "cursor-not-allowed pointer-events-none opacity-50" : ""
					}`}
				>
					<BiChevronsRight />
				</Link>
			</footer>
		</>
	);
}

// Define prop types for the Pagination component
Pagination.propTypes = {
	pages: PropTypes.number.isRequired,
	maxPages: PropTypes.number.isRequired,
};

export { Pagination };
