<template>
  <div class="scroll-smooth">
    <Hero class="py-10" />
    <Services class="py-10" />
    <Portfolio class="py-10" />
    <AboutMe class="py-10" />
    <ContactMe class="py-10" />
  </div>
</template>

<script setup lang="ts">
  defineOgImageComponent("Frame", {
    headline: "Hi",
    title: "My own slice of the internet",
    description: "Come take a glance into my world",
  });
</script>

<style scoped></style>
