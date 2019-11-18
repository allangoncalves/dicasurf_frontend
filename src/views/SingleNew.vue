<template>
  <div>
    <section class="hero hero-img is-medium">
      <!-- Hero content: will be in the middle -->
      <section class="image is-3by1">
        <img src="@/assets/images/news.png" alt />
      </section>
    </section>
    <section class="section section-top section-bottom">
      <div class="container">
        <div>
          <div class="columns is-vcentered">
            <div class="column has-text-left">
              <b-icon
                custom-class="is-clickable"
                icon="chevron-left"
                size="is-small"
                pack="fas"
                @click="goBack"
              ></b-icon>
              <span
                class="has-text-primary is-clickable is-uppercase has-text-weight-bold"
                @click="goBack"
                >Voltar</span
              >
            </div>
            <div class="column is-narrow">
              <p
                class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
              >
                News
              </p>
            </div>
            <div class="column has-text-right">
              <!-- <span
                @click="test"
                class="has-text-primary is-clickable is-uppercase has-text-weight-bold"
                >Próxima</span
              >
              <b-icon
                custom-class="is-clickable"
                icon="chevron-right"
                size="is-small"
                pack="fas"
              /> -->
            </div>
          </div>

          <hr style="border: 1px solid #0075bb"/>
        </div>
        <div class="tile is-vertical is-parent">
          <div class="tile is-child">
            <p class="title has-text-centered-touch has-text-primary">{{ post.title }}</p>
            <p style="white-space:pre-wrap" v-html="post.text"></p>
          </div>
          <!-- <div class="tile is-child">
              <p class="has-text-primary">Ver mais</p>
            </div>-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    const loading = this.$buefy.loading.open();
    this.getSinglePost(this.$route.params.id).then(res => {
      this.post = res;
      loading.close();
    });
  },
  methods: {
    ...mapActions("news", ["getSinglePost"]),
    goBack() {
      this.$router.back();
    }
  },
  data() {
    return {
      post: {}
    };
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
</style>
