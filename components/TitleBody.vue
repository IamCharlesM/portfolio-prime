<template>
  <div
    v-if="heading == 1"
    class="space-y-3"
  >
    <h1 class="text-5xl">
      {{ title }}
      <span
        v-if="name"
        class="text-primary"
        >{{ name }}</span
      >
    </h1>
    <p class="text-3xl">{{ body }}</p>
  </div>
  <div v-else-if="heading == 2">
    <h2 class="text-4xl">{{ title }}</h2>
    <p class="text-base">{{ body }}</p>
    <span
      v-if="name"
      class="text-primary"
      >{{ name }}</span
    >
  </div>
  <div v-else-if="heading == 3">
    <h3 class="text-3xl">{{ title }}</h3>
    <p class="text-sm">{{ body }}</p>
    <span
      v-if="name"
      class="text-primary"
      >{{ name }}</span
    >
  </div>
  <div v-else-if="heading == 4">
    <h4 class="text-2xl">{{ title }}</h4>
    <p class="text-xs">{{ body }}</p>
    <span
      v-if="name"
      class="text-primary"
      >{{ name }}</span
    >
  </div>
  <div v-else-if="heading == 5">
    <h5 class="text-xl">{{ title }}</h5>
    <p class="text-xxs">
      {{ body }}
    </p>
    <span
      v-if="name"
      class="text-primary"
      >{{ name }}</span
    >
  </div>
</template>

<script setup lang="ts">
  const { heading, body, title } = defineProps<{
    heading?: Number;
    title?: String;
    body?: String;
    name?: String;
  }>();
</script>

<style scoped></style>
