<template>
  <div>
    <section
      class="hero hero-img is-medium"
      v-if="currentSpot != null && days.length !== 0"
      :style="{backgroundImage: `url(${currentSpot.header_image})`}"
    >
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline has-text-centered">
            <div class="column is-full">
              <h1 class="title has-text-white">PICOS</h1>
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
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent" style="padding-bottom:0px">
            <div class="tile is-child">
              <search-bar :hideMessage="true" @spot-selected="spotSelected" title="Nossos Picos" />
            </div>
            <div class="tile is-child" v-if="currentSpot != null && days.length !== 0">
              <div class="columns">
                <div class="column is-half">
                  <div class="columns is-vcentered">
                    <div class="column has-text-centered-mobile is-narrow">
                      <b-icon type="is-danger" icon="map-marker-alt" size="is-large"></b-icon>
                    </div>
                    <div
                      class="column is-paddingless has-text-centered-mobile is-1 has-text-primary has-text-weight-bold"
                    >
                      <p>Como Chegar</p>
                    </div>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="columns is-vcentered">
                    <div class="column has-text-centered-mobile is-narrow">
                      <b-icon type="is-success" icon="globe" size="is-large"></b-icon>
                    </div>
                    <div
                      class="column is-paddingless is-1 has-text-primary has-text-centered-mobile has-text-weight-bold"
                    >
                      <p>Passeio 360º</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile is-child" v-if="currentSpot != null && days.length !== 0">
              <p class="title">{{ currentSpot.name }}</p>
              <p class="subtitle">{{ cityAndState }}</p>
              <div class="has-background-secondary" style="max-height:0.7em;height:0.2em"></div>
            </div>
          </div>
          <div
            class="tile is-parent is-5 is-horizontal-center is-flex"
            v-if="currentSpot != null && days.length !== 0"
          >
            <div class="tile is-child">
              <div class="is-paddingless">
                <forecast-hud
                  :waveHeight="waveHeight"
                  :WindGustKmph="WindGustKmph"
                  :waterTemp="waterTemp"
                  :ultraViolet="ultraViolet"
                  :wavePeriods="wavePeriods"
                  :swellHeight="swellHeight"
                  :windDir="windDir"
                  :tempC="tempC"
                  :fullDate="fullDate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="margin-top:1rem">
      <div class="container">
        <div class="tile is-parent is-vertical section-bottom">
          <div class="tile is-child">
            <div class="tile is-ancestor" v-if="currentSpot != null && days.length !== 0">
              <div class="tile is-vertical is-parent">
                <div class="tile is-child">
                  <div>
                    <h5 class="title is-4 is-marginless has-text-primary">Acesso</h5>
                    <p>
                      Acesso de carro:
                      <span
                        class="has-text-weight-bold"
                        :class="{'has-text-success': currentSpot.car, 'has-text-danger':!currentSpot.car}"
                      >{{ carAccess }}</span>
                    </p>
                    <p>
                      Acesso especial:
                      <span
                        class="has-text-weight-bold"
                        :class="{'has-text-success': currentSpot.special_access, 'has-text-danger':!currentSpot.special_access}"
                      >{{ specialAccess }}</span>
                    </p>
                    <p>
                      Tipo de praia:
                      <span
                        class="has-text-weight-bold"
                        :class="{'has-text-success': currentSpot.beach_type === 'Pública', 'has-text-danger':currentSpot.beach_type === 'Privada'}"
                      >{{ beachType }}</span>
                    </p>
                    <p>
                      Tipo de acesso:
                      <span class="has-text-weight-bold">{{ accessTypes }}</span>
                    </p>
                  </div>
                  <div class="data-category">
                    <h5 class="title is-4 is-marginless has-text-primary">Características</h5>
                    <p>
                      Fundo:
                      <span class="has-text-weight-bold">{{ grounds }}</span>
                    </p>
                    <p>
                      Melhor época do ano:
                      <span class="has-text-weight-bold">{{ timeOfYear }}</span>
                    </p>
                    <p>
                      Melhor Movimento da Maré:
                      <span
                        class="has-text-weight-bold"
                      >{{ bestTideMoves }}</span>
                    </p>
                    <p>
                      Crowd da semana:
                      <span class="has-text-weight-bold">{{ weekCrowd }}</span>
                    </p>
                    <p>
                      Crowd do final de semana:
                      <span class="has-text-weight-bold">{{ weekendCrowd }}</span>
                    </p>
                  </div>
                  <div class="data-category">
                    <h5 class="title is-4 is-marginless has-text-primary">Ondas</h5>
                    <p>
                      Qualidade das ondas:
                      <span>
                        <b-icon
                          type="is-secondary"
                          :pack="fullStar(1)"
                          icon="star"
                          size="is-small"
                        />
                        <b-icon
                          type="is-secondary"
                          :pack="fullStar(2)"
                          icon="star"
                          size="is-small"
                        />
                        <b-icon
                          type="is-secondary"
                          :pack="fullStar(3)"
                          icon="star"
                          size="is-small"
                        />
                        <b-icon
                          type="is-secondary"
                          :pack="fullStar(4)"
                          icon="star"
                          size="is-small"
                        />
                        <b-icon
                          type="is-secondary"
                          :pack="fullStar(5)"
                          icon="star"
                          size="is-small"
                        />
                      </span>
                    </p>
                    <p>
                      Direção:
                      <span class="has-text-weight-bold">{{ waveDirections }}</span>
                    </p>
                    <p>
                      Nivel do surf:
                      <span class="has-text-weight-bold">{{ surfLevels }}</span>
                    </p>
                    <p>
                      Comprimento das ondas:
                      <span class="has-text-weight-bold">{{ waveLength }}</span>
                    </p>
                    <p>
                      Força:
                      <span class="has-text-weight-bold">{{ waveStrength }}</span>
                    </p>
                    <p>
                      Frequência das ondas:
                      <span class="has-text-weight-bold">{{ waveFrequencies }}</span>
                    </p>
                  </div>
                  <div class="data-category">
                    <h5 class="title is-4 is-marginless has-text-danger">Perigos</h5>
                    <b-tooltip
                      style="margin-right:1rem;margin-top:1rem"
                      :label="danger"
                      type="is-danger"
                      multilined
                      :delay="300"
                      v-for="danger in dangers"
                      :key="danger"
                    >
                      <b-tag type="is-danger" :ellipsis="true">{{ danger }}</b-tag>
                    </b-tooltip>

                    <!-- <p class="has-text-weight-bold" v-for="danger in dangers" :key="danger">{{ danger }}</p> -->
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child">
                  <figure class="image is-square">
                    <img :src="currentSpot.info_image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-child" v-if="currentSpot != null && days.length !== 0">
            <div class="tile is-parent">
              <div class="tile is-child">
                <carousel :per-page="3" :navigationEnabled="true" :paginationEnabled="false">
                  <slide
                    @slide-click="openVideo(video.youtube_url)"
                    v-for="video in currentSpot.videos"
                    :key="video.id"
                  >
                    <div class="has-text-centered">
                      <img :src="video.thumb" />
                      <p class="title is-5">{{video.title}}</p>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ForecastHud from "@/components/ForecastHud";
import SearchBar from "@/components/SearchBar";
import core from "../mixins/core";
import { mapState, mapActions } from "vuex";
export default {
  mixins: [core],
  components: {
    ForecastHud,
    Carousel,
    Slide,
    SearchBar
  },
  created() {
    const local_lat = localStorage.getItem("lat");
    const local_lng = localStorage.getItem("lng");
    if (this.currentSpot === null) {
      if (local_lat !== null && local_lng !== null) {
        const loading = this.$buefy.loading.open();
        this.getNearestSpot({ lat: local_lat, lng: local_lng }).then(() => {
          this.collectData()
            .then(() => loading.close())
            .catch(() => loading.close());
        });
      } else if (this.days.length === 0) {
        const loading = this.$buefy.loading.open();
        this.selectLastSpotAdded().then(() => {
          this.collectData()
            .then(() => loading.close())
            .catch(() => loading.close());
        });
      }
    }
  },
  data() {
    return {
      isCar: true,
      isSpecial: true,
      isPublic: true,
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js"
      ],
      spot: {
        access: ""
      },
      name: "",
      selected: null,
      teste: " Não"
    };
  },
  methods: {
    ...mapActions([
      "selectLastSpotAdded",
      "getForecast",
      "getWeather",
      "getNearestSpot"
    ]),
    collectData() {
      const lat = this.currentSpot.lat;
      const lng = this.currentSpot.lng;
      return Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ]);
    },
    fullStar(position) {
      return position <= this.waveQuality ? "fas" : "far";
    },
    spotSelected() {
      const lat = this.currentSpot.lat;
      const lng = this.currentSpot.lng;
      this.getForecast({ lat, lng, hourTick: 1 });
      this.getWeather({ lat, lng });
    },
    openVideo(src) {
      this.$buefy.modal.open(`<figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360" src="${src}" frameborder="0" allowfullscreen></iframe>
        </figure>`);
    }
  },
  computed: {
    ...mapState(["currentSpot", "currentCity", "currentState"]),
    cityAndState() {
      return `${this.currentCity.name} - ${this.currentState.abbreviation}`;
    },
    carAccess() {
      return this.currentSpot.car ? "Sim" : "Não";
    },
    specialAccess() {
      return this.currentSpot.special_access ? "Sim" : "Não";
    },
    beachType() {
      return this.currentSpot.beach_type;
    },
    timeOfYear() {
      return this.currentSpot.time_of_year;
    },
    weekCrowd() {
      return this.currentSpot.week_crowd;
    },
    weekendCrowd() {
      return this.currentSpot.weekend_crowd;
    },
    waveQuality() {
      return this.currentSpot.wave_quality;
    },
    waveLength() {
      return this.currentSpot.wave_length;
    },
    waveStrength() {
      return this.currentSpot.wave_strength;
    },
    accessTypes() {
      let types = [];
      if (this.currentSpot.stairwell) {
        types.push("Escadaria");
      }
      if (this.currentSpot.cliff) {
        types.push("Falésia");
      }
      if (this.currentSpot.bay) {
        types.push("Beira Mar");
      }
      if (this.currentSpot.trail) {
        types.push("Trilha");
      }
      if (this.currentSpot.other_accesses !== "") {
        types.push(this.currentSpot.other_accesses);
      }
      return types.join(" / ");
    },
    grounds() {
      let types = [];
      if (this.currentSpot.rock) {
        types.push("Pedra");
      }
      if (this.currentSpot.sand) {
        types.push("Areia");
      }
      if (this.currentSpot.coral) {
        types.push("Coral");
      }
      return types.join(" / ");
    },
    bestTideMoves() {
      let types = [];
      if (this.currentSpot.low) {
        types.push("Seca");
      }
      if (this.currentSpot.high) {
        types.push("Cheia");
      }
      if (this.currentSpot.ebb) {
        types.push("Secando");
      }
      if (this.currentSpot.flood) {
        types.push("Enchendo");
      }
      return types.join(" / ");
    },
    waveDirections() {
      let types = [];
      if (this.currentSpot.left) {
        types.push("Esquerda");
      }
      if (this.currentSpot.right) {
        types.push("Direita");
      }
      return types.join(" / ");
    },
    surfLevels() {
      let types = [];
      if (this.currentSpot.beginner) {
        types.push("Iniciante");
      }
      if (this.currentSpot.intermediate) {
        types.push("Intermediário");
      }
      if (this.currentSpot.expert) {
        types.push("Avançado");
      }
      return types.join(" / ");
    },
    waveFrequencies() {
      let types = [];
      if (this.currentSpot.low_frequency) {
        types.push("Baixa");
      }
      if (this.currentSpot.regular_frequency) {
        types.push("Regular");
      }
      if (this.currentSpot.high_frequency) {
        types.push("Alta");
      }
      return types.join(" / ");
    },
    dangers() {
      let types = [];
      if (this.currentSpot.current) {
        types.push("Correnteza");
      }
      if (this.currentSpot.localism) {
        types.push("Localismo");
      }
      if (this.currentSpot.boat) {
        types.push("Barcos");
      }
      if (this.currentSpot.jetski) {
        types.push("Jet Ski");
      }
      if (this.currentSpot.buoy) {
        types.push("Bóias");
      }
      if (this.currentSpot.pollution) {
        types.push("Poluição");
      }
      if (this.currentSpot.rocks) {
        types.push("Pedras");
      }
      if (this.currentSpot.shark) {
        types.push("Tubarões");
      }
      if (this.currentSpot.undertow) {
        types.push("Ressaca");
      }
      if (this.currentSpot.other_dangers !== "") {
        types.push(this.currentSpot.other_dangers);
      }
      return types;
    },
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-img {
  width: auto;
  height: 600px;
}
.is-horizontal-center {
  justify-content: center;
}

.info-icons {
  padding-right: 0;
}

.search {
  font-weight: bolder;
}

.section-bottom {
  padding-bottom: 3rem;
}

.data-category {
  margin-top: 1.2rem;
}
.hero-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
</style>