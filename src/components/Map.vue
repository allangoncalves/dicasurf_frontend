<template>
  <figure class="image is-16by9">
    <iframe
      class="has-ratio"
      frameborder="0"
      style="border:0"
      width="640"
      height="360"
      :src="query"
      allowfullscreen
    >
    </iframe>
  </figure>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object
    },
    origin: {
      type: Object,
      required: true
    }
  },
  computed: {
    query() {
      return `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_GOOGLE_MAP_KEY}&q=${this.destination.lat},${this.destination.lng}&language=pt-br`;
    }
  },
  mounted() {
    // this.$gmapApiPromiseLazy().then(() => {
    //   this.directionsService = new google.maps.DirectionsService();
    //   this.directionsDisplay = new google.maps.DirectionsRenderer();
    //   this.directionsDisplay.setMap(this.$refs.gmap.$mapObject);
    //   var vm = this;
    //   vm.directionsService.route(
    //     {
    //       origin: this.origin, // Can be coord or also a search query
    //       destination: this.destination,
    //       travelMode: "DRIVING"
    //     },
    //     function(response, status) {
    //       if (status === "OK") {
    //         vm.directionsDisplay.setDirections(response); // draws the polygon to the map
    //       } else {
    //         console.log("Directions request failed due to " + status);
    //       }
    //     }
    //   );
    // });
  }
};
</script>
