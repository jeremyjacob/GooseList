const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				'groose': {
					'light': '#6DAF5F',
					'black': '#233224',
					'medium': 'hsl(112, 48%, 36%)',
					'dark': '#375D31',
					'pale': '#E6EFE5',
					'offwhite': 'hsl(110, 37%, 99%)',

					'50': '#f5f8f5',
					'100': '#ecf1ea',
					'200': '#cfdccc',
					'300': '#b1c7ad',
					'400': '#779e6f',
					'500': '#3d7431',
					'600': '#37682c',
					'700': '#2e5725',
					'800': '#25461d',
					'900': '#1e3918'
				}
			},
			transitionDuration: {
				DEFAULT: '150ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(.44,.1,.66,1)'
			},
			fontFamily: {
				sans: ['"Lato"', 'sans-serif'],
				serif: ['"Craft Rounded"', 'serif']
			},
			fontSize: {
				'xs': '.75rem',
				'tiny': '.875rem',
				'sm': '.950rem',
				'base': '1rem',
				'md': '1.0625rem',
				'lg': '1.125rem',
				'xl': '1.225rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '2.75rem',
				'6xl': '4rem',
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem',
			}
		},
	},

	plugins: [],
};

module.exports = config;
