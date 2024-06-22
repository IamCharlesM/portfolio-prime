<template>
  <section
    class="bg-muted min-h-screen"
    id="portfolio"
  >
    <div
      class="max-w-7xl md:px-10 mx-auto py-4 h-full flex flex-col w-full gap-11"
    >
      <SectionTitle
        title="Portfolio"
        description="Featured"
        highlight="project"
      />
      <div
        class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 overflow-clip gap-16 md:gap-4"
      >
        <div
          v-for="(post, index) in data.posts"
          :key="post.id"
        >
          <ImageCard
            :src="post.feature_image"
            :alt="post.feature_image_alt"
            :title="post.title"
            :excerpt="post.excerpt"
            :link="`/project/${post.slug}`"
            :tags="post.tags"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { data, pending, error } = await useFetch(
    "https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags"
  );
  if (error.value) {
    console.error("Fetch error:", error.value);
  }

  const isWithinOneMonth = (publishedOn: string | number | Date) => {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    // Parse the publishedOn string into a Date object
    const publishedDate = new Date(publishedOn);

    return publishedDate >= oneMonthAgo && publishedDate <= today;
  };

  // Call the function with a sample date
  // console.log(data.value.posts[0].tags);
</script>

<style scoped></style>
