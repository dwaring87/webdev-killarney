<template>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="/images/killarney.jpg" alt="">
        <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Get Started</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">
          Use your own bike or rent one from one of the many bike hires in Killarney.  Gather your friends and family 
          and choose one of our free self-guided tours to begin.
        </p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        
        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-4 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <i class="ri-riding-line text-gray-200 text-2xl"></i>
            </div>
            <h3 class="text-xl font-medium text-gray-900">Rent a Bike</h3>
            <p class="mt-4 text-base text-gray-500">
              Rent a bike from the Killarney Bike Rental Company, which is located directly across from the National Park cycle path, just outside the town centre.
            </p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a href="https://www.killarneybikerental.com" class="text-base font-medium text-green-700 hover:text-green-600">Killarney Bike Rentals<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>

        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-4 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <i class="ri-group-line text-gray-200 text-2xl"></i>
            </div>
            <h3 class="text-xl font-medium text-gray-900">Join a Group</h3>
            <p class="mt-4 text-base text-gray-500">
              Gather your friends and family to complete the tour with a group.
            </p>
          </div>
        </div>

        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-4 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <i class="ri-play-circle-line text-gray-200 text-2xl"></i>
            </div>
            <h3 class="text-xl font-medium text-gray-900">Start a Tour</h3>
            <p class="mt-4 text-base text-gray-500">Choose a tour, gather at the starting point, and let us guide you to some of Killarney's best attractions!</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a href="/start" class="text-base font-medium text-green-700 hover:text-green-600">Choose a Tour<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>