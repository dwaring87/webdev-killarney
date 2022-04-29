<template>
  <div class="max-w-7xl mx-auto mb-12">
    <div class="max-w-5xl px-4 mx-auto">

      <div v-if="yes" class="bg-green-800 text-gray-200 rounded-md shadow-md p-4 mt-4 md:mt-0 text-center">
        <p class="text-xl md:text-2xl"><i class="ri-group-2-fill"></i>&nbsp;&nbsp;Marissa and David are getting married!</p>
      </div>

      <div class="flex flex-wrap justify-between items-center my-6">
        <img src="/images/cycle2.jpg" class="rounded-lg shadow-lg mx-auto max-w-sm sm:max-w-12 lg:max-w-md" />
        <div class="lg:max-w-md">
          <h1 class="text-2xl font-extrabold text-green-800 text-center md:text-3xl lg:text-4xl my-2">
            Explore by Bike
          </h1>
          <p class="text-center px-8 md:px-0">
            Cycling through Killarney National Park is one of the best ways to discover all of its historical and natural attractions.  You'll be able to cover more ground than walking and see sights that are not accessible from a tour bus or jaunting car.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-between items-center my-6">
        <img src="/images/cycle1.jpg" class="rounded-lg shadow-lg mx-auto max-w-sm sm:max-w-12 lg:max-w-md" />
        <div class="lg:max-w-md">
          <h1 class="text-2xl font-extrabold text-green-800 text-center md:text-3xl lg:text-4xl my-2">
            At Your Own Pace
          </h1>
          <p class="text-center px-8 md:px-0">
            Explore Killarney National Park at your leisure.  Stop whenever you want and continue where you left off.  See something interesting that's not on the tour?  Create your own side excursions and rejoin the tour when you're ready.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-between items-center my-6">
        <img src="/images/cycle3.jpg" class="rounded-lg shadow-lg mx-auto max-w-sm sm:max-w-12 lg:max-w-md" />
        <div class="lg:max-w-md">
          <h1 class="text-2xl font-extrabold text-green-800 text-center md:text-3xl lg:text-4xl my-2">
            Main Attractions
          </h1>
          <p class="text-center px-8 md:px-0">
            We'll guide you to some of Killarney's most popular attractions as well as some lesser-known secrets.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      yes: this.$storage.getUniversal('answer') === 'yes',
    }
  }
}
</script>