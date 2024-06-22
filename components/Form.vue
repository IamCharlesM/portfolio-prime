<template>
  <div
    class="w-full h-fit grid md:grid-cols-2 grid-cols-1 gap-10 max-w-5xl mx-auto bg-muted p-8 text-lg"
  >
    <div class="flex flex-col gap-10">
      <div class="flex flex-col text-2xl font-medium">
        <span>Have an awesome idea?</span>
        <span class="text-primary">Let's Discuss</span>
      </div>

      <div class="gap-4 flex flex-col">
        <span class="w-full flex gap-3"
          ><CalendarClock /> <a :href="calendlyLink">Calendly</a>
        </span>
        <span class="w-full flex gap-3"
          ><Linkedin /><a :href="linkedinLink">Linkedin</a></span
        >
        <span class="w-full flex gap-3"
          ><Github /><a :href="githubLink">Github</a></span
        >
        <span class="w-full flex gap-3"><MapPin /> Chicago, Illinois</span>
      </div>
    </div>
    <component
      :is="currentComponent"
      @emit="switchComponent(FormSuccess)"
    ></component>
  </div>
</template>

<script setup lang="ts">
  import { Linkedin, Github, MapPin, CalendarClock } from "lucide-vue-next";

  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";

  import FormContact from "@/components/FormContact";
  import FormSuccess from "@/components/FormSuccess";
  import { Form } from "./ui/form/index";

  const calendlyLink = process.env.CALENDLY_LINK;
  const githubLink = process.env.GITHUB_LINK;
  const linkedinLink = process.env.LINKEDIN_LINK;

  console.log(calendlyLink);

  let currentComponent = ref(FormContact);

  const switchComponent = (component: Object) => {
    currentComponent.value = component;
  };
</script>
