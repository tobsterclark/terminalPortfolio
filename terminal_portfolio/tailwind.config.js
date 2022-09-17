/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				cursor: "cursor 1.2s steps(2) infinite",
			},
			keyframes: {
				cursor: {
					"0%": { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
};
