// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "nuxt-og-image",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
    "@vueuse/motion/nuxt",
  ],

  runtimeConfig: {
    public: {
      GITHUB_LINK: process.env.GITHUB_LINK,
      LINKEDIN_LINK: process.env.LINKEDIN_LINK,
      RESUME_LINK: process.env.RESUME_LINK,
      CALENDLY_LINK: process.env.CALENDLY_LINK,
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
    },
  },
},

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  sitemap: {
    sitemaps: true,
    // modify the chunk size if you need
    defaultSitemapsChunkSize: 2000, // default 1000
  },

  /**SECTION SEO
   * @description SEO related configurations
   */
  site: {
    url: "https://charlesisa.dev",
    charset: "utf-16",
    viewport: "width=device-width, height=device-height, initial-scale=1,",
    name: "Charles' Portfolio",
    description: "Full-stack developer in Chicago",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
    trailingSlash: false,
  },

  app: {
    head: {
      titleTemplate: "%siteName %separator %s",
      templateParams: {
        separator: "|",
        // other common separators: '·', '—', '•'
      },
    },
  },

  

  //!SECTION
});
