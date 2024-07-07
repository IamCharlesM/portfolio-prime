<template>
  <Sheet>
    <SheetTrigger
      ><Menu class="text-primary" aria-label="Open mobile menu"
    /></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle class="text-primary">Menu</SheetTitle>
        <SheetDescription>
          <ul>
            <li v-for="(page, index) in props.pages" :key="index">
              <SheetClose as-child>
                <NuxtLink :to="{ path: page.path, hash: page.hash }" class=""
                  ><Button
                    variant="link"
                    class="text-foreground hover:text-primary"
                  >
                    {{ page.property }}</Button
                  ></NuxtLink
                >
              </SheetClose>
            </li>
            <li v-for="(link, index) in props.links" :key="index">
              <SheetClose as-child>
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
              </SheetClose>
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
  SheetClose,
} from "@/components/ui/sheet";

import { Menu } from "lucide-vue-next";

const props = defineProps<{
  pages: { property: string; path: string; hash: string }[];
  links: { name: string; href: string }[];
}>();
</script>
