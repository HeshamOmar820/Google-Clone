// https://nuxt.com/docs/api/configuration/nuxt-config
import { Body } from './.nuxt/components.d';
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Google Clone',
        meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: `Search the world's information, including webpages, images, videos and more.` }
        ]
        }
    }
})
