/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				dark: '#0d0d0d',
			},
		},
		fontFamily: {
			'sans': ['"Neue Montreal"', 'system-ui', 'sans'],
			'display': ['"Right Grotesk Tight"', 'system-ui', 'sans'],
		},
		fontSize: {
			sm: '1rem',
			base: ['1.2rem', '1.8rem'],
		},
	},
	plugins: [],
};
