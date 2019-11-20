<template>
  <div>
    <section class="hero is-medium">
      <figure class="image is-3by1">
        <img src="@/assets/images/picos.png" alt />
      </figure>
      <!-- Hero content: will be in the middle -->
    </section>

    <section class="section">
      <div class="container" style="padding-top:2rem;padding-bottom:2rem">
        <search-bar
          :hideMessage="true"
          @spot-selected="spotSelected"
          :onlyVisible="true"
        />
        <hr style="border: 1px solid #0075bb" />
        <div class="columns is-centered">
          <div class="column is-full">
            <carousel
              :perPage="1"
              v-if="selectedSpot != null"
              paginationActiveColor="#0075bb"
              paginationColor="#343434"
            >
              <slide>
                <figure class="image is-3by1">
                  <img src="@/assets/images/boaonda1.png" alt="a" />
                </figure>
                <p class="centered has-text-white title">
                  <span class="is-size-1-tablet is-size-5-mobile">_</span>
                  <br />
                  <span
                    class="is-uppercase is-size-2-tablet is-size-5-mobile"
                    >{{ selectedSpot.spot.name }}</span
                  >
                </p>
              </slide>
              <slide v-for="(video, index) in videos" :key="index">
                <figure class="image is-3by1">
                  <iframe
                    class="has-ratio"
                    :src="video.youtube_url"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </figure>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="tile is-ancestor is-vertical" v-if="selectedSpot != null">
          <div class="tile is-parent">
            <div class="tile is-child">
              <div>
                <h5 class="title is-3 has-text-primary">Acesso</h5>
                <p>
                  Acesso de carro:
                  <span
                    class="has-text-weight-bold"
                    :class="{
                      'has-text-success': selectedSpot.car,
                      'has-text-danger': !selectedSpot.car
                    }"
                    >{{ carAccess }}</span
                  >
                </p>
                <p>
                  Acesso especial:
                  <span
                    class="has-text-weight-bold"
                    :class="{
                      'has-text-success': selectedSpot.special_access,
                      'has-text-danger': !selectedSpot.special_access
                    }"
                    >{{ specialAccess }}</span
                  >
                </p>
                <p>
                  Tipo de praia:
                  <span
                    class="has-text-weight-bold"
                    :class="{
                      'has-text-success': selectedSpot.beach_type === 'Pública',
                      'has-text-danger': selectedSpot.beach_type === 'Privada'
                    }"
                    >{{ beachType }}</span
                  >
                </p>
                <p>
                  Tipo de acesso:
                  <span class="has-text-weight-bold">{{ accessTypes }}</span>
                </p>
              </div>
            </div>
            <div class="tile is-child">
              <div
                class="is-flex has-text-centered-touch"
                style="padding-top:0.75rem;padding-bottom:0.75rem;align-items:center;width:100%;height:100%;justify-content:center"
              >
                <div class="columns is-mobile" style="width:100%">
                  <div class="column">
                    <div class="columns is-vcentered">
                      <div class="column has-text-centered-mobile is-narrow">
                        <b-button
                          @click="goToMap"
                          type="is-primary"
                          icon-right="map-marker-alt"
                          rounded
                          outlined
                        />
                      </div>
                      <div
                        class="column has-text-centered-mobile has-text-tertiary has-text-weight-bold"
                      >
                        <p>COMO</p>
                        <p>CHEGAR</p>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="columns is-vcentered">
                      <div class="column has-text-centered-mobile is-narrow">
                        <b-button
                          type="is-primary"
                          icon-right="globe"
                          rounded
                          outlined
                        />
                      </div>
                      <div
                        class="column has-text-tertiary has-text-centered-mobile has-text-weight-bold"
                      >
                        <p>PASSEIO</p>
                        <p class="has-text-primary">360º</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child">
                <div>
                  <h5 class="title is-3 has-text-primary">Ondas</h5>
                  <p>
                    Qualidade das ondas:
                    <span>
                      <b-icon
                        type="is-warning"
                        :pack="fullStar(1)"
                        icon="star"
                        size="is-small"
                      />
                      <b-icon
                        type="is-warning"
                        :pack="fullStar(2)"
                        icon="star"
                        size="is-small"
                      />
                      <b-icon
                        type="is-warning"
                        :pack="fullStar(3)"
                        icon="star"
                        size="is-small"
                      />
                      <b-icon
                        type="is-warning"
                        :pack="fullStar(4)"
                        icon="star"
                        size="is-small"
                      />
                      <b-icon
                        type="is-warning"
                        :pack="fullStar(5)"
                        icon="star"
                        size="is-small"
                      />
                    </span>
                  </p>

                  <p>
                    Direção:
                    <span class="has-text-weight-bold">{{
                      waveDirections
                    }}</span>
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
                    <span class="has-text-weight-bold">{{
                      waveFrequencies
                    }}</span>
                  </p>
                </div>
                <div class="data-category">
                  <h5 class="title is-3 has-text-primary">Características</h5>
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
                    <span class="has-text-weight-bold">{{
                      bestTideMoves
                    }}</span>
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
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <div class="tile is-child">
                <div>
                  <h5 class="title is-3 has-text-primary">Comentários</h5>
                  <p >
                    <span class="has-text-weight-bold">Dia bom:</span>
                    <span class="has-text-justified" style="text-align:justify">{{ goodDay }}</span>
                  </p>
                  <p style="margin-top:0.6rem">
                    <span class="has-text-weight-bold">
                      Sobre o acesso:
                    </span>
                    <span class="has-text-justified" style="text-align:justify">{{ accessComment }}</span>
                  </p>
                </div>
                <div class="data-category">
                  <h5 class="title is-3 has-text-danger">Perigos</h5>
                  <b-tooltip
                    style="margin-right:1rem;"
                    :label="danger"
                    type="is-danger"
                    multilined
                    :delay="300"
                    v-for="danger in dangers"
                    :key="danger"
                  >
                    <b-tag type="is-danger" :ellipsis="true">{{
                      danger
                    }}</b-tag>
                  </b-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-modal v-if="currentSpot != null" :active.sync="openModal" has-modal-card>
      <GmapMap
        ref="gmap"
        :center="center"
        :zoom="15"
        map-type-id="terrain"
        style="width: 500px; height: 500px"
        
        :options="{
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true,
          disableDefaultUi: false
        }"
      >
        <directions-renderer
          :from="from"
          :to="destination"
          :options="directOpt"
        />
      </GmapMap>
    </b-modal>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ForecastHud from "@/components/ForecastHud";
import DirectionsRenderer from "@/components/DirectionsRenderer.js";
import SearchBar from "@/components/SearchBar";
import core from "../mixins/core";
import { mapState, mapActions } from "vuex";
export default {
  mixins: [core],
  components: {
    ForecastHud,
    Carousel,
    Slide,
    SearchBar,
    DirectionsRenderer
  },
  created() {
    // console.log("selecionando");
    // if (this.currentSpot == null) {
    //   const local_lat = localStorage.getItem("lat");
    //   const local_lng = localStorage.getItem("lng");
    //   if (local_lat !== null && local_lng !== null) {
    //     console.log("aqui");
    //     const loading = this.$buefy.loading.open();
    //     this.getNearestSpot({ lat: local_lat, lng: local_lng }).then(() => {
    //       this.collectData()
    //         .then(() => loading.close())
    //         .catch(() => {
    //           loading.close();
    //           this.$buefy.toast.open({
    //             duration: 4000,
    //             message: `Ops! Não foi possível carregar os dados, tente novamente.`,
    //             position: "is-bottom",
    //             type: "is-danger"
    //           });
    //         });
    //     });
    //   }
    // }
  },
  mounted() {
    this.selectedSpot = this.currentSpot;
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
      teste: " Não",
      selectedSpot: null,
      openModal: false,
      mapInstance: null,
      destination: {
        lat: -6.228080112986862,
        lng: -35.055503409432056
      },
      from: {
        lat: -6.232121410500793,
        lng: -35.04891850248146
      },
    };
  },
  methods: {
    ...mapActions("marine", ["getForecast"]),
    ...mapActions("weather", ["getWeather"]),
    ...mapActions("geo", ["getNearestSpot"]),
    spotSelected() {
      this.selectedSpot = this.currentSpot;
    },
    goToMap() {
      this.openModal = true;
    },
    collectData() {
      const lat = this.selectedSpot.lat;
      const lng = this.selectedSpot.lng;
      return Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ]);
    },
    fullStar(position) {
      return position <= this.waveQuality ? "fas" : "far";
    },
    openVideo(src) {
      this.$buefy.modal.open(`<figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360" src="${src}" frameborder="0" allowfullscreen></iframe>
        </figure>`);
    }
  },
  computed: {
    ...mapState("geo", ["currentSpot", "currentCity", "currentState"]),
    center(){
      return {lat: this.currentSpot.spot.lat, lng: this.currentSpot.spot.lng}
    },
    directOpt() {
      return {
        //directions: DirectionsResult,
        draggable: true,
        //infoWindow: InfoWindow,
        map: this.$refs.gmap
        //panel: Node (<div> to display directions steps),
        //routeIndex: int (index of route within DirectionsResult),
      };
    },
    cityAndState() {
      return `${this.currentCity.name} - ${this.currentState.abbreviation}`;
    },
    videos() {
      return this.selectedSpot ? this.selectedSpot.videos : [];
    },
    carAccess() {
      return this.selectedSpot.car ? "Sim" : "Não";
    },
    specialAccess() {
      return this.selectedSpot.special_access ? "Sim" : "Não";
    },
    beachType() {
      return this.selectedSpot.beach_type;
    },
    accessComment() {
      return this.selectedSpot.access_comment;
    },
    goodDay() {
      return this.selectedSpot.good_day_description;
    },
    timeOfYear() {
      return this.selectedSpot.time_of_year;
    },
    weekCrowd() {
      return this.selectedSpot.week_crowd;
    },
    weekendCrowd() {
      return this.selectedSpot.weekend_crowd;
    },
    waveQuality() {
      return this.selectedSpot.wave_quality;
    },
    waveLength() {
      return this.selectedSpot.wave_length;
    },
    waveStrength() {
      return this.selectedSpot.wave_strength;
    },
    accessTypes() {
      let types = [];
      if (this.selectedSpot.stairwell) {
        types.push("Escadaria");
      }
      if (this.selectedSpot.cliff) {
        types.push("Falésia");
      }
      if (this.selectedSpot.bay) {
        types.push("Beira Mar");
      }
      if (this.selectedSpot.trail) {
        types.push("Trilha");
      }
      if (this.selectedSpot.other_accesses !== "") {
        types.push(this.selectedSpot.other_accesses);
      }
      return types.join(" / ");
    },
    grounds() {
      let types = [];
      if (this.selectedSpot.rock) {
        types.push("Pedra");
      }
      if (this.selectedSpot.sand) {
        types.push("Areia");
      }
      if (this.selectedSpot.coral) {
        types.push("Coral");
      }
      return types.join(" / ");
    },
    bestTideMoves() {
      let types = [];
      if (this.selectedSpot.low) {
        types.push("Seca");
      }
      if (this.selectedSpot.high) {
        types.push("Cheia");
      }
      if (this.selectedSpot.ebb) {
        types.push("Secando");
      }
      if (this.selectedSpot.flood) {
        types.push("Enchendo");
      }
      return types.join(" / ");
    },
    waveDirections() {
      let types = [];
      if (this.selectedSpot.left) {
        types.push("Esquerda");
      }
      if (this.selectedSpot.right) {
        types.push("Direita");
      }
      return types.join(" / ");
    },
    surfLevels() {
      let types = [];
      if (this.selectedSpot.beginner) {
        types.push("Iniciante");
      }
      if (this.selectedSpot.intermediate) {
        types.push("Intermediário");
      }
      if (this.selectedSpot.expert) {
        types.push("Avançado");
      }
      return types.join(" / ");
    },
    waveFrequencies() {
      let types = [];
      if (this.selectedSpot.low_frequency) {
        types.push("Baixa");
      }
      if (this.selectedSpot.regular_frequency) {
        types.push("Regular");
      }
      if (this.selectedSpot.high_frequency) {
        types.push("Alta");
      }
      return types.join(" / ");
    },
    dangers() {
      let types = [];
      if (this.selectedSpot.current) {
        types.push("Correnteza");
      }
      if (this.selectedSpot.localism) {
        types.push("Localismo");
      }
      if (this.selectedSpot.boat) {
        types.push("Barcos");
      }
      if (this.selectedSpot.jetski) {
        types.push("Jet Ski");
      }
      if (this.selectedSpot.buoy) {
        types.push("Bóias");
      }
      if (this.selectedSpot.pollution) {
        types.push("Poluição");
      }
      if (this.selectedSpot.rocks) {
        types.push("Pedras");
      }
      if (this.selectedSpot.shark) {
        types.push("Tubarões");
      }
      if (this.selectedSpot.undertow) {
        types.push("Ressaca");
      }
      if (this.selectedSpot.other_dangers !== "") {
        types.push(this.selectedSpot.other_dangers);
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
  margin-top: 1.5rem;
}
.hero-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 1px 1px grey;
}
</style>
