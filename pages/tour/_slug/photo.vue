<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2><i class="ri-camera-fill"></i>&nbsp;Group Photo</h2>
      <p>Before we get started on finding our first stop, let's take a group photo!</p>
      <p>Gather everyone in your group together to commemorate the beginning of your Killarney National Park exploration.  Hopefully, this is just the start of many more adventures together.</p>
      <p>As you progress through the tour, take a group photo at each stop as a keepsake of your tour.</p>
    </div>
    <div class="tour-header" v-if="photo_data">
      <h3>{{ name }} Group Photo</h3>
      <img class="mx-auto rounded-md shadow-md border-2 border-gray-100" :src="photo_data" />
    </div>
    <template v-if="photo_data">
      <TourFooter :link="'/tour/' + this.tour + '/stop/0/navigate'" text="Continue"
        :link2="'/photo?id=' + this.photo_id + '&back=/tour/' + this.tour + '/photo'" text2="Retake Photo" />
    </template>
    <template v-else>
      <TourFooter :link="'/photo?id=' + this.photo_id + '&back=/tour/' + this.tour + '/photo'" text="Take Photo" />
    </template>
  </div>
</template>


<script>
export default {

  data: function() {
    return {
      name: this.$storage.getUniversal('name'),
      photo_id: "photo-group",
      photo_data: undefined,
      tour: this.$route.params.slug
    }
  },

  mounted: function() {
    this.$storage.setUniversal('page', this.$route.path);
    this.photo_data = this.$storage.getUniversal(this.photo_id);
  }

}
</script>