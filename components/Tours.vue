<template>
  <div class="min-h-screen">
    <h1 class="text-center text-3xl font-extrabold text-gray-800 my-8 tracking-tight sm:text-4xl lg:text-5xl">
      Choose a Tour
    </h1>

    <div class="max-w-7xl mx-auto mb-12">
      <div class="max-w-5xl px-2 mx-auto">

        <br />

        <div class="max-w-xl mx-auto">
          <h1 class="text-2xl font-extrabold text-green-800 text-center md:text-3xl lg:text-4xl my-2">
            Muckross House
          </h1>
          <p class="text-center italic">
            Taking in Muckross Abbey, Dinis Cottage, the Old Weir Bridge &amp; Meetings of the Waters, Torc Waterfall and ending at Muckross House and Gardens.
          </p>
        </div>

        <div class="flex flex-wrap justify-between items-start my-6">
          <div>
            <img src="/images/muckross.jpg" class="rounded-lg mx-auto max-w-sm lg:max-w-md" />
            <br />
            <img src="/images/old_weir_bridge.jpg" class="rounded-lg mx-auto max-w-sm lg:max-w-md" />
            <br />
            <img src="/images/torc_falls.jpg" class="rounded-lg mx-auto max-w-sm lg:max-w-md" />
          </div>
          <div class="lg:max-w-md">
            <p>
              This tour starts along the National Park cycle path near the Killarney Bike Rental Company.  The tour takes you to the ruins of Muckross Abbey, built in 1448.  It then passes through Killarney's Natural Zone, the realm of native woods and deer, as you circle the smaller Muckross Lake.  After you cross the scenic Brickeen Bridge you can walk to the Old Weir Bridge at the Meetings of the Waters.  As you return on the main road you can make a side-trip to hike to the Torc Waterfall.  Lasly, the tour will end at the historic Muckross House and gardens.
            </p>
            <br /><br />
            <img src="/images/map.jpg">
            <br /><br />
            <p><strong>Tour Length:</strong> 16 km</p>
            <p><strong>Tour Duration:</strong> about 2 hours</p>
            <p><strong>Start Point:</strong> Killarney Bike Rental Company</p>
            <br /><br />
            <a class="btn" href="/tour/muckross/register">
              <i class="ri-play-circle-line"></i>&nbsp;&nbsp;Start Tour
            </a>
          </div>
        </div>
        <div class="max-w-5xl">
          
        </div>
        

      </div>
    </div>



    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="py-10 px-6 bg-green-800 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>
          <p class="mt-4 max-w-3xl text-lg text-green-100">
            We're still in the process of creating more tours.  Receive our newsletter and get notified when we've added more!
          </p>
        </div>
        <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <form class="sm:flex">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white rounded-md" placeholder="Enter your email">
            <button type="submit" class="btn">Notify me</button>
          </form>
          <p class="mt-3 text-sm text-green-100">
            We care about the protection of your data. Your email address will not be shared with any third parties.</a>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>