<template>
  <NuxtLayout
    :name="404"
    class="h-screen flex"
  >
    <div
      class="mx-auto max-w-7xl px-6 text-center sm:py-40 lg:px-8 my-auto border border-primary"
    >
      <p class="text-base font-semibold leading-8 text-white">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-4 text-base text-white/70 sm:mt-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex justify-center">
        <NuxtLink
          to="/"
          class="text-sm font-semibold leading-7 text-white"
          ><span aria-hidden="true">&larr;</span> Back to home</NuxtLink
        >
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
