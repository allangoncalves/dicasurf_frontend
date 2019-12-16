<template>
  <div>
    <p class="has-text-right is-uppercase has-text-primary">
      arraste pro lado >><span class="has-text-weight-bold">></span>
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
    <p class="has-text-left is-uppercase has-text-primary">
      <span class="has-text-weight-bold">&lt</span>&lt&lt arraste pro lado
    </p>
  </div>
</template>
<script>
import ImagePanel from "@/components/ImagePanel";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    ImagePanel,
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
        {
          image_one: {
            original: "",
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
          },
          image_two: {
            original: "",
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
          },
          image_three: {
            original: "",
            thumb: "https://bulma.io/images/placeholders/640x320.png"
          },
          image_four: {
            original: "",
            thumb: "https://bulma.io/images/placeholders/640x320.png"
          },
          image_five: {
            original: "",
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
          },
          image_six: {
            original: "",
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
          }
        }
      ]
    };
  }
};
</script>
