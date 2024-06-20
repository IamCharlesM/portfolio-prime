<template>
  <section
    class="h-[calc(100vh-112px)] place-content-center p-4"
    id="home"
  >
    <div class="max-w-5xl mx-auto md:h-96 h-fit gap-10 lg:gap-36 flex flex-col">
      <TitleBody
        class="flex flex-col h-fit"
        heading="1"
        title="What's good? I'm"
        name="Charles McGregory."
        body="I'm a full-stack software engineer with a passion for using data to build beautiful, functional, and accessible websites for businesses."
      />
      <div class="flex justify-center gap-3 h-full">
        <Github :size="44" /> <Linkedin :size="44" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Github, Linkedin } from "lucide-vue-next";
</script>
