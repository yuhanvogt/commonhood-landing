export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: false},

    app: {
        head: {
            title: 'Commonhood',
            htmlAttrs: {
                lang: 'en',
                dir: 'ltr'
            }
        }
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    css: ['@/assets/styles/main.scss'],

    modules: [
        '@nuxtjs/tailwindcss'
    ]
})