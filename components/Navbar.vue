<template>
  <nav class="h-28 p-4 border-b-2 sticky top-0 z-50 bg-background">
    <div class="items-center mx-auto max-w-7xl justify-between flex flex-row">
      <div>
        <NuxtLink :to="{ path: '/' }">
          <NuxtPicture
            format="avif,webp"
            src="/logo.webp"
            placeholder
            quality="80"
            width="100"
            height="100"
            alt="My Logo"
            fit="cover"
          />
        </NuxtLink>
      </div>
      <div class="flex md:hidden">
        <DrawerMenu :pages="pages" :links="links" />
      </div>
      <div class="hidden md:flex">
        <ul class="flex">
          <li v-for="(page, index) in pages" :key="index">
            <NuxtLink :to="{ path: page.path, hash: page.hash }" class=""
              ><Button
                variant="link"
                class="text-foreground hover:text-primary"
              >
                {{ page.property }}</Button
              ></NuxtLink
            >
          </li>
          <li v-for="(link, index) in links" :key="index">
            <a
              v-if="link.name == 'hire me'"
              :href="link.href"
              target="_blank"
              rel="nofollow"
              ><Button>{{ link.name }}</Button></a
            >
            <a v-else :href="link.href" target="_blank" rel="nofollow"
              ><Button
                variant="link"
                class="text-foreground hover:text-primary"
                >{{ link.name }}</Button
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

const config = useRuntimeConfig();
const calendlyLink = config.public.CALENDLY_LINK;
const resumeLink = config.public.RESUME_LINK;

const pages = [
  {
    property: "home",
    path: "/",
  },
  {
    property: "projects",
    path: "/project",
  },
  {
    property: "services",
    path: "/",
    hash: "#services",
  },
  {
    property: "my bio",
    path: "/",
    hash: "#about-me",
  },
  {
    property: "contact",
    path: "/",
    hash: "#contact-me",
  },
];

const links = [
  {
    name: "resume",
    href: resumeLink,
  },
  { name: "hire me", href: calendlyLink },
];
</script>

<style scoped></style>
