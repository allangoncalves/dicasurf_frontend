<template>
  <div>
    <carousel
      tag="div"
      :data="slides"
      direction="up"
      :controls="false"
      :interval="10000"
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
                        <img src="@/assets/icons/previsao.svg" alt />
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
                        <img src="@/assets/icons/picos.svg" alt />
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
                        <img src="@/assets/icons/news.svg" alt />
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
import { mapState, mapActions } from 'vuex';

export default {
  name: "home",
  components: { SearchBar },
  methods: {
    ...mapActions([ "getForecast", "getWeather"]),
    spotSelected() {
      const lat = this.currentSpot.lat;
      const lng = this.currentSpot.lng;
      Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ]).then(() => this.$router.push("/previsao"));
    }
  },
  computed: {
    ...mapState(["currentSpot"])
  },
  data() {
    return {
      slides: [
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
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
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`,
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
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
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`,
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
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
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`
      ]
    };
  }
};
</script>

<style lang="scss">
.is-horizontal-center {
  justify-content: center;
}
.home-carousel-item {
  background-image: url("../assets/images/surf-em-Ubatuba.jpg");
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
  width: 160px;
  height: 160px;
}
</style>
