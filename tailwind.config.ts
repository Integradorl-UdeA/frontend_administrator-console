import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				// Agregar colores personalizados aquí
				greenOne: '#69916E',
				grayRaccoon: '#595151',
				whiteBonds: '#E9E9E9',
				whiteMilk: '#FFFFFF',
				greenDirty: '#C3C3C3',
				secondary: '#2ecc71',
				whiteDirty: '#d3d3d3b0',
				grayPotato: '#444444e3'
				
				// Puedes agregar más colores según tus necesidades
			},
		},
	},
	plugins: [],
};
export default config;
