<template>

</template>

<script>
import GmapMap from "vue2-google-maps/dist/components/map.vue";
import DirectionsRenderer from "./DirectionsRenderer.js";

export default {
  components: { DirectionsRenderer },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  mounted(){
    this.$refs.mapRef.$mapPromise.then(map => this.mapInstance = map);
  },
  data() {
    return {
      mapInstance: null,
      destination: {
        lat: -6.228080112986862,
        lng: -35.055503409432056
      },
      from: {
        lat: -6.232121410500793,
        lng: -35.04891850248146
      },
      center: {
        lat: -6.4,
        lng: -35.1
      },
      directOpt: {
        //directions: DirectionsResult,
        draggable: true,
        //infoWindow: InfoWindow,
        map: () => this.mapInstance
        //panel: Node (<div> to display directions steps),
        //routeIndex: int (index of route within DirectionsResult),
      }
    };
  }
};
</script>
