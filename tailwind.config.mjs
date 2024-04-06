/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Quicksand', 'ui-sans-serif', 'system-ui'],
			},
			fontSize: {
				"h1Desktop": ['56px', { lineHeight: '1' }],
				"h1Tablet": ['52px', { lineHeight: '1' }],
				"h1Mobile": ['40px', { lineHeight: '1' }],
				"h2Desktop": ['48px', { lineHeight: '1' }],
				"h2Tablet": ['44px', { lineHeight: '1' }],
				"h2Mobile": ['36px', { lineHeight: '1' }],
				lg: ['24px', { lineHeight: '1.75rem' }],
			},
			textColor: {
				"black": "#464646",
				"primary": '#2563EB',
				"secondary": '#EBAF26',
				"secondary-200": "#F1C45D"
			},
			backgroundColor: {
				"bg": "#FFFDFA",
				"primary": '#2563EB',
			}
		},
		plugins: [],
	}
}
