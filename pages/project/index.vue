<template>
  <main class="px-4">
    <div class="max-w-7xl justify-items-center mx-auto gap-10 flex flex-col">
      <div>
        <h1 class="mb-5 text-center text-3xl font-bold text-white lg:text-4xl">
          All projects
        </h1>

        <p class="mx-auto max-w-4xl text-xl text-white">
          Welcome to my projects webpage! Here you will find a selection of my
          past and current projects, ranging from personal hobbies to
          professional work. I hope you find something that interests you, and
          feel free to contact me if you have any questions or would like to
          collaborate on a project.
        </p>
      </div>
      <Separator />
      <Posts />
    </div>
  </main>
</template>

<script setup>
  useHead({
    title: "All projects",
    meta: [
      {
        name: "description",
        content: "I'm legit including this so Google doesnt't yell at me.",
      },
    ],
  });
</script>
