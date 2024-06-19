<template>
  <Sheet>
    <SheetTrigger><Menu class="text-primary" /></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle class="text-primary">Menu</SheetTitle>
        <SheetDescription>
          <ul>
            <li
              v-for="(page, index) in props.pages"
              :key="index"
            >
              <NuxtLink
                :to="page.to"
                class=""
                ><Button variant="link"> {{ page.property }}</Button></NuxtLink
              >
            </li>
            <li
              v-for="(link, index) in props.links"
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
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import { Menu } from "lucide-vue-next";

  const props = defineProps<{
    pages: { property: string; to: string }[];
    links: { name: string; href: string }[];
  }>();
</script>
