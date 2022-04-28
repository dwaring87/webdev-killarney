<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>Welcome to <span class='text-yellow-500'>{{ stop.name }}</span></h2>
      <img class="w-lg max-w-full mx-auto m-4 shadow-lg rounded-md border-2 border-gray-100" :src="'/images/' + stop.arrive.photo" />
    </div>
    <div class="tour-body">
      <p v-html="stop.arrive.description"></p>
    </div>
    <div class="tour-header">
      <div v-if="photo_data" class="mt-2">
        <h3 class="mb-2">{{ name }} at {{ stop.name }}</h3>
        <img class="mx-auto border-2 border-gray-100 shadow-md rounded-md" :src="photo_data" />
      </div>
    </div>
    <template v-if="photo_data && is_last_stop">
      <TourFooter 
        :link="'/tour/' + this.tour + '/complete'" text="Complete Tour"
        :link2="photoUrl" text2="Retake Photo" />
    </template>
    <template v-else-if="photo_data && !is_last_stop">
      <TourFooter 
        :link="'/tour/' + this.tour + '/stop/' + this.next_stop_index + '/navigate'" text="Next Stop"
        :link2="photoUrl" text2="Retake Photo" />
    </template>
    <template v-else>
      <TourFooter 
        :link="photoUrl" text="Take Photo" />
    </template>
  </div>
</template>

<script>
export default {

  data: function() {
    let stops = require('@/data/' + this.$route.params.slug + '.json').stops;
    let stop_index = parseInt(this.$route.params.index);
    let stop = stops[stop_index];
    return {
      tour: this.$route.params.slug,
      name: this.$storage.getLocalStorage('name'),
      stop_index: stop_index,
      next_stop_index: stop_index + 1,
      is_last_stop: stop_index === stops.length-1,
      stop: stop,
      photo_id: 'photo-stop-' + stop_index,
      photo_data: undefined
    }
  },

  computed: {

    photoUrl: function() {
      if ( this.stop.pop ) {
        return '/pop?id=' + this.photo_id + '&back=/tour/' + this.tour + '/stop/' + this.stop_index + '/arrive';
      }
      else {
        return '/photo?id=' + this.photo_id + '&back=/tour/' + this.tour + '/stop/' + this.stop_index + '/arrive';
      }
    }

  },

  mounted: function() {
    this.$storage.setLocalStorage('page', this.$route.path);
    this.photo_data = this.$storage.getLocalStorage(this.photo_id);
  }

}
</script>