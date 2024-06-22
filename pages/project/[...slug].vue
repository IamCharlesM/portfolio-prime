<template>
  <div>
    <div v-if="pending">...loading</div>
    <div
      v-for="(post, index) in data.posts"
      :key="index"
      class="mx-auto max-w-7xl flex flex-col text-center gap-3 py-10"
    >
      <h1 class="text-center text-3xl font-bold lg:text-6xl">
        {{ post.title }}
      </h1>

      <h3>Last updated {{ formattedDate }}</h3>
      <div>
        <img
          :src="post.feature_image"
          :alt="post.feature_image_alt"
          class="mb-5"
        />
        <div class="flex gap-3 justify-center">
          <span
            v-for="(tag, index) in post.tags"
            :key="index"
            class=""
          >
            <Badge>{{ tag.name }}</Badge>
          </span>
        </div>
      </div>
      <div
        v-html="post.html"
        class="prose text-white lg:prose-2xl mx-auto"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { Badge } from "@/components/ui/badge";

  const route = useRoute();
  let slug = route.params.slug[0];
  const { data, pending } = await useFetch(
    `https://content.charlesisa.dev/ghost/api/content/posts/slug/${slug}/?key=5d8b3cdb92a539dede4ee744a0&include=tags`
  );

  const meta = data.value.posts[0];

  const dateString = meta.updated_at;

  // ANCHOR Create a new Date object from the date string
  const date = new Date(dateString);

  // ANCHOR Use the toLocaleDateString method to format the date
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  useHead({
    title: meta.title,
    meta: [
      { name: "description", content: meta.meta_description },
      { hid: "og-image", property: "og:image", content: meta.feature_image },
    ],
  });

  defineOgImageComponent("Frame", {
    headline: "Hi",
    title: meta.title,
    description: meta.description,
  });
</script>

<style scoped>
  :deep(p) {
    text-align: left;
  }

  :deep(.kg-bookmark-description) {
    text-align: left;
  }

  :deep(.kg-bookmark-container) {
    flex-direction: row;
    display: flex;
  }

  :deep(.kg-bookmark-thumbnail) {
    height: auto;
    width: 15em;
    display: inherit;
  }

  :deep(.kg-bookmark-thumbnail img) {
    margin: auto 0;
  }
  :deep(.kg-bookmark-author) {
    display: none;
  }

  .kg-bookmark-card,
  .kg-bookmark-publisher {
    position: relative;
    width: 100%;
  }

  :deep(
      .kg-bookmark-card a.kg-bookmark-container,
      .kg-bookmark-card a.kg-bookmark-container:hover
    ) {
    display: flex;
    flex-grow: 1;
    flex-basis: 100%;
    text-decoration: none;
    border-radius: 3px;
    border: 1px solid rgb(124 139 154/25%);
    overflow: hidden;
    color: inherit;
  }

  :deep(.kg-bookmark-content) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
  }

  :deep(.kg-bookmark-title) {
    font-size: auto;
    line-height: 1.4em;
    font-weight: 600;
  }

  :deep(.kg-bookmark-description) {
    display: inline-flex;
    font-size: auto;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  :deep(.kg-bookmark-metadata) {
    display: none;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
  }

  :deep(.kg-btn):focus-visible {
    outline: 0;
    box-shadow: 0 0 0 calc(2px + var(--ring-offset-width)) var(--ring-color);
    --ring-offset-width: 2px;
  }

  :deep(.kg-btn) {
    width: max-content;
    cursor: pointer;
    margin: 0;
    background-color: hsl(var(--secondary) / 1);
    color: hsl(var(--secondary-foreground));
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 0.375rem; /* 6px */
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    font-weight: 500;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: 0; /* focus-visible:outline-none */
    box-shadow: 0 0 0 2px var(--ring-color); /* focus-visible:ring-2 */
    --ring-color: #ring-color; /* Replace with actual ring color */
    --ring-offset-color: #background-color; /* Replace with actual background color */

    text-decoration: none;
  }

  :deep(.kg-btn:hover) {
    background-color: hsl(var(--secondary) / 0.8);
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
  }
</style>
