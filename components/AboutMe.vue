<template>
  <section class="flex flex-col h-fit">
    <SectionTitle
      title="MY BIO"
      description="About"
      highlight="me"
    />
    <div class="grid grid-cols-2 w-full h-fit">
      <div class="p-4">
        <div class="rounded-full w-96 h-96 bg-primary mx-auto"></div>
      </div>
      <div class="flex flex-col gap-8 p-4">
        <span>
          ipsum dolor sit amet consectetur adipisicing elit. Non amet
          repellendus odit aspernatur reiciendis suscipit autem magnam beatae,
          explicabo doloremque eius cum minus ad atque tenetur magni! Magni,
          explicabo magnam!</span
        >
        <span
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          labore debitis porro, odio accusantium totam enim, aliquam voluptate
          earum nesciunt suscipit ipsum facere officiis maxime non quos. Neque,
          doloribus quisquam.</span
        ><span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed
          non, in est dolorum quod perspiciatis voluptates vitae provident cum
          repellat? Possimus obcaecati quo explicabo repellat dolore eum neque
          hic!</span
        >

        <Button class="w-fit">
          <Mail class="w-4 h-4 mr-2" /> View Resume
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Button } from "@/components/ui/button";
  import { Mail } from "lucide-vue-next";
</script>

<style scoped></style>
