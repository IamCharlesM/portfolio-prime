<template>
  <div class="max-w-7xl md:px-10 mx-auto py-4 h-full flex flex-col md:gap-11">
    <div
      class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 overflow-clip gap-16 md:gap-4 w-full"
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
</template>

<script setup>
  const { data, pending, error } = await useFetch(
    "https://content.charlesisa.dev/ghost/api/content/posts/?key=364f2b2dc67c09643ffad31928&include=tags"
  );
  if (error.value) {
    console.error("Fetch error:", error.value);
  }

  const isWithinOneMonth = (publishedOn) => {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    // Parse the publishedOn string into a Date object
    const publishedDate = new Date(publishedOn);

    return publishedDate >= oneMonthAgo && publishedDate <= today;
  };

  // Call the function with a sample date
  // console.log(data.value.posts[0]);
</script>
