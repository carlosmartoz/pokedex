// Render Component UI
function Loader() {
	return (
		<>
			<li className="-skew-x-32 border-2 border-solid border-normal bg-normal opacity-10 px-6 py-1.5 mx-3.5 animate-pulse">
				<div className="skew-x-32 flex justify-between items-center">
					<p className="text text-normal capitalize">Loading</p>

					<p className="text text-normal capitalize">#0000</p>
				</div>
			</li>
		</>
	);
}

export { Loader };
