<template>
  <figure class="image is-16by9">
    <Pano
      class="has-ratio"
      :source="source"
    />
  </figure>
</template>

<script>
import { Pano } from "vuejs-vr";
export default {
  components: {
    Pano
  },
  props: {
      source: {
          type: String,
          required: true
      }
  }
    
}
</script>
