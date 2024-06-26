<template>
  <div class="scroll-smooth">
    <SpeedInsights />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
