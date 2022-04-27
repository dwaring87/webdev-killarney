<template>
  <div style="height: 500px; width: 100%">
    <client-only>
      <l-map :zoom=17 :center="[lat,lon]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[lat,lon]"></l-marker>
        <l-circle v-if="currentLocation" :lat-lng="[currentLocation.lat,currentLocation.lon]" :radius="currentLocation.acc"></l-circle>
      </l-map>
    </client-only>
  </div>
</template>


<script>
let INTERVAL;

export default {

  props: {
    lat: {
      type: Number,
      required: true
    },
    lon: {
      type: Number,
      require: true
    }
  },

  data: function() {
    return {
      currentLocation: undefined
    }
  },

  mounted: function() {
    this.getUserPosition();
    if ( !INTERVAL ) INTERVAL = setInterval(this.getUserPosition, 1500);
  },

  beforeUnmount() {
    if ( INTERVAL ) clearInterval(INTERVAL);
  },

  methods: {

    getUserPosition: async function() {
      let vm = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
          vm.currentLocation = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            acc: pos.coords.accuracy
          };
        }, function(err) {
          console.log(err);
        });
      }
    }

  }

}
</script>