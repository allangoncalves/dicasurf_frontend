<template>
  <div>
    <section
      class="hero hero-img is-medium"
      :style="{backgroundImage: `url(${currentSpot ? currentSpot.details ? currentSpot.details.header_image.image : require('@/assets/images/surf-em-Ubatuba.jpg') : require('@/assets/images/surf-em-Ubatuba.jpg')})`}"
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
            <div class="tile is-child">
              <div class="columns" v-if="currentSpot !== null">
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
            <div class="tile is-child is-11" v-if="currentSpot !== null">
              <p class="title">{{ currentSpot.name }}</p>
              <p class="subtitle">{{ cityAndState }}</p>
              <div class="has-background-secondary" style="max-height:0.7em;height:0.2em"></div>
            </div>
          </div>
          <div class="tile is-parent is-4 is-horizontal-center is-flex" v-if="days.length > 0">
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
      <div v-if="currentSpot != null">
        <div class="container" v-if="currentSpot.details != null">
          <div class="tile is-parent is-vertical section-bottom">
            <div class="tile is-child">
              <div class="tile is-ancestor">
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
                        <span
                          class="has-text-weight-bold"
                        >{{ weekendCrowd }}</span>
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
                        <span
                          class="has-text-weight-bold"
                        >{{ waveFrequencies }}</span>
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
                      <img :src="currentSpot.details.info_image.image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile is-child" v-if="currentSpot != null">
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
    if (local_lat !== null && local_lng !== null) {
      const loading = this.$buefy.loading.open();
      this.getNearestSpot({ lat: local_lat, lng: local_lng }).then(() => {
        this.collectData()
          .then(() => loading.close())
          .catch(() => {
            loading.close();
            this.$buefy.toast.open({
              duration: 4000,
              message: `Ops! Não foi possível carregar os dados, tente novamente.`,
              position: "is-bottom",
              type: "is-danger"
            });
          });
      });
    }
  },
  data() {
    return {
      isCar: true,
      isSpecial: true,
      isPublic: true,
      spot: {
        access: ""
      },
      name: "",
      selected: null,
      teste: " Não"
    };
  },
  methods: {
    ...mapActions("marine", ["getForecast"]),
    ...mapActions("weather", ["getWeather"]),
    ...mapActions("geo", ["getNearestSpot"]),
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
      const loading = this.$buefy.loading.open();
      Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ])
        .then(() => {
          console.log(this.currentSpot.details);
          loading.close();
        })
        .catch(res => {
          console.log(res);
          loading.close();
        });
    },
    openVideo(src) {
      this.$buefy.modal.open(`<figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360" src="${src}" frameborder="0" allowfullscreen></iframe>
        </figure>`);
    }
  },
  computed: {
    ...mapState("geo", ["currentSpot", "currentCity", "currentState"]),
    cityAndState() {
      return `${this.currentCity.name} - ${this.currentState.abbreviation}`;
    },
    carAccess() {
      return this.currentSpot.details.car ? "Sim" : "Não";
    },
    specialAccess() {
      return this.currentSpot.details.special_access ? "Sim" : "Não";
    },
    beachType() {
      return this.currentSpot.details.beach_type;
    },
    timeOfYear() {
      return this.currentSpot.details.time_of_year;
    },
    weekCrowd() {
      return this.currentSpot.details.week_crowd;
    },
    weekendCrowd() {
      return this.currentSpot.details.weekend_crowd;
    },
    waveQuality() {
      return this.currentSpot.details.wave_quality;
    },
    waveLength() {
      return this.currentSpot.details.wave_length;
    },
    waveStrength() {
      return this.currentSpot.details.wave_strength;
    },
    accessTypes() {
      let types = [];
      if (this.currentSpot.details.stairwell) {
        types.push("Escadaria");
      }
      if (this.currentSpot.details.cliff) {
        types.push("Falésia");
      }
      if (this.currentSpot.details.bay) {
        types.push("Beira Mar");
      }
      if (this.currentSpot.details.trail) {
        types.push("Trilha");
      }
      if (this.currentSpot.details.other_accesses !== "") {
        types.push(this.currentSpot.details.other_accesses);
      }
      return types.join(" / ");
    },
    grounds() {
      let types = [];
      if (this.currentSpot.details.rock) {
        types.push("Pedra");
      }
      if (this.currentSpot.details.sand) {
        types.push("Areia");
      }
      if (this.currentSpot.details.coral) {
        types.push("Coral");
      }
      return types.join(" / ");
    },
    bestTideMoves() {
      let types = [];
      if (this.currentSpot.details.low) {
        types.push("Seca");
      }
      if (this.currentSpot.details.high) {
        types.push("Cheia");
      }
      if (this.currentSpot.details.ebb) {
        types.push("Secando");
      }
      if (this.currentSpot.details.flood) {
        types.push("Enchendo");
      }
      return types.join(" / ");
    },
    waveDirections() {
      let types = [];
      if (this.currentSpot.details.left) {
        types.push("Esquerda");
      }
      if (this.currentSpot.details.right) {
        types.push("Direita");
      }
      return types.join(" / ");
    },
    surfLevels() {
      let types = [];
      if (this.currentSpot.details.beginner) {
        types.push("Iniciante");
      }
      if (this.currentSpot.details.intermediate) {
        types.push("Intermediário");
      }
      if (this.currentSpot.details.expert) {
        types.push("Avançado");
      }
      return types.join(" / ");
    },
    waveFrequencies() {
      let types = [];
      if (this.currentSpot.details.low_frequency) {
        types.push("Baixa");
      }
      if (this.currentSpot.details.regular_frequency) {
        types.push("Regular");
      }
      if (this.currentSpot.details.high_frequency) {
        types.push("Alta");
      }
      return types.join(" / ");
    },
    dangers() {
      let types = [];
      if (this.currentSpot.details.current) {
        types.push("Correnteza");
      }
      if (this.currentSpot.details.localism) {
        types.push("Localismo");
      }
      if (this.currentSpot.details.boat) {
        types.push("Barcos");
      }
      if (this.currentSpot.details.jetski) {
        types.push("Jet Ski");
      }
      if (this.currentSpot.details.buoy) {
        types.push("Bóias");
      }
      if (this.currentSpot.details.pollution) {
        types.push("Poluição");
      }
      if (this.currentSpot.details.rocks) {
        types.push("Pedras");
      }
      if (this.currentSpot.details.shark) {
        types.push("Tubarões");
      }
      if (this.currentSpot.details.undertow) {
        types.push("Ressaca");
      }
      if (this.currentSpot.details.other_dangers !== "") {
        types.push(this.currentSpot.details.other_dangers);
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