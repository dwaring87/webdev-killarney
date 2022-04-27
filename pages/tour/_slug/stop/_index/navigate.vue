<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>
        <span v-html="this.stop_index === 1 ? 'First' : 'Next'"></span> Stop:
        <br />
        <span class='text-yellow-500'>{{ stop.name }}</span>
      </h2>
      <img class="max-w-lg mx-auto m-4 rounded-md border-2 border-gray-100" :src="'/images/' + stop.navigate.photo" />
    </div>
    <div class="tour-body">
      <p v-html="stop.navigate.description"></p>
      <h3>Location:</h3>
      <Map v-if="stop" :lat="stop.location.lat" :lon="stop.location.lon" />
    </div>
    <TourFooter :link="'/tour/' + this.tour + '/stop/' + this.stop_index + '/arrive'" text="We're Here" />
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      tour: this.$route.params.slug,
      name: this.$storage.getUniversal('name'),
      stop_index: parseInt(this.$route.params.index),
      stop: require('@/data/' + this.$route.params.slug + '.json').stops[this.$route.params.index]
    }
  },

  mounted: function() {
    this.$storage.setUniversal('page', this.$route.path);
  }

}
</script>