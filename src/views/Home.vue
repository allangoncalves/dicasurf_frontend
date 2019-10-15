<template>
  <div>
    <carousel
      v-if="this.homeCarousel.length !== 0"
      tag="div"
      :data="slides"
      direction="up"
      :controls="false"
      :interval="6000"
      indicator-type="disc"
    ></carousel>

    <section class="section hero is-medium" style="padding-top:1rem;padding-bottom:4rem;">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <search-bar title="PREVISÃO" @spot-selected="spotSelected" />
          </div>
          <div class="column" style="padding-top:2rem">
            <div class="columns is-vcentered is-centered">
              <div class="column">
                <router-link to="/previsao" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img width="110px" src="@/assets/icons/previsao.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">Previsão</p>
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="column">
                <router-link to="/picos" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img width="110px" src="@/assets/icons/picos.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">Picos</p>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="column">
                <router-link to="/news" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img width="110px" src="@/assets/icons/news.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">News</p>
                    </div>
                  </div>
                </router-link>
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
    const loading = this.$buefy.loading.open();
    this.getHomeData()
      .then(() => {
        loading.close();
      })
      .catch(res => {
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
    ...mapActions("website", ["getHomeData"]),
    ...mapActions("marine", ["getForecast"]),
    ...mapActions("weather", ["getWeather"]),
    spotSelected() {
      const loading = this.$buefy.loading.open();
      const lat = this.currentSpot.lat;
      const lng = this.currentSpot.lng;
      Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ])
        .then(() => {
          loading.close();
          this.$router.push("/previsao");
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
</style>
