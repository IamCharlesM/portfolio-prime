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
          ><CalendarClock class="my-auto" />
          <a :href="calendlyLink"
            ><Button
              variant="link"
              class="text-foreground hover:text-primary text-lg"
              >Calendly</Button
            ></a
          >
        </span>
        <span class="w-full flex gap-3"
          ><Linkedin class="my-auto" /><a :href="linkedinLink"
            ><Button
              variant="link"
              class="text-foreground hover:text-primary text-lg"
              >Linkedin</Button
            ></a
          ></span
        >
        <span class="w-full flex gap-3"
          ><Github class="my-auto" /><a :href="githubLink"
            ><Button
              variant="link"
              class="text-foreground hover:text-primary text-lg"
              >Github</Button
            ></a
          ></span
        >
      </div>
    </div>
    <component
      :is="currentComponent"
      @emit="switchComponent(FormSuccess)"
    ></component>
  </div>
</template>

<script setup lang="ts">
  import { Linkedin, Github, CalendarClock } from "lucide-vue-next";

  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";

  import FormContact from "@/components/FormContact";
  import FormSuccess from "@/components/FormSuccess";
  import { Form } from "./ui/form/index";
  const config = useRuntimeConfig();

  const calendlyLink = ref(config.public.CALENDLY_LINK);
  const githubLink = ref(config.public.GITHUB_LINK);
  const linkedinLink = ref(config.public.LINKEDIN_LINK);

  let currentComponent = shallowRef(FormContact);

  const switchComponent = (component: Object) => {
    currentComponent.value = component;
  };
</script>
