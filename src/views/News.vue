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
              <p class="title">Ele aprendeu o valor da amizade no surf</p>
              <p>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div class="tile is-child">
              <p class="has-text-primary">Ver mais</p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <figure class="image is-square">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt />
              </figure>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor" v-for="(post, index) in posts" :key="index">
          <div class="tile is-parent">
            <div class="tile is-child is-2 is-horizontal-center is-flex">
                <img :src="post.img" alt />
            </div>
            <div class="tile is-child">
              <div class="tile is-parent is-paddingless">
                <div class="tile is-child is-4">
                  <p class="title is-4">{{ post.title }}</p>
                </div>
                <div class="tile is-child">
                  <div class="is-flex is-pulled-right date-bottom">
                    <p class="subtitle" style="vertical-align:bottom">{{ post.date }}</p>
                  </div>
                </div>
              </div>
              <div class="tile is-parent is-vertical is-paddingless">
                <div class="tile is-child">
                  <div
                    class="has-background-primary"
                    style="max-height:0.2em;height:0.2em;margin-bottom:0.5rem"
                  />
                  <p>{{ post.text }}</p>
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
export default {
  data() {
    return {
      posts: [
        {
          img: "https://bulma.io/images/placeholders/128x128.png",
          title: "Ele apredeu o valor da amizade no surf",
          date: "18 de Março de 2019",
          text:
            "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  a type specimen book. It has survived not only five"
        },
        {
          img: "https://bulma.io/images/placeholders/128x128.png",
          title: "Ele apredeu o valor da amizade no surf",
          date: "18 de Março de 2019",
          text:
            "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  a type specimen book. It has survived not only five"
        },
        {
          img: "https://bulma.io/images/placeholders/128x128.png",
          title: "Ele apredeu o valor da amizade no surf",
          date: "18 de Março de 2019",
          text:
            "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  a type specimen book. It has survived not only five"
        },
      ]
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
</style>