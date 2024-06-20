<template>
  <div class="w-full text-center">
    <h2 class="text-2xl">{{ title }}</h2>
    <p class="text-4xl font-semibold">
      {{ description }} <span class="text-primary">{{ highlight }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    description: string;
    highlight?: string;
  }>();

  const { title, description, highlight } = toRefs(props);
</script>
