<template>
  <section
    class="flex flex-col h-fit"
    id="about-me"
  >
    <div class="max-w-7xl flex flex-col h-fit mx-auto gap-10">
      <SectionTitle
        title="MY BIO"
        description="About"
        highlight="me"
      />
      <div class="flex flex-col md:grid md:grid-cols-2 w-full h-fit">
        <div class="p-4">
          <div
            class="rounded-full w-96 h-96 bg-primary bg-cover mx-auto"
            style="background-image: url('/me.jpg')"
          ></div>
        </div>
        <div class="flex flex-col gap-8 p-4">
          <p class="text-lg">
            I am a passionate full-stack software engineer who thrives on using
            data to create innovative solutions for businesses. My journey began
            with creating custom themes for MySpace, where I developed a love
            for coding and web design. One of my proudest achievements is
            co-founding edenofthewest.com, an internet radio station that has
            been live for over a decade!
          </p>
          <p class="text-lg">
            Beyond the screen, I enjoy spending quality time with my friends and
            cats, indulging in books, dancing, playing video games, and watching
            anime. Recently, I've discovered a new passion for traveling,
            exploring new cultures, and expanding my horizons.
          </p>

          <a :href="resumeLink">
            <Button class="w-fit">
              <Mail class="w-4 h-4 mr-2" /> View Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const resumeLink = process.env.RESUME_LINK;

  import { Button } from "@/components/ui/button";
  import { Mail } from "lucide-vue-next";
</script>

<style scoped></style>
