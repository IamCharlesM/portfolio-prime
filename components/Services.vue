<template>
  <section class="md:h-[482px] bg-muted flex flex-col h-fit">
    <div class="max-w-7xl md:px-10 mx-auto py-4 h-full flex flex-col w-full">
      <SectionTitle
        title="Services"
        description="What "
        highlight="I do"
        class="h-fit"
      />
      <div
        class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 h-full md:p-11 gap-3 p-4"
      >
        <Card icon="cloud-cog" />
        <Card icon="code" />
        <Card icon="heart-handshake" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
