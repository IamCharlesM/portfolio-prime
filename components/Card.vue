<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  import { Code, CloudCog, HeartHandshake } from "lucide-vue-next";

  const props = defineProps<{
    icon: "code" | "cloud-cog" | "heart-handshake";
  }>();
</script>

<template>
  <Card
    v-if="icon == 'code'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear"
  >
    <CardHeader>
      <CardTitle class="space-y-4">
        <Code
          v-if="icon == 'code'"
          :size="24"
          absoluteStrokeWidth
        />

        <div>Web Development</div>
      </CardTitle>
      <Separator class="my-4" />
    </CardHeader>
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      culpa illum corporis pariatur quidem dicta. Magni, dignissimos porro,
      facilis at numquam maiores accusamus praesentium quidem dolorum deserunt
      voluptatum ea debitis.
    </CardContent>
  </Card>

  <Card
    v-if="icon == 'cloud-cog'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear"
  >
    <CardHeader>
      <CardTitle class="space-y-4">
        <CloudCog
          v-if="icon == 'cloud-cog'"
          :size="24"
          absoluteStrokeWidth
        />
        <div>Cloud Computing</div>
      </CardTitle>
      <Separator class="my-4" />
    </CardHeader>
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      culpa illum corporis pariatur quidem dicta. Magni, dignissimos porro,
      facilis at numquam maiores accusamus praesentium quidem dolorum deserunt
      voluptatum ea debitis.
    </CardContent>
  </Card>

  <Card
    v-if="icon == 'heart-handshake'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear"
  >
    <CardHeader>
      <CardTitle class="space-y-4">
        <HeartHandshake
          v-if="icon == 'heart-handshake'"
          :size="24"
          absoluteStrokeWidth
        />
        <div>Consulting</div>
      </CardTitle>
      <Separator class="my-4" />
    </CardHeader>
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      culpa illum corporis pariatur quidem dicta. Magni, dignissimos porro,
      facilis at numquam maiores accusamus praesentium quidem dolorum deserunt
      voluptatum ea debitis.
    </CardContent>
  </Card>
</template>
