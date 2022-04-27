<template>
  <div class="bg-gray-800">
    <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="w-full h-full object-cover" :src="'/images/' + data.photo" alt="">
    </div>
    <div class="h-full min-h-screen max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">{{ data.name }}</h2>
        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Tour Photos</p>

        <div>
          <h3 class="text-base text-lg mt-4 font-bold tracking-wider text-gray-400">{{ name }} Group Photo</h3>
          <img :src="getGroupPhoto()" />
        </div>

        <div v-for="(stop, index) in data.stops" :key="stop.name">
          <h3 class="text-base text-lg mt-4 font-bold tracking-wider text-gray-400">{{ stop.name }}</h3>
          <img :src="getPhoto(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      tour: this.$route.params.slug,
      name: this.$storage.getUniversal('name'),
      data: require('@/data/' + this.$route.params.slug + '.json')
    }
  },

  methods: {

    getGroupPhoto() {
      return this.$storage.getUniversal('photo-group');
    },

    getPhoto: function(index) {
      return this.$storage.getUniversal('photo-stop-' + index);
    }

  },

  mounted: function() {
    this.$storage.removeUniversal('page');
  }

}
</script>