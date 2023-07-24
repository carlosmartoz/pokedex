import { Logo } from "../index.js";
import PropTypes from "prop-types";

// Render UI Component
function Item({ name, number, type }) {
	return (
		<>
			<div
				className={`-skew-x-32 border-2 border-solid border-${type} bg-${type} bg-opacity-10 px-6 py-1.5 mx-3.5 hover:scale-110 transition-all`}
			>
				<div className="skew-x-32 flex justify-between items-center">
					<Logo width="24" height="24" className={`stroke-${type}`} />

					<p className="text-base text-main-dark font-code font-normal text-center text-ellipsis capitalize whitespace-nowrap overflow-hidden w-2/4">
						{name}
					</p>

					<p className="text-base text-main-dark font-code font-normal">#{number}</p>
				</div>
			</div>
		</>
	);
}

// Define prop types for the Item component
Item.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export { Item };
