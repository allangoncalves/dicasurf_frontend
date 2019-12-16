<template>
  <div class="columns">
    <div class="column">
      <div
        class="columns has-background-primary is-multiline is-gapless is-clickable box is-paddingless"
        @click="goToPictures"
      >
        <div class="column is-full">
          <figure class="image is-square">
            <img
              class="tab"
              src="https://bulma.io/images/placeholders/480x480.png"
              alt=""
            />
          </figure>
        </div>
        <div class="column is-full">
          <div
            class="is-flex"
            style="justify-content:space-between;align-items:center"
          >
            <p
              class="has-text-white is-uppercase has-text-weight-bold title is-4"
              style="padding:1.5rem;margin:0px"
            >
              fotos
            </p>
            <b-icon
              style="padding-right:1.5rem"
              icon="arrow-right"
              type="is-white"
              size="is-medium"
              pack="fas"
            ></b-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div
        class="columns has-background-primary is-multiline is-gapless is-clickable box is-paddingless"
        @click="goToVideos"
      >
        <div class="column is-full">
          <figure class="image is-square">
            <img
              class="tab"
              src="https://bulma.io/images/placeholders/480x480.png"
              alt=""
            />
          </figure>
        </div>
        <div class="column is-full">
          <div
            class="is-flex"
            style="justify-content:space-between;align-items:center"
          >
            <p
              class="has-text-white is-uppercase has-text-weight-bold title is-4"
              style="padding:1.5rem;margin:0px"
            >
              videos
            </p>
            <b-icon
              style="padding-right:1.5rem"
              icon="arrow-right"
              type="is-white"
              size="is-medium"
              pack="fas"
            ></b-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToPictures() {
      this.$router.push({ name: "spot_pics" });
    },
    goToVideos() {
      this.$router.push({ name: "spot_videos" });
    }
  }
};
</script>
