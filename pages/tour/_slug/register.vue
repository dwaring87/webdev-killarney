<template>
  <div class="bg-gray-50">
    
    <div class="relative">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="/images/muckross.jpg" alt="">
        </div>
      </div>
      <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Start Tour</h2>
            <p class="mt-4 text-lg text-gray-500 sm:mt-3">
              Fill out some information about your group to get started.
            </p>
            <form class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Group Name</label>
                <p class="text-sm font-light text-gray-500">Give yourselves a fun group name</p>
                <div class="mt-1">
                  <input v-model="name" type="text" class="form-control">
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Group Description</label>
                <p class="text-sm font-light text-gray-500">Tell us about yourselves.  Where are you from?  What brought you here?  What do you hope to see?</p>
                <div class="mt-1">
                  <textarea v-model="description" rows="7" class="form-control"></textarea>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Group Size</label>
                <p class="text-sm font-light text-gray-500">How many people are in your group?</p>
                <div class="mt-1">
                  <input v-model="size" type="number" min="1" class="form-control">
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Contact Email</label>
                <p class="text-sm font-light text-gray-500">We don't share your personal information with any third parties.</p>
                <div class="mt-1">
                  <input v-model="email" type="email" autocomplete="email" class="form-control">
                </div>
              </div>

            </form>

            <div class="mx-auto mt-12 p-2">
              <div v-if="error" class="max-w-sm mx-auto rounded-md border-2 border-red-800 bg-red-50 p-4 m-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <i class="ri-error-warning-fill text-red-800"></i>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
                  </div>
                </div>
              </div>
              <NuxtLink class="btn" :to="startTour" @click.native="register">Start Tour</NuxtLink>
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
      tour: this.$route.params.slug,
      name: this.$storage.getUniversal('name') || 'Marvid',
      description: this.$storage.getUniversal('description') || 'We\'re a couple of cool plant lovers from NY hoping to see some cool plants, animals, and waterfalls',
      size: this.$storage.getUniversal('size') || 2,
      email: this.$storage.getUniversal('email') || 'you@example.com',
      error: undefined
    }
  },

  computed: {

    startTour: function() {
      return "/tour/" + this.tour + "/start";
    }

  },

  methods: {

    register: function() {
      this.error = undefined;
      if ( !this.name ) {
        this.error = "Please enter a group name";
        return false;
      }
      if ( !this.description ) {
        this.error = "Please enter a group description";
        return false;
      }
      if ( !this.email ) {
        this.error = "Please enter a contact email";
        return false;
      }

      this.$storage.setUniversal('name', this.name);
      this.$storage.setUniversal('description', this.description);
      this.$storage.setUniversal('size', this.size);
      this.$storage.setUniversal('email', this.email);
    }

  }


}
</script>
