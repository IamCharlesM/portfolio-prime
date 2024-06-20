<template>
  <div class="w-full flex">
    <NuxtLink
      :to="link"
      class=""
    >
      <figure class="rounded-lg flex flex-col w-full gap-4">
        <div class="px-2 py-4 border border-primary h-64 w-fit mx-auto">
          <NuxtPicture
            :src="src"
            :alt="alt"
            width="400"
            height="300"
            fit="inside"
            placeholder
            format="avif,webp"
            quality="80"
          />
        </div>

        <figcaption class="text-sm flex flex-col gap-4 px-11">
          <h3 class="text-2xl font-medium">{{ title }}</h3>
          <p class="text-lg">{{ excerpt }}</p>
        </figcaption>
      </figure>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src?: string;
    alt?: string;
    title?: string;
    link?: string;
    excerpt?: string;
  }>();
</script>

<style scoped></style>
