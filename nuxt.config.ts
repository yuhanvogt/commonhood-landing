export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: false},

    app: {
        head: {
            title: 'Commonhood',
            htmlAttrs: {
                lang: 'en',
                dir: 'ltr'
            },
            link: [
                {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
                {rel: 'shortcut icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'manifest', href: '/site.webmanifest'}
            ]
        }
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    css: ['@/assets/styles/main.scss'],

    modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-svgo']
})