<template>
  <div class="columns">
    <div class="column">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="columns">
            <div class="column" @click="openVideo(panel.video_one)">
              <figure class="image is-128by128">
                <img
                  :src="createThumb(panel.video_one)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
            <div class="column" @click="openVideo(panel.video_two)">
              <figure class="image is-128by128">
                <img
                  :src="createThumb(panel.video_two)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column" @click="openVideo(panel.video_three)">
          <figure class="image is-2by1">
            <img
              :src="createThumb(panel.video_three)"
              alt=""
              style="border-radius:10px;"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="columns is-multiline">
        <div class="column is-full" @click="openVideo(panel.video_four)">
          <figure class="image is-2by1">
            <img
              :src="createThumb(panel.video_four)"
              alt=""
              style="border-radius:10px;"
            />
          </figure>
        </div>
        <div class="column is-full">
          <div class="columns">
            <div class="column" @click="openVideo(panel.video_five)">
              <figure class="image is-128by128">
                <img
                  :src="createThumb(panel.video_five)"
                  alt=""
                  style="border-radius:10px;"
                />
              </figure>
            </div>
            <div class="column" @click="openVideo(panel.video_six)">
              <figure class="image is-128by128">
                <img
                  :src="createThumb(panel.video_six)"
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
const YOUTUBE_REGEX = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
export default {
  methods: {
    openVideo(video) {
      if (video !== null) {
        let matches = video.url.match(YOUTUBE_REGEX);
        const video_id = matches !== null ? matches[2] : "";
        this.$buefy.modal.open(`<figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/${video_id}" frameborder="0" allowfullscreen></iframe>
        </figure>`);
      }
    },
    createThumb(video) {
      if (video !== null) {
        const matches = url.match(YOUTUBE_REGEX);
        const video_id = matches !== null ? matches[2] : "";
        return `https://img.youtube.com/vi/${video_id}/mqdefault.jpg`;
      }
      return ""
    }
  },
  props: {
    panel: {
      type: Object,
    }
  }
};
</script>
