import { useState, useEffect } from "react";

// Custom hook for displaying a loading splash screen
const useLoadingSplash = () => {
	// State to track the loading status
	const [isLoading, setIsLoading] = useState(true);

	// Effect to simulate loading by setting isLoading to false after 2 seconds
	useEffect(() => {
		// Use setTimeout to schedule setting 'isLoading' to false after 2 seconds (2000 milliseconds)
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		// Clear the timeout when the component unmounts to avoid memory leaks
		// This cleanup function is called when the component is about to unmount or when the 'isLoading' state changes
		return () => clearTimeout(timeout);
	}, []);

	// Return the loading status as an array
	return [isLoading];
};

export { useLoadingSplash };
