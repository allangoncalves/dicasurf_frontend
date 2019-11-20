<template>
  <div>
    <section class="hero is-medium">
      <figure class="image is-3by1">
        <img src="@/assets/images/home.png" alt="" />
      </figure>
    </section>

    <section class="section section-top section-bottom">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <search-bar
              title="PREVISÃO"
              @spot-selected="spotSelected"
              :onlyVisible="true"
            />
            <hr style="border: 1px solid #0075bb"/>
            <p class="title is-size-3-tablet has-text-centered">
              Nossa vibe é
              <span class="has-text-primary is-uppercase">surf</span>, o resto é
              <span class="has-text-primary is-uppercase">onda</span>.
            </p>
          </div>
          <div class="column is-full" style="padding-top:2rem">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article
                      @click="$router.push('/picos')"
                      class="tile is-child box has-background-primary has-text-white is-paddingless is-clickable"
                    >
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-narrow is-flex">
                          <div
                            style="align-self:flex-end;padding:0.6rem;width:100%;padding-right:0rem;"
                          >
                            <p>
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile"
                                >_</span
                              >
                              <br />
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile is-size-6-tablet"
                                >picos</span
                              >
                            </p>
                          </div>
                          <div style="padding-top:0.7rem;padding-right:0.5rem">
                            <b-icon
                              icon="arrow-right"
                              type="is-white"
                              size="is-small"
                              pack="fas"
                            ></b-icon>
                          </div>
                        </div>
                        <div class="column">
                          <figure class="image">
                            <img src="@/assets/images/pico-home.png" style="border-radius: 0px 6px 6px 0px"/>
                          </figure>
                        </div>
                      </div>
                      <!-- Put any content you want -->
                    </article>
                    <article
                      @click="$router.push('/boaonda')"
                      class="tile is-child box has-background-primary has-text-white is-paddingless is-clickable"
                    >
                      <!-- Put any content you want -->
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-narrow is-flex">
                          <div
                            style="align-self:flex-end;padding:0.6rem;width:100%;padding-right:0rem;"
                          >
                            <p>
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile"
                                >_</span
                              >
                              <br />
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile is-size-6-tablet"
                              >
                                boa onda
                              </span>
                            </p>
                          </div>
                          <div style="padding-top:0.7rem;padding-right:0.5rem">
                            <b-icon
                              icon="arrow-right"
                              type="is-white"
                              size="is-small"
                              pack="fas"
                            ></b-icon>
                          </div>
                        </div>
                        <div class="column">
                          <figure class="image">
                            <img src="@/assets/images/boaonda-home.png" style="border-radius: 0px 6px 6px 0px;"/>
                          </figure>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div class="tile is-parent is-vertical">
                    <article
                      @click="$router.push('/news')"
                      class="tile is-child box has-background-primary has-text-white is-paddingless is-clickable"
                    >
                      <!-- Put any content you want -->
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-narrow is-flex">
                          <div
                            style="align-self:flex-end;padding:0.6rem;width:100%;padding-right:0rem;"
                          >
                            <p>
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile"
                                >_</span
                              >
                              <br />
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile is-size-6-tablet"
                                >news</span
                              >
                            </p>
                          </div>
                          <div style="padding-top:0.7rem;padding-right:0.5rem">
                            <b-icon
                              icon="arrow-right"
                              type="is-white"
                              size="is-small"
                              pack="fas"
                            ></b-icon>
                          </div>
                        </div>
                        <div class="column">
                          <figure class="image">
                            <img src="@/assets/images/news-home.png" style="border-radius: 0px 6px 6px 0px"/>
                          </figure>
                        </div>
                      </div>
                    </article>
                    <article
                      @click="$router.push('/parceiros')"
                      class="tile is-child box has-background-primary has-text-white is-paddingless is-clickable"
                    >
                      <!-- Put any content you want -->
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-narrow is-flex">
                          <div
                            style="align-self:flex-end;padding:0.6rem;padding-right:0rem;width:100%;padding-right:0rem;"
                          >
                            <p>
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile"
                                >_</span
                              >
                              <br />
                              <span
                                class="has-text-white is-uppercase title is-size-7-mobile is-size-6-tablet"
                                >parceiros</span
                              >
                            </p>
                          </div>
                          <div style="padding-top:0.7rem;padding-right:0.5rem">
                            <b-icon
                              icon="arrow-right"
                              type="is-white"
                              size="is-small"
                              pack="fas"
                            ></b-icon>
                          </div>
                        </div>
                        <div class="column">
                          <figure class="image">
                            <img src="@/assets/images/parceiros-home.png" style="border-radius: 0px 6px 6px 0px"/>
                          </figure>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent">
                  <article
                    class="tile is-child box has-text-primary is-paddingless is-clickable"
                    @click="$router.push('/loja')"
                  >
                    <!-- Put any content you want -->
                    <div class="columns is-gapless is-mobile">
                      <div class="column is-narrow is-flex">
                        <div
                          style="align-self:flex-end;padding-left:1rem;width:100%;padding-right:0rem;"
                        >
                          <p>
                            <span
                              class="has-text-primary is-uppercase title is-size-6-mobile is-size-2-tablet"
                              >_</span
                            >
                            <br />
                            <span
                              class="has-text-primary is-uppercase title is-size-6-mobile is-size-2-tablet"
                              >loja</span
                            >
                          </p>
                        </div>
                        <div style="padding-top:0.7rem;padding-right:0.5rem">
                          <b-icon
                            icon="arrow-right"
                            type="is-primary"
                            size="is-small"
                            pack="fas"
                          ></b-icon>
                        </div>
                      </div>
                      <div class="column">
                        <figure class="image">
                          <img src="@/assets/images/loja-home.png" style="border-radius: 0px 6px 6px 0px" />
                        </figure>
                      </div>
                    </div>
                  </article>
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
import SearchBar from "../components/SearchBar";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: { SearchBar },
  created() {
    // const loading = this.$buefy.loading.open();
    // this.getHomeData()
    //   .then(() => {
    //     loading.close();
    //   })
    //   .catch(res => {
    //     loading.close();
    //     this.$buefy.toast.open({
    //       duration: 4000,
    //       message: `Ops! Não foi possível carregar os dados, tente novamente.`,
    //       position: "is-bottom",
    //       type: "is-danger"
    //     });
    //   });
  },
  methods: {
    ...mapActions("website", ["getHomeData"]),
    ...mapActions("marine", ["getForecast"]),
    ...mapActions("weather", ["getWeather"]),
    spotSelected() {
      this.$router.push("/picos");
      // const loading = this.$buefy.loading.open();
      // const lat = this.currentSpot.lat;
      // const lng = this.currentSpot.lng;
      // Promise.all([
      //   this.getWeather({ lat, lng }),
      //   this.getForecast({ lat, lng, hourTick: 1 })
      // ])
      //   .then(() => {
      //     loading.close();
      //     this.$router.push("/picos");
      //   })
      //   .catch(() => {
      //     loading.close();
      //     this.$buefy.toast.open({
      //       duration: 4000,
      //       message: `Ops! Não foi possível carregar os dados, tente novamente.`,
      //       position: "is-bottom",
      //       type: "is-danger"
      //     });
      //   });
    },
    createSlide(slide) {
      return `<section class="section is-medium home-carousel-item" :style="{backgroundImage: 'url(${slide.image.image})'}">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">${slide.title}</h1>
            </div>
            <div class="column is-full is-paddingless">
              <div class="columns is-vcentered is-marginless">
                <div
                  class="column is-4 has-background-primary is-paddingless"
                  style="max-height:0.2em;height:0.2em"
                ></div>
              </div>
            </div>
            <div class="column is-full">
              <div class="columns">
                <div class="column is-4">
                  <h2
                    class="has-text-white has-text-centered-mobile"
                  >${slide.text}<br><a>${slide.hashtag}</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    }
  },
  computed: {
    ...mapState("website", ["homeCarousel"]),
    ...mapState("geo", ["currentSpot"]),
    slides() {
      return this.homeCarousel.map(slide => this.createSlide(slide));
    }
  }
};
</script>

<style lang="scss">
.is-horizontal-center {
  justify-content: center;
}
.home-carousel-item {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
.home-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: radial-gradient(#0075bb 100%, blue 30%);
  width: 130px;
  height: 130px;
}
.section-top {
  margin-top: 3rem;
}
.section-bottom {
  margin-bottom: 3rem;
}
</style>
