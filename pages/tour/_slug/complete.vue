<template>
  <div class="bg-gray-800">
    <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="w-full h-full object-cover" :src="'/images/' + data.photo" alt="">
    </div>
    <div class="h-full min-h-screen max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">{{ data.name }}</h2>
        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Tour Complete</p>
        <p class="mt-3 text-lg text-gray-300">
          Congratulations {{ name }} on completing the tour!  I hope you enjoyed it and this will be the start of a lifetime of exploration and adventure together.
        </p>
        
        <div v-if="yes" class="my-8 bg-gray-200 p-4 rounded-md shadow-md">
          <p class="text-gray-800 text-2xl font-extrabold text-center tracking-tight sm:text-3xl">Marissa and David are Getting Married!</p>
          <div class="relative border-2 border-white rounded-md shadow-md m-4">
            <div class="absolute bottom-2 right-2">
              <h2 class="text-xl md:text-lg lg:text-xl text-gray-100 font-semibold uppercase">She said yes!</h2>
            </div>
            <img class="h-full w-full object-cover rounded-md" src="/images/marvid.jpg" />
          </div>
          <p class="mt-3 text-lg text-gray-800">
            I love you so much and I can't wait to spend my life with you!
          </p>
        </div>

        <div class="mt-8">
          <div class="flex flex-wrap justify-around gap-4 rounded-md shadow">
            <NuxtLink :to="'/tour/' + this.tour + '/summary'" class="px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              <i class='ri-camera-fill'></i>&nbsp;&nbsp;View Photos
            </NuxtLink>
            <NuxtLink to="/" class="px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              <i class='ri-arrow-go-back-fill'></i>&nbsp;&nbsp;Return to Home Page
            </NuxtLink>
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
      tour: this.$route.params.slug,
      name: this.$storage.getUniversal('name'),
      yes: this.$storage.getUniversal('answer') === 'yes',
      data: require('@/data/' + this.$route.params.slug + '.json')
    }
  },

  mounted: function() {
    this.$storage.removeUniversal('page');
  }

}
</script>