<template>
  <div style="height: 500px; width: 100%">
    <client-only>
      <l-map :zoom=17 :center="[lat,lon]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[lat,lon]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>


<script>
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
  }

}
</script>