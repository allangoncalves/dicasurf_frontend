<template>
  <GmapMap
    ref="gmap"
    :center="center"
    :zoom="15"
    style="width: 600px; height: 600px"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      disableDefaultUi: false
    }"
  >
    <DirectionsRenderer />
  </GmapMap>
</template>

<script>
import GmapMap from "vue2-google-maps/dist/components/map.vue";
import DirectionsRenderer from "./DirectionsRenderer.js";

export default {
  components: { DirectionsRenderer },
  props: {
    destination: {
      type: Object
    },
    origin: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.$refs.gmap.$mapObject);
      var vm = this;
      vm.directionsService.route(
        {
          origin: this.origin, // Can be coord or also a search query
          destination: this.destination,
          travelMode: "DRIVING"
        },
        function(response, status) {
          if (status === "OK") {
            vm.directionsDisplay.setDirections(response); // draws the polygon to the map
          } else {
            console.log("Directions request failed due to " + status);
          }
        }
      );
    });
  }
};
</script>
