/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['"Neue Montreal', 'system-ui', 'sans'],
			'display': ['"Right Grotesk Tight"', 'system-ui', 'sans'],
		},
	},
	plugins: [],
};
