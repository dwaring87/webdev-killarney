<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>Welcome to <span class='text-yellow-500'>{{ stop.name }}</span></h2>
      <img class="max-w-lg mx-auto m-4 rounded-md border-2 border-gray-100" :src="'/images/' + stop.arrive.photo" />
    </div>
    <div class="tour-body">
      <p v-html="stop.arrive.description"></p>
      <div v-if="photo_data" class="mt-2">
        <h3>{{ name }} Group Photo</h3>
        <img :src="photo_data" />
      </div>
    </div>
    <template v-if="photo_data">
      <TourFooter :link="'/tour/' + this.tour + '/stop/' + this.next_stop_index + '/navigate'" text="Next Stop"
        :link2="'/photo?id=' + this.photo_id + '&back=/tour/' + this.tour + '/stop/' + this.stop_index + '/arrive'" text2="Retake Photo" />
    </template>
    <template v-else>
      <TourFooter :link="'/photo?id=' + this.photo_id + '&back=/tour/' + this.tour + '/stop/' + this.stop_index + '/arrive'" text="Take Photo" />
    </template>
  </div>
</template>

<script>
export default {

  data: function() {
    let stops = require('@/data/' + this.$route.params.slug + '.json').stops;
    let stop_index = parseInt(this.$route.params.index);
    let next_stop_index = stop_index + 1;
    return {
      tour: this.$route.params.slug,
      name: this.$storage.getUniversal('name'),
      stop_index: stop_index,
      next_stop_index: next_stop_index,
      stop: stops[stop_index-1],
      photo_id: 'photo-stop-' + stop_index,
      photo_data: undefined
    }
  },

  mounted: function() {
    this.$storage.setUniversal('page', this.$route.path);
    this.photo_data = this.$storage.getUniversal(this.photo_id);
  }

}
</script>