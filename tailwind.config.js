/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			textColor: {
				"sekawan-primary": "#1E7CFE",
			},
			backgroundColor: {
				"sekawan-primary": "#1E7CFE",
				"sekawan-dark": "#23272F",
				"sekawan-light": "#FFFFFF",
			},
			borderColor: {
				"sekawan-primary": "#1E7CFE",
			},
		},
	},
	plugins: [],
};
