<template>
  <section
    class="lg:h-[482px] bg-muted flex flex-col h-fit"
    id="services"
  >
    <div
      class="max-w-7xl md:px-10 mx-auto p-4 h-full flex flex-col w-full md:gap-11"
    >
      <SectionTitle
        title="Services"
        description="What "
        highlight="I do"
        class="h-fit"
      />
      <div
        class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 h-full px-11 gap-3"
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
