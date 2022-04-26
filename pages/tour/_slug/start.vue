<template>
  <div>

    <div class="bg-green-800 min-h-screen mb-14">
      
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Welcome, {{ name }}!</h2>
        <p class="tour">Are you excited to start your tour?</p>
        <p class="tour">We hope you've chosen a good partner to join you on this tour.  Working together you'll be able to find some exciting historical sites and beautiful natural landmarks.</p>
        <p class="tour">Make your way to the starting point below and continue once your group is ready to begin.</p>
      </div>

      <p class="tour px-4"><strong>Tour:</strong> {{ data.name }}</p>
      <p class="tour px-4"><strong>Starting Point:</strong> {{ data.start.description }}</p>
      <Map v-if="data && data.start" :lat="data.start.lat" :lon="data.start.lon" />

    </div>

    <div class="w-full bg-green-800 p-4 fixed bottom-0 left-0" style="z-index: 9999">
      <div class="max-w-xl mx-auto">
      <NuxtLink :to="'/tour/' + this.tour + '/photo'">
        <span class="btn">We're all here</span>
      </NuxtLink>
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

  mounted: function() {
    this.$storage.setUniversal('page', this.$route.path);
  }

}
</script>