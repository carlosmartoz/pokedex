/** @type {import('tailwindcss').Config} */
export default {
	// SafeList Classes
	safelist: [
		{
			pattern:
				/bg-(grass|fire|water|bug|flying|electric|ground|rock|ice|fighting|dark|psychic|ghost|dragon|steel|normal|poison|fairy)/,
		},
		{
			pattern:
				/border-(grass|fire|water|bug|flying|electric|ground|rock|ice|fighting|dark|psychic|ghost|dragon|steel|normal|poison|fairy)/,
		},
		{
			pattern:
				/stroke-(grass|fire|water|bug|flying|electric|ground|rock|ice|fighting|dark|psychic|ghost|dragon|steel|normal|poison|fairy)/,
		},
	],

	// Files that are affected by taiwlind
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	// Theme custom classes
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
		},
		colors: {
			"main-dark": "#30332E",
			"main-light": "#F0F3F5",

			grass: "#63BC5A",
			fire: "#FF9D55",
			water: "#5090D6",
			bug: "#91C12F",
			flying: "#89AAE3",
			electric: "#F4D23C",
			ground: "#D97845",
			rock: "#C5B78C",
			ice: "#73CEC0",
			fighting: "#CE416B",
			dark: "#5A5465",
			psychic: "#FA7179",
			ghost: "#5269AD",
			dragon: "#0B6DC3",
			steel: "#5A8EA2",
			normal: "#919AA2",
			poison: "#B567CE",
			fairy: "#EC8FE6",
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			code: ["Fira Code", "monospace"],
		},
		extend: {
			skew: {
				32: "32deg",
			},
		},
	},

	plugins: [],
};
