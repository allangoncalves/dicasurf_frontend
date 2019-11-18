<template>
  <div>
    <section class="hero hero-img is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6">
              <p
                class="title is-1 has-text-centered-touch has-text-white headline"
              >
                Surfista brasileiro encara as pergigosas ondas de Teahupo
              </p>
              <hr style="margin-bottom:0rem;border: 2px solid #0075bb" />
            </div>
            <div class="column is-full">
              <b-tag
                style="opacity: 0.7"
                class="is-clickable"
                type="is-primary"
                size="is-medium"
              >
                <span style="opacity:1.0">+ Ler mais</span>
              </b-tag>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section section-top section-bottom"
      v-infinite-scroll="fetch"
      :infinite-scroll-disabled="busy || next === null"
      :infinite-scroll-distance="40"
    >
      <div class="container">
        <div>
          <p
            class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
          >
            News
          </p>
          <hr style="border: 1px solid #0075bb"/>
        </div>
        <div
          class="tile is-ancestor is-clickable"
          style="margin-bottom:2rem"
          @click="goToPost(post)"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="tile is-parent is-vertical">
            <div class="is-inline-block">
              <p style="padding-bottom: 0.7rem" class="has-text-centered-touch">
                <span
                  class="subtitle has-text-primary"
                  style="border-bottom:2px solid #0075bb"
                  >{{ formatedDate(post.created_at) }}</span
                >
              </p>
              <p class="title has-text-centered-mobile has-text-primary is-4">
                {{ post.title }}
              </p>
              <p class="subtitle is-6 preview-text" v-html="post.preview_text"></p>
            </div>
          </div>
          <div class="tile is-parent is-3">
            <div class="tile is-child">
              <figure class="image is-16by9">
                <img
                  :src="post.preview_image.image"
                  style="border-radius:10px;"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Map/> -->
  </div>
</template>

<script>
import Map from "@/components/Map";
var moment = require("moment");
import infiniteScroll from "vue-infinite-scroll";
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Map
  },
  directives: { infiniteScroll },
  created() {
    const loading = this.$buefy.loading.open();
    loading.close();
  },
  methods: {
    ...mapActions("news", ["getPosts", "getNextChunk"]),
    goToPost(post) {
      this.$router.push({ name: `single_new`, params: { id: post.id } });
    },
    formatedDate(date) {
      let moment_date = moment(date);
      return `${moment_date.date()} de ${
        MONTHS[moment_date.month()]
      } de ${moment_date.year()}`;
    },
    fetch() {
      this.getNextChunk();
    }
  },
  computed: {
    ...mapState("news", ["posts", "next", "busy"])
  }
};
</script>

<style lang="scss" scoped>
.headline {
  text-shadow: 1px 1px grey;
}
.hero-img {
  background-image: url("../assets/images/surf.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
.date-bottom {
  height: 100%;
  align-items: flex-end;
}
.is-horizontal-center {
  justify-content: center;
}
.preview-text {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
