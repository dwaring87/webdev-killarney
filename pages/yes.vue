<template>
  <div class="w-full min-h-screen h-full bg-gray-800">
    <div class="absolute inset-0">
      <img class="h-full min-h-screen w-full object-cover" src="/images/marvid.jpg">
      <div class="absolute inset-0 bg-gray-600 mix-blend-multiply"></div>
    </div>
    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block text-gray-200">We're Getting Married!</span>
      </h1>
      <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
        Yay!!  This is so exciting!
      </p>
      <div class="mt-10 px-10 py-2 w-full mx-auto fixed bottom-0 left-0 flex gap-10">
          <NuxtLink :to="photoUrl" class="flex-grow text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">Take Photo</NuxtLink>
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

    photoUrl: function() {
      return '/photo?id=' + this.photo_id + '&back=' + this.back;
    }

  },

  mounted: async function() {
    this.photo_id = this.$route.query.id;
    this.back = this.$route.query.back;
    this.$storage.setUniversal('answer', 'yes');
  },

  methods: {

    yes: function() {
      this.$storage.setUniversal('answer', 'yes');
      window.location = this.photoUrl;
    }

  }
}
</script>