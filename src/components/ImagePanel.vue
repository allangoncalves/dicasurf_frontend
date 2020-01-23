<template>
  <div class="columns">
    <div class="column">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="columns">
            <div class="column" @click="openImage(panel.image_one)">
              <figure class="image is-128by128">
                <img
                  :src="safeThumb(panel.image_one)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
            <div class="column" @click="openImage(panel.image_two)">
              <figure class="image is-128by128">
                <img
                  :src="safeThumb(panel.image_two)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column" @click="openImage(panel.image_three)">
          <figure class="image is-2by1">
            <img
              :src="safeThumb(panel.image_three)"
              alt=""
              style="border-radius:10px;"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="columns is-multiline">
        <div class="column is-full" @click="openImage(panel.image_four)">
          <figure class="image is-2by1">
            <img
              :src="safeThumb(panel.image_four)"
              alt=""
              style="border-radius:10px;"
            />
          </figure>
        </div>
        <div class="column is-full">
          <div class="columns">
            <div class="column" @click="openImage(panel.image_five)">
              <figure class="image is-128by128">
                <img
                  :src="safeThumb(panel.image_five)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
            <div class="column" @click="openImage(panel.image_six)">
              <figure class="image is-128by128">
                <img
                  :src="safeThumb(panel.image_six)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PanoramaView from "@/components/PanoramaView";
export default {
  methods: {
    openImage(image) {
      if (image !== null) {
        this.$buefy.modal.open({
          component: PanoramaView,
          props: {
            source: image.image
          }
        });
      }
    },
    safeThumb(obj) {
      return obj === null ? "" : obj.thumb;
    }
  },
  props: {
    panel: {
      type: Object,
    }
  }
};
</script>
