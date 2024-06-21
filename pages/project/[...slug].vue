<template>
  <div class="mx-auto">
    <div v-if="pending">...loading</div>
    <div
      v-for="(post, index) in data.posts"
      :key="index"
      class="hero-content flex flex-col text-center"
    >
      <h1 class="text-center text-3xl font-bold text-white lg:text-4xl">
        {{ post.meta_title }}
      </h1>

      <h3>Last updated {{ formattedDate }}</h3>
      <div>
        <img
          :src="post.feature_image"
          :alt="post.feature_image_alt"
          class="mb-5"
        />
        <div class="">
          <span
            v-for="(tag, index) in post.tags"
            :key="index"
            class=""
          >
            <span class="badge badge-outline m-1">{{ tag.name }}</span>
          </span>
        </div>
      </div>
      <div
        v-html="post.html"
        class="prose text-white lg:prose-xl"
      ></div>
    </div>
  </div>
</template>

<script setup>
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
</style>
