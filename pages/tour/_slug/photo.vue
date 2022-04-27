<template>
    <div class="tour-container">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Group Photo</h2>
        <p class="tour">Before we get started on finding our first stop, let's take a group photo!</p>
        <p class="tour">Gather everyone in your group together to commemorate the beginning of your Killarney National Park exploration.  Hopefully, this is just the start of many adventures together.</p>
      </div>

      <img class="mx-auto" :src="photo_data" />

      <template v-if="photo_data">
        <TourFooter :link="'/tour/' + this.tour + '/stop/1/navigate'" text="Continue"
          :link2="'/photo?id=photo-group&back=/tour/' + this.tour + '/photo'" text2="Retake Photo" />
      </template>
      <template v-else>
        <TourFooter :link="'/photo?id=photo-group&back=/tour/' + this.tour + '/photo'" text="Take Photo" />
      </template>
  </div>
</template>


<script>
export default {

  data: function() {
    return {
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