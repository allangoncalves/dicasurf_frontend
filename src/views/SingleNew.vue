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
    <section class="section section-top section-bottom">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <div class="tile is-child">
              <p class="title has-text-centered-touch">{{post.title}}</p>
              <p style="white-space:pre-wrap">{{post.text}}</p>
            </div>
            <!-- <div class="tile is-child">
              <p class="has-text-primary">Ver mais</p>
            </div>-->
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <figure class="image is-square">
                <img :src="post.image.image" alt />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    mounted(){
        this.getSinglePost(this.$route.params.id).then(res => this.post = res);
    },
    methods: {
      ...mapActions("news", ["getSinglePost"])
    },
    data(){
      return {
        post: {}
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
</style>