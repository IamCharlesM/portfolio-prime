<template>
  <div class="w-full flex">
    <NuxtLink :to="link">
      <figure class="rounded-lg flex flex-col w-full gap-4">
        <div
          class="px-2 bg-card py-4 lg:p-8 border border-primary h-fit w-fit mx-auto hover:border hover:bg-primary transition duration-300 ease-linear"
        >
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

        <figcaption class="text-sm flex flex-col gap-4 lg:px-0 px-11">
          <h3 class="text-2xl font-medium">{{ title }}</h3>
          <div class="flex flex-row flex-wrap gap-1">
            <span v-for="(tag, index) in tags" :key="index">
              <Badge
                class="w-fit"
                v-if="tag.name != '#projects' && tag.name != '#projects'"
                >{{ tag.name }}</Badge
              >
            </span>
          </div>

          <p class="text-lg font-light">{{ excerpt }}</p>
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
  tags?: Array<{ name: string }>;
}>();
</script>

<style scoped></style>
