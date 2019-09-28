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
              <p class="title has-text-centered-touch">{{selectedPost.title}}</p>
              <p>{{selectedPost.text}}</p>
            </div>
            <!-- <div class="tile is-child">
              <p class="has-text-primary">Ver mais</p>
            </div>-->
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <figure class="image is-square">
                <img :src="selectedPost.image" alt />
              </figure>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor" @click="changeSelected(post.id)" v-for="post in otherPosts" :key="post.id">
          <div class="tile is-parent">
            <div class="tile is-child is-2 is-horizontal-center is-flex">
              <figure class="image is-128x128">
                <img :src="post.image" />
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
  created() {
    const loading = this.$buefy.loading.open();
    this.getPosts()
      .then(() => {
        this.changeSelected(this.posts[0].id);
        loading.close();
      })
      .catch(() => {
        loading.close();
        this.$buefy.toast.open({
          duration: 4000,
          message: `Ops! Não foi possível carregar os dados, tente novamente.`,
          position: "is-bottom",
          type: "is-danger"
        });
      });
  },
  methods: {
    ...mapActions(["getPosts"]),
    changeSelected(id) {
      this.selectedId = id;
    },
    formatedDate(date) {
      let moment_date = moment(date);
      return `${moment_date.date()} de ${
        MONTHS[moment_date.month()]
      } de ${moment_date.year()}`;
    }
  },
  computed: {
    ...mapState(["posts"]),
    selectedPost() {
      let post = this.posts.find(post => post.id === this.selectedId);

      if (post !== undefined) {
        console.log(post);
      }
      return post !== undefined
        ? post
        : {
            title: "",
            image: "",
            preview_text: "",
            text: "",
            created_at: ""
          };
    },
    otherPosts() {
      let unselectedPosts = this.posts.filter(
        post => post.id !== this.selectedId
      );
      if (unselectedPosts.length < 3) {
        return unselectedPosts;
      } else {
        return unselectedPosts.slice(0, 3);
      }
    }
  },
  data() {
    return {
      selectedId: null
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