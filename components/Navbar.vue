<template>
  <nav class="items-center justify-between h-28 p-4 flex flex-row border-b-2">
    <div>
      <NuxtLink to="/">
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
      <DrawerMenu
        :pages="pages"
        :links="links"
      />
    </div>
    <div class="hidden md:flex">
      <ul class="flex">
        <li
          v-for="(page, index) in pages"
          :key="index"
        >
          <NuxtLink
            :to="page.to"
            class=""
            ><Button variant="link"> {{ page.property }}</Button></NuxtLink
          >
        </li>
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <a
            v-if="link.name == 'hire me'"
            :href="link.href"
            target="_blank"
            ><Button>{{ link.name }}</Button></a
          >
          <a
            v-else
            :href="link.href"
            target="_blank"
            ><Button variant="link">{{ link.name }}</Button></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { Button } from "@/components/ui/button";

  const pages = [
    {
      property: "home",
      to: "/",
    },
    {
      property: "projects",
      to: "/project",
    },
  ];

  const links = [
    {
      name: "resume",
      href: "https://docs.google.com/document/d/1iU0btnTA44hugqX1iixqxUWb-Nl92XZbhwmcqvL32aQ/edit#heading=h.rlsx4o5b4mpo",
    },
    { name: "hire me", href: "https://calendly.com/because-e2g/30min" },
  ];
</script>

<style scoped></style>
