// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: [
		'@nuxt/ui',
		'@nuxtjs/google-fonts',
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxtjs/sitemap',
		'@nuxtjs/i18n',
		'@pinia/nuxt',
	],
	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL || '',
		},
	},
	googleFonts: {
		download: true,
		families: {
			'Roboto Mono': {
				wght: '300..700',
			},
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/main.scss";`,
				},
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				commaDangle: 'only-multiline'
			},
		},
	},
	colorMode: {
		preference: 'light'
	},
	i18n: {
		locales: ['pl', 'en'],
		defaultLocale: 'pl',
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
});
