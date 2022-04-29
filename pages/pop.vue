<template>
  <div class="w-full min-h-screen h-full bg-gray-800">
    <div class="absolute inset-0">
      <img class="h-full min-h-screen w-full object-cover" src="/images/marvid.jpg">
      <div class="absolute inset-0 bg-gray-600 mix-blend-multiply"></div>
    </div>
    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block text-indigo-400">Marissa,</span>
        <span class="block text-gray-200">Will You Marry Me?</span>
      </h1>
      <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
        I can't fathom anyone else I'd rather spend my life exploring the world with.  You've brought me so much joy and happiness and I can't imagine my life without you in it. I love you so much!
      </p>
      <div class="mt-10 px-10 py-2 w-full mx-auto fixed bottom-0 left-0 flex gap-10">
          <a href="/images/no.jpg" class="px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">No</a>
          <NuxtLink :to="yesUrl" class="flex-grow text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">Yes</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      photo_id: undefined,
      back: undefined,
    }
  },

  computed: {

    yesUrl: function() {
      return '/yes?id=' + this.photo_id + '&back=' + this.back;
    }

  },

  mounted: async function() {
    this.photo_id = this.$route.query.id;
    this.back = this.$route.query.back;
  }

}
</script>