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
    "nuxt-og-image"
  ],
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

  /**SECTION SEO
   * @description SEO related configurations
   */
  site: {
    url: "https://charlesisa.dev",
    charset: "utf-16",
    viewport: "width=device-width, height=device-height, initial-scale=1,",
    name: "Charles McGregory's portfolio",
    meta: [
      {
        name: "description",
        content: "I like to dabble in a lot of software related things.",
      },
    ],
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