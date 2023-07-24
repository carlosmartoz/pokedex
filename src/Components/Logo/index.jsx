import PropTypes from "prop-types";

// Render UI Component
function Logo({ width, height, className }) {
	return (
		<>
			<svg
				width={width}
				height={height}
				className={className}
				viewBox="0 0 26 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 25C19.6276 25 25 19.6276 25 13C25 6.3724 19.6276 1 13 1C6.3724 1 1 6.3724 1 13C1 19.6276 6.3724 25 13 25Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.9996 16.6002C13.9544 16.6002 14.8701 16.2209 15.5452 15.5458C16.2203 14.8706 16.5996 13.955 16.5996 13.0002C16.5996 12.0454 16.2203 11.1297 15.5452 10.4546C14.8701 9.77947 13.9544 9.40018 12.9996 9.40018C12.0448 9.40018 11.1292 9.77947 10.454 10.4546C9.77891 11.1297 9.39963 12.0454 9.39963 13.0002C9.39963 13.955 9.77891 14.8706 10.454 15.5458C11.1292 16.2209 12.0448 16.6002 12.9996 16.6002V16.6002Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M1 13.0002H9.4M16.6 13.0002H25" strokeWidth="2" />
			</svg>
		</>
	);
}

// Define prop types for the Logo component
Logo.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export { Logo };
