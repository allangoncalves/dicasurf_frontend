<template>
  <div>
    <section class="hero hero-img is-medium">
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
              <search-bar :hideMessage="true" title="Nossos Picos" />
            </div>
            <div class="tile is-child" v-if="currentSpot != null && days.length !== 0">
              <div class="columns">
                <div class="column is-half">
                  <div class="columns is-vcentered">
                    <div class="column has-text-centered-mobile is-3">
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
                    <div class="column has-text-centered-mobile is-3">
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
            class="tile is-parent is-4 is-horizontal-center is-flex"
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
                    <b-tag
                      style="margin-right:1rem;margin-top:1rem"
                      type="is-danger"
                      v-for="danger in dangers"
                      :key="danger"
                    >{{ danger }}</b-tag>
                    <!-- <p class="has-text-weight-bold" v-for="danger in dangers" :key="danger">{{ danger }}</p> -->
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child">
                  <figure class="image is-square">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-child" v-if="currentSpot != null && days.length !== 0">
            <div class="tile is-parent">
              <div class="tile is-child">
                <carousel :per-page="3" :navigationEnabled="true" :paginationEnabled="false">
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">MADEIRO</p>
                    </div>
                  </slide>
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">MADEIRO</p>
                    </div>
                  </slide>
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">MADEIRO</p>
                    </div>
                  </slide>
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">CACIMBINHAS</p>
                    </div>
                  </slide>
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">CACIMBINHAS</p>
                    </div>
                  </slide>
                  <slide>
                    <div class="has-text-centered">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                      <p class="title is-5">CACIMBINHAS</p>
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
    if (this.days.length === 0) {
      this.selectLastSpotAdded().then(() => {
        const lat = this.currentSpot.lat;
        const lng = this.currentSpot.lng;
        this.getWeather({ lat, lng });
        this.getForecast({ lat, lng, hourTick: 1 });
      });
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
    ...mapActions(["selectLastSpotAdded", "getForecast", "getWeather"]),
    fullStar(position) {
      return position <= this.waveQuality ? "fas" : "far";
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
      if (this.currentSpot.accesses.stairwell) {
        types.push("Escadaria");
      }
      if (this.currentSpot.accesses.cliff) {
        types.push("Falésia");
      }
      if (this.currentSpot.accesses.bay) {
        types.push("Beira Mar");
      }
      if (this.currentSpot.accesses.trail) {
        types.push("Trilha");
      }
      if (this.currentSpot.accesses.other !== "") {
        types.push(this.currentSpot.accesses.others);
      }
      return types.join(" / ");
    },
    grounds() {
      let types = [];
      if (this.currentSpot.grounds.rock) {
        types.push("Pedra");
      }
      if (this.currentSpot.grounds.sand) {
        types.push("Areia");
      }
      if (this.currentSpot.grounds.coral) {
        types.push("Coral");
      }
      return types.join(" / ");
    },
    bestTideMoves() {
      let types = [];
      if (this.currentSpot.best_tide_moves.low) {
        types.push("Seca");
      }
      if (this.currentSpot.best_tide_moves.high) {
        types.push("Cheia");
      }
      if (this.currentSpot.best_tide_moves.ebb) {
        types.push("Secando");
      }
      if (this.currentSpot.best_tide_moves.flood) {
        types.push("Enchendo");
      }
      return types.join(" / ");
    },
    waveDirections() {
      let types = [];
      if (this.currentSpot.wave_directions.left) {
        types.push("Esquerda");
      }
      if (this.currentSpot.wave_directions.right) {
        types.push("Direita");
      }
      return types.join(" / ");
    },
    surfLevels() {
      let types = [];
      if (this.currentSpot.surf_levels.beginner) {
        types.push("Iniciante");
      }
      if (this.currentSpot.surf_levels.intermediate) {
        types.push("Intermediário");
      }
      if (this.currentSpot.surf_levels.expert) {
        types.push("Avançado");
      }
      return types.join(" / ");
    },
    waveFrequencies() {
      let types = [];
      if (this.currentSpot.wave_frequencies.low) {
        types.push("Baixa");
      }
      if (this.currentSpot.wave_frequencies.regular) {
        types.push("Regular");
      }
      if (this.currentSpot.wave_frequencies.high) {
        types.push("Alta");
      }
      return types.join(" / ");
    },
    dangers() {
      let types = [];
      if (this.currentSpot.dangers.current) {
        types.push("Correnteza");
      }
      if (this.currentSpot.dangers.localism) {
        types.push("Localismo");
      }
      if (this.currentSpot.dangers.boat) {
        types.push("Barcos");
      }
      if (this.currentSpot.dangers.jetski) {
        types.push("Jet Ski");
      }
      if (this.currentSpot.dangers.buoy) {
        types.push("Bóias");
      }
      if (this.currentSpot.dangers.pollution) {
        types.push("Poluição");
      }
      if (this.currentSpot.dangers.rock) {
        types.push("Pedras");
      }
      if (this.currentSpot.dangers.shark) {
        types.push("Tubarões");
      }
      if (this.currentSpot.dangers.undertow) {
        types.push("Ressaca");
      }
      if (this.currentSpot.dangers.other !== "") {
        types.push(this.currentSpot.dangers.other);
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
  background-image: url("../assets/images/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
</style>