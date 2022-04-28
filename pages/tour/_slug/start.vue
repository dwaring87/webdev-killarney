<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>Welcome, {{ name }}!</h2>
      <p>Are you excited to start your tour?</p>
      <p>We hope you've chosen a good partner to join you on this adventure.  Working together you'll be able to find some exciting historical sites and beautiful natural landmarks.</p>
      <p>Make your way to the starting point below and continue once your group is ready to begin.</p>
    </div>
    <div class="tour-body">
      <p><strong>Tour:</strong> {{ data.name }}</p>
      <p><strong>Starting Point:</strong> {{ data.start.description }}</p>
      <Map v-if="data && data.start" :lat="data.start.lat" :lon="data.start.lon" />
    </div>
    <TourFooter :link="'/tour/' + this.tour + '/photo'" text="We're all here" />
  </div>
</template>


<script>
export default {

  data: function() {
    return {
      tour: this.$route.params.slug,
      name: this.$storage.getLocalStorage('name'),
      data: require('@/data/' + this.$route.params.slug + '.json')
    }
  },

  mounted: function() {
    this.$storage.setLocalStorage('page', this.$route.path);
  }

}
</script>