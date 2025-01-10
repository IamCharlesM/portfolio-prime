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
import { delay } from "motion";

const props = defineProps<{
  icon: "code" | "cloud-cog" | "heart-handshake";
}>();
</script>

<template>
  <Card
    v-motion-slide-visible-once-bottom
    :delay="150"
    v-if="icon == 'code'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear h-fit"
  >
    <CardHeader>
      <CardTitle class="space-y-4">
        <Code v-if="icon == 'code'" :size="24" absoluteStrokeWidth />

        <div>Front-End Developemnt</div>
      </CardTitle>
      <Separator class="my-4" />
    </CardHeader>
    <CardContent>
      Crafting visually stunning and highly interactive user interfaces is my
      forte. I specialize in creating responsive and intuitive designs that
      ensure an exceptional user experience across all devices. From sleek
      layouts to dynamic features, I bring your vision to life with modern
      technologies like Vue, React, and Django.
    </CardContent>
  </Card>

  <Card
    v-motion-slide-visible-once-bottom
    v-if="icon == 'cloud-cog'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear h-fit"
  >
    <CardHeader>
      <CardTitle class="space-y-4">
        <CloudCog v-if="icon == 'cloud-cog'" :size="24" absoluteStrokeWidth />
        <div>Back-End Developemnt</div>
      </CardTitle>
      <Separator class="my-4" />
    </CardHeader>
    <CardContent>
      <p class="">
        Behind every great website is a robust and efficient back-end system. I
        excel in building powerful server-side applications and APIs that manage
        your data seamlessly. Utilizing cutting-edge technologies such as
        Node.js, Python, and databases like MongoDB and SQL, I ensure your
        digital solutions are scalable, secure, and perform flawlessly.
      </p>
    </CardContent>
  </Card>

  <Card
    v-motion-slide-visible-once-bottom
    :delay="300"
    v-if="icon == 'heart-handshake'"
    class="border border-primary hover:bg-primary hover:text-black transition duration-300 ease-linear h-fit"
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
      <p>
        With a wealth of experience in the tech industry, I offer consulting
        services to help you navigate complex technical challenges. Whether you
        need guidance on optimizing your current systems, planning a new
        project, or integrating emerging technologies, my insights and strategic
        advice will empower you to make informed decisions and achieve your
        business goals.
      </p>
    </CardContent>
  </Card>
</template>
