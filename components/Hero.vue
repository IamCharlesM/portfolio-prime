<template>
  <section
    class="min-h-[calc(100vh-112px)] place-content-center p-4 overflow-auto"
    id="home"
  >
    <div class="max-w-5xl mx-auto md:h-96 h-fit gap-10 lg:gap-36 flex flex-col">
      <TitleBody
        class="flex flex-col h-fit text-center"
        :heading="1"
        title="What's good? I'm"
        name="Charles McGregory."
        body="I'm a full-stack software engineer with a passion for using data to build beautiful, functional, and accessible websites for businesses."
      />
      <div class="flex justify-center gap-3 h-full">
        <a
          :href="githubLink"
          aria-label="Check out my Github"
          rel="nofollow"
          target="_blank"
        >
          <Github
            :size="44"
            :color="'hsl(var(--primary))'"
            class="animate hover:scale-105 transition"
        /></a>
        <a
          :href="linkedinLink"
          aria-label="Check out my linkedin"
          rel="nofollow"
          target="_blank"
        >
          <Linkedin
            :size="44"
            :color="'hsl(var(--primary))'"
            class="animate hover:scale-105 transition"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";

const config = useRuntimeConfig();
const githubLink = ref(config.public.GITHUB_LINK);
const linkedinLink = ref(config.public.LINKEDIN_LINK);
</script>
