<template>
  <div v-if="heading == 1" class="space-y-3">
    <h1 v-motion-fade-visible-once class="text-4xl font-semibold md:text-5xl">
      {{ title }}
      <span v-if="name" v-motion-fade-visible-once class="text-primary">{{
        name
      }}</span>
    </h1>
    <p
      v-motion-fade-visible-once
      :delay="animationDelay"
      class="text-xl text-left lg:text-center md:text-3xl"
    >
      {{ body }}
    </p>
  </div>
  <div v-else-if="heading == 2">
    <h2 v-motion-fade-visible-once class="text-4xl">{{ title }}</h2>
    <p v-motion-fade-visible-once :delay="animationDelay" class="text-base">
      {{ body }}
    </p>
    <span v-if="name" v-motion-fade-visible-once class="text-primary">{{
      name
    }}</span>
  </div>
  <div v-else-if="heading == 3">
    <h3 v-motion-fade-visible-once class="text-3xl">{{ title }}</h3>
    <p v-motion-fade-visible-once :delay="animationDelay" class="text-sm">
      {{ body }}
    </p>
    <span v-if="name" v-motion-fade-visible-once class="text-primary">{{
      name
    }}</span>
  </div>
  <div v-else-if="heading == 4">
    <h4 v-motion-fade-visible-once class="text-2xl">{{ title }}</h4>
    <p v-motion-fade-visible-once :delay="animationDelay" class="text-xs">
      {{ body }}
    </p>
    <span v-if="name" v-motion-fade-visible-once class="text-primary">{{
      name
    }}</span>
  </div>
  <div v-else-if="heading == 5">
    <h5 v-motion-fade-visible-once class="text-xl">{{ title }}</h5>
    <p v-motion-fade-visible-once :delay="animationDelay" class="text-xxs">
      {{ body }}
    </p>
    <span v-if="name" class="text-primary">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { animate } from "motion";

const { heading, body, title, animationDelay, name } = defineProps<{
  heading?: number;
  title?: string;
  body?: string;
  name?: string;
  animationDelay?: number;
}>();

async function onEnter(el: Element, onComplete: () => void) {
  await animate(el, { opacity: 1 });
  onComplete();
}

async function onLeave(el: Element, onComplete: () => void) {
  await animate(el, { opacity: 0 });
  onComplete();
}
</script>

<style scoped>
h1 {
  opacity: 0;
}
</style>
