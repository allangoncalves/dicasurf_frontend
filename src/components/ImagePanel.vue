<template>
  <panorama width="300" height="400" source="https://upload.wikimedia.org/wikipedia/commons/5/55/MKZD_Bratcevo_2015-10_Equirectangular.jpg"/>
</template>
<script>
import { Panorama } from "vuejs-panorama";
export default {
  components: {
    Panorama
  },
  methods: {
    openImage(url) {
      this.$buefy.modal.open({
        component: Panorama,
        props: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/5/55/MKZD_Bratcevo_2015-10_Equirectangular.jpg"
        }
      });
    }
  },
  props: {
    panel: {
      type: Object,
      default: {
        image_one: {
          original: "",
          thumb: ""
        },
        image_two: {
          original: "",
          thumb: ""
        },
        image_three: {
          original: "",
          thumb: ""
        },
        image_four: {
          original: "",
          thumb: ""
        },
        image_five: {
          original: "",
          thumb: ""
        },
        image_six: {
          original: "",
          thumb: ""
        }
      }
    }
  }
};
</script>
