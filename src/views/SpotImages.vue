<template>
  <div>
    <div class="columns is-tablet">
      <div class="column is-narrow">
        <p
          class="is-size-3 is-uppercase has-text-centered-mobile has-text-primary has-text-weight-bold"
        >
          fotos
        </p>
      </div>
      <div class="column"><hr style="border: 0.1px solid #0075bb" /></div>
    </div>
    <p class="has-text-right is-uppercase has-text-primary" v-if="slides.length > 0">
      arraste pro lado
      <span class="has-text-weight-bold"
        ><span style="opacity:0.40">></span
        ><span style="opacity:0.60">></span>></span
      >
    </p>
    <carousel
      :perPage="1"
      :navigationEnabled="false"
      :paginationEnabled="false"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <image-panel :panel="slide" />
      </slide>
    </carousel>
    <p class="has-text-left is-uppercase has-text-primary" v-if="slides.length > 0">
      <span class="has-text-weight-bold"
        >&lt<span style="opacity:0.60">&lt</span>
        <span style="opacity:0.40">&lt</span>
      </span>
      arraste pro lado
    </p>
  </div>
</template>
<script>
import ImagePanel from "@/components/ImagePanel";
import { Carousel, Slide } from "vue-carousel";
import { mapState } from "vuex";
export default {
  components: {
    ImagePanel,
    Carousel,
    Slide
  },
  computed: {
    ...mapState("geo", ["currentSpot"]),
    slides(){
      return this.currentSpot !== null ? this.currentSpot.image_panel : [];
    }
  }
};
</script>
