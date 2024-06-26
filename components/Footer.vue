<template>
  <footer class="bg-muted py-10 !max-w-full">
    <div
      class="max-w-7xl mx-auto px-4 flex md:flex-row flex-col justify-between items-center"
    >
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
      <div class="flex flex-row w-fit gap-4">
        <div>
          <ul class="flex flex-col gap-4">
            <li v-for="(page, index) in pages" :key="index" class="h-2 my-1">
              <NuxtLink :to="{ path: page.path, hash: page.hash }" class=""
                ><Button
                  variant="link"
                  class="text-foreground hover:text-primary"
                >
                  {{ page.property }}</Button
                ></NuxtLink
              >
            </li>
            <li v-for="(link, index) in links" :key="index" class="h-2 my-1">
              <a :href="link.href" target="_blank" rel="nofollow"
                ><Button
                  variant="link"
                  class="text-foreground hover:text-primary"
                  >{{ link.name }}</Button
                ></a
              >
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col gap-4">
            <li
              v-for="(socialLink, index) in socialLinks"
              :key="index"
              class="h-2 my-1"
            >
              <a :href="socialLink.href" target="_blank" rel="nofollow"
                ><Button
                  variant="link"
                  class="text-foreground hover:text-primary"
                  >{{ socialLink.name }}</Button
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const calendlyLink = ref(config.public.CALENDLY_LINK);
const resumeLink = ref(config.public.RESUME_LINK);
const githubLink = ref(config.public.GITHUB_LINK);
const linkedinLink = ref(config.public.LINKEDIN_LINK);

const socialLinks = [
  {
    name: "github",
    href: githubLink,
  },
  {
    name: "linkedin",
    href: linkedinLink,
  },
];

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
