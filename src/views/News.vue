<template>
  <div>
    <section class="hero hero-img is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline has-text-centered">
            <div class="column is-full">
              <h1 class="title has-text-white">NEWS</h1>
            </div>
            <div class="column is-full is-paddingless">
              <div class="columns is-centered is-vcentered is-marginless">
                <div
                  class="column is-5 has-background-primary is-paddingless"
                  style="max-height:0.2em;height:0.2em"
                ></div>
              </div>
            </div>
            <div class="column is-full">
              <div class="columns is-centered">
                <div class="column is-5">
                  <h2
                    class="has-text-white"
                  >O Surf é mais que um esporte, é saúde, é estilo de vida, é prazer e contato com a natureza.</h2>
                  <a>#DicaSurfPicos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section section-top section-bottom"
      v-infinite-scroll="fetch"
      :infinite-scroll-disabled="fetching || next === null"
      :infinite-scroll-distance="80"
    >
      <div class="container">
        <div class="tile is-ancestor is-clickable" @click="goToPost(post)" v-for="post in posts" :key="post.id">
          <div class="tile is-parent">
            <div class="tile is-child is-2 is-horizontal-center is-flex">
              <figure class="image is-128x128">
                <img :src="post.preview_image.image" />
              </figure>
            </div>
            <div class="tile is-child">
              <div class="tile is-parent is-paddingless">
                <div class="tile is-child is-7">
                  <p class="title has-text-centered-mobile is-4">{{ post.title }}</p>
                </div>
                <div class="tile is-child has-text-centered-mobile has-text-right-tablet">
                  <p class="subtitle">{{ formatedDate(post.created_at) }}</p>
                </div>
              </div>
              <div class="tile is-parent is-vertical is-paddingless">
                <div class="tile is-child">
                  <div
                    class="has-background-primary"
                    style="max-height:0.2em;height:0.2em;margin-bottom:0.5rem"
                  />
                  <p class="preview-text">{{ post.preview_text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
  directives: { infiniteScroll },
  created() {
    const loading = this.$buefy.loading.open();
    loading.close();
  },
  methods: {
    ...mapActions("news", ["getPosts", "getNextPosts"]),
    goToPost(post) {
      this.$router.push({ name: `single_new`, params: { id: post.id } });
    },
    formatedDate(date) {
      let moment_date = moment(date);
      return `${moment_date.date()} de ${
        MONTHS[moment_date.month()]
      } de ${moment_date.year()}`;
    },
    fetch(){
      this.fetching = true;
      this.getNextPosts().finally(() => this.fetching = false);
    }
  },
  computed: {
    ...mapState("news", ["posts", "next"])
  },
  data(){
    return {
      fetching: false,
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-img {
  background-image: url("../assets/images/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
.section-top {
  padding-top: 3rem;
}
.section-bottom {
  padding-bottom: 3rem;
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
