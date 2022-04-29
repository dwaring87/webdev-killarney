<template>
  <div v-if="page">
    <div class="max-w-2xl mx-auto sm:my-4 sm:rounded-md sm:border-2 border-green-800 bg-green-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <i class="ri-play-circle-fill text-green-800"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-800">Continue Tour?</h3>
          <div class="mt-2 text-sm text-green-700">
            <p>It looks like you've already started a tour.  Do you want to pick up where you left off?</p>
          </div>
          <div class="mt-4">
            <div class="-mx-2 -my-1.5 flex">
              <a v-bind:href="page" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">Continue Tour</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      page: this.$storage.getUniversal('page'),
    }
  }
}
</script>