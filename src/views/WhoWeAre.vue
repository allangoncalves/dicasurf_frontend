<template>
  <section class="section section-bottom section-top">
    <div class="container">
      <div>
        <p
          class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
        >
          quem somos
        </p>
        <hr style="border: 1px solid #0075bb" />
      </div>
      <p class="has-text-centered title is-4 has-text-primary">
        Nascemos para ser o maior e mais legal guia virtual de surf do mundo!
      </p>
      <p>
        Mapearemos o litoral nordestino do Brasil, procurando os melhores picos;
        coletando informações com os surfistas locais sobre como pegar as ondas
        que eles cresceram surfando e compartilhando essa experiência em vídeos
        de dicas e informações úteis sobre cada pico. Começamos esta aventura em
        nosso lar, Praia da Pipa, um paraíso situado no Rio Grande do Norte.
        Nessa região temos a sorte de contar com incríveis picos e praias para
        surfar com golfinhos e tartarugas marinhas, uma das maravilhas naturais
        na nossa região.
      </p>
      <figure class="image is-2by1" style="margin-top:1.5rem">
        <iframe
          class="has-ratio"
          :src="createVideo(selectedVideo)"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>
      <carousel
        :perPageCustom="[
          [0, 1],
          [769, 2],
          [1024, 3]
        ]"
        :navigationClickTargetSize="0"
        :navigationEnabled="true"
        :paginationEnabled="false"
      >
        <slide
          @slideclick="changeVideo(video)"
          v-for="(video, index) in videoIds"
          :key="index"
        >
          <figure class="image is-clickable" style="margin:2rem">
            <img :src="createThumb(video)" alt="" />
          </figure>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
const YOUTUBE_REGEX = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    Carousel,
    Slide
  },
  created() {
    this.getWhoWeAreData().then(() => {
      if (this.whoWeAreCarousel.length > 0) {
        this.selectedVideo = this.videoIds[0];
      }
    });
  },
  methods: {
    ...mapActions("website", ["getWhoWeAreData"]),
    createThumb(id) {
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    },
    createVideo(id) {
      console.log(`https://www.youtube.com/embed/${id}`);
      return `https://www.youtube.com/embed/${id}`;
    },
    changeVideo(video) {
      this.selectedVideo = video;
    },
  },
  computed: {
    ...mapState("website", ["whoWeAreCarousel"]),
    videoIds() {
      return this.whoWeAreCarousel.map(
        slide => slide.video_url.match(YOUTUBE_REGEX)[2]
      );
    }
  },
  data() {
    return {
      selectedVideo: ""
    };
  }
};
</script>
