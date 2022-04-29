<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>Welcome, {{ name }}!</h2>
      <p>Are you excited to start your tour?</p>
      <p>We hope you've chosen a good partner or team to join you on this adventure.  Working together you'll be able to find some exciting historical sites and beautiful natural landmarks.  We hope you'll enjoy the beauty of Killarney National Park and create some lifelong memories.</p>
      <p>Make your way to the starting point below and continue once your group is ready to begin.</p>
    </div>
    <div class="tour-body">
      <p>
        <strong><i class="ri-map-2-fill"></i>&nbsp;Tour:</strong> {{ data.name }}<br />
        <strong><i class="ri-map-pin-fill"></i>&nbsp;Starting Point:</strong> {{ data.start.description }}
      </p>
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
      name: this.$storage.getUniversal('name'),
      data: require('@/data/' + this.$route.params.slug + '.json')
    }
  },

  mounted: function() {
    this.$storage.setUniversal('page', this.$route.path);
  }

}
</script>