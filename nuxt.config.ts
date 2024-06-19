// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-gtag"
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
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, height=device-height, initial-scale=1,",
      title: "Charles McGregory's portfolio",
      meta: [
        {
          name: "description",
          content: "I like to dabble in a lot of software related things.",
        },
      ],
    },
  },

  //!SECTION
});