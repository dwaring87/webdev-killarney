<template>
  <div class="tour-container">
    <div class="tour-header">
      <h2>Group Photo</h2>
      <p>Before we get started on finding our first stop, let's take a group photo!</p>
      <p>Gather everyone in your group together to commemorate the beginning of your Killarney National Park exploration.  Hopefully, this is just the start of many adventures together.</p>
    </div>
    <div class="tour-header" v-if="photo_data">
      <h3>{{ name }} Group Photo</h3>
      <img class="mx-auto" :src="photo_data" />
    </div>
    <template v-if="photo_data">
      <TourFooter :link="'/tour/' + this.tour + '/stop/1/navigate'" text="Continue"
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