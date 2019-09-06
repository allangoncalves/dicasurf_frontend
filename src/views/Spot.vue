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
          <div class="tile is-vertical is-parent is-8">
            <div class="tile is-child">
              <div
                class="columns is-vcentered is-centered is-mobile has-background-primary box is-paddingless"
              >
                <div class="column is-3 has-text-secondary has-text-weight-bold">
                  <p class>NOSSOS PICOS</p>
                </div>
                <div class="column is-9">
                  <b-field>
                    <b-select
                      class="is-pulled-right select"
                      placeholder="Selecione um pico"
                      icon="search"
                    >
                      <option v-for="option in data" :value="option" :key="option">{{ option }}</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="tile is-child">
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
            <div class="tile is-child">
              <p class="title">MADEIRO</p>
              <p class="subtitle">Tibau do Sul - RN</p>
              <div
                class="has-background-secondary is-marginless"
                style="max-height:0.7em;height:0.2em"
              ></div>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child">
              <div class="is-paddingless">
                <forecast-hud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor section-bottom">
          <div class="tile is-vertical is-parent">
            <div class="tile is-child">
              <div>
                <h5 class="title is-4 is-marginless has-text-primary">Acesso</h5>
                <p>
                  Acesso de carro:
                  <span
                    :class="{'is-success': isCar, 'is-danger':!isCar}"
                  >{{ access }}</span>
                </p>
                <p>
                  Acesso especial:
                  <span
                    :class="{'is-success': isSpecial, 'is-danger':!isSpecial}"
                  >{{ specialAccess }}</span>
                </p>
                <p>
                  Tipo de praia:
                  <span
                    :class="{'is-success': isPublic, 'is-danger':!isPublic}"
                  >{{ beachType }}</span>
                </p>
                <p>
                  Tipo de acesso:
                  <span class="has-text-weight-bold">{{ accessType }}</span>
                </p>
              </div>
              <div class="data-category">
                <h5 class="title is-4 is-marginless has-text-primary">Características</h5>
                <p>
                  Fundo:
                  <span>{{ }}</span>
                </p>
                <p>
                  Melhor época do ano:
                  <span>{{ }}</span>
                </p>
                <p>
                  Melhor Movimento da Maré:
                  <span>{{ }}</span>
                </p>
                <p>
                  Crowd da semana:
                  <span>{{ }}</span>
                </p>
                <p>
                  Crowd do final de semana:
                  <span>{{ }}</span>
                </p>
              </div>
              <div class="data-category">
                <h5 class="title is-4 is-marginless has-text-primary">Ondas</h5>
                <p>
                  Qualidade das ondas:
                  <span>
                    <b-icon type="is-secondary" :pack="fullStar(1)" icon="star" size="is-small" />
                    <b-icon type="is-secondary" :pack="fullStar(2)" icon="star" size="is-small" />
                    <b-icon type="is-secondary" :pack="fullStar(3)" icon="star" size="is-small" />
                    <b-icon type="is-secondary" :pack="fullStar(4)" icon="star" size="is-small" />
                    <b-icon type="is-secondary" :pack="fullStar(5)" icon="star" size="is-small" />
                  </span>
                </p>
                <p>
                  Direção:
                  <span>{{ }}</span>
                </p>
                <p>
                  Nivel do surf:
                  <span>{{ }}</span>
                </p>
                <p>
                  Comprimento das ondas:
                  <span>{{ }}</span>
                </p>
                <p>
                  Força:
                  <span>{{ }}</span>
                </p>
                <p>
                  Frequência das ondas:
                  <span>{{ }}</span>
                </p>
              </div>
              <div class="data-category">
                <h5 class="title is-4 is-marginless has-text-danger">Perigos</h5>
                <p>lorem ipsum</p>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <img class="main-img" src="https://bulma.io/images/placeholders/128x128.png" alt />
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
            <carousel :per-page="3" :navigationEnabled="true" :paginationEnabled="false">
              <slide>
                <div class="has-text-centered">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </div>
              </slide>
              <slide>
                <div class="has-text-centered">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </div>
              </slide>
              <slide>
                <div class="has-text-centered">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </div>
              </slide>
              <slide>d</slide>
              <slide>e</slide>
              <slide>f</slide>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ForecastHud from "@/components/ForecastHud";
export default {
  components: {
    ForecastHud,
    Carousel,
    Slide
  },
  data() {
    return {
      isCar: true,
      isSpecial: true,
      isPublic: true,
      waveQuality: 3,
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
    fullStar(position) {
      return position <= this.waveQuality ? "fas" : "far";
    }
  },
  computed: {
    access() {
      return `${this.spot.access}`;
    },
    specialAccess() {
      return `${this.spot.access}`;
    },
    beachType() {
      return `${this.spot.access}`;
    },
    accessType() {
      return `${this.spot.access}`;
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