<template>
  <div>
    <section class="hero hero-img is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <Navbar />
      </div>

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
    <section class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <div class="tile is-child">
            <div
              class="columns is-vcentered is-centered is-mobile has-background-primary box is-paddingless"
            >
              <div class="column is-7 has-text-secondary has-text-weight-bold">
                <p class>NOSSOS PICOS</p>
              </div>
              <div class="column is-5">
                <b-field>
                  <b-select
                    class="is-pulled-right select"
                    placeholder="Selecione um pico"
                    icon="search"
                  ></b-select>
                </b-field>
              </div>
            </div>
          </div>
          <div class="tile is-child">
            <div class="columns">
              <div class="column is-half">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered-mobile is-2">
                    <b-icon type="is-danger" icon="map-marker-alt" size="is-large"></b-icon>
                  </div>
                  <div
                    class="column has-text-centered-mobile is-1 has-text-primary has-text-weight-bold"
                  >
                    <p>Como Chegar</p>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered-mobile is-2">
                    <b-icon type="is-success" icon="globe" size="is-large"></b-icon>
                  </div>
                  <div
                    class="column is-1 has-text-primary has-text-centered-mobile has-text-weight-bold"
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
          </div>

          <div class="tile is-child is-vcentered">
            <div class="has-background-secondary" style="max-height:0.7em;height:0.2em"></div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="columns is-paddingless is-vcentered is-centered is-mobile box">
              <!-- <figure class="image">
                
              </figure>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-5 is-vertical is-parent">
            <div class="tile is-child">
              <div class="data-category">
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
                <p> lorem ipsum </p>
              </div>
            </div>
          </div>
          <div class="tile is-6 is-parent">
            <div class="tile is-child">
              <p class="title">Three</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero has-background-tertiary is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column"></div>
            <div class="column">
              <p class="title is-5 has-text-primary">Sobre</p>
              <div
                class="subtitle is-5 has-background-primary is-paddingless"
                style="max-height:0.2em;height:0.2em"
              />
              <p class="has-text-white">A Dica SURF</p>
              <p class="has-text-white">Dicas</p>
              <p class="has-text-white">Picos</p>
              <p class="has-text-white">Life Style</p>
            </div>
            <div class="column">
              <p class="title is-5 has-text-primary">Mídia</p>
              <div
                class="subtitle is-5 has-background-primary is-paddingless"
                style="max-height:0.2em;height:0.2em"
              />
              <p class="has-text-white">Eventos</p>
              <p class="has-text-white">Vídeos</p>
              <p class="has-text-white">Download</p>
              <p class="has-text-white">Life Style</p>
            </div>
            <div class="column">
              <p class="title is-5 has-text-primary">Contato</p>
              <div
                class="subtitle is-5 has-background-primary is-paddingless"
                style="max-height:0.2em;height:0.2em"
              />
              <p class="has-text-white">Fale conosco</p>
              <p class="has-text-white">Trabalhe conosco</p>
            </div>
            <div class="column">
              <p class="title is-5 has-text-primary">Redes Sociais</p>
              <div
                class="subtitle is-5 has-background-primary is-paddingless"
                style="max-height:0.2em;height:0.2em"
              />
              <div class="columns">
                <div class="column is-2">
                  <b-button
                    type="is-white has-text-secondary"
                    icon-right="instagram"
                    icon-pack="fab"
                  />
                </div>
                <div class="column is-2">
                  <b-button
                    type="is-white has-text-secondary"
                    icon-right="facebook"
                    icon-pack="fab"
                  />
                </div>
                <div class="column is-2">
                  <b-button
                    type="is-white has-text-secondary"
                    icon-right="whatsapp"
                    icon-pack="fab"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>


<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
  components: {
    Footer,
    Navbar
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

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #0075bb;
$primary-invert: #222221;
$secondary: #222221;
$secondary-invert: findColorInvert($secondary);
$tertiary: #343434;
$tertiary-invert: findColorInvert($tertiary);
$footer-background-color: $secondary;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "secondary": (
    $secondary,
    $secondary-invert
  ),
  "tertiary": (
    $tertiary,
    $tertiary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  )
);

// Footer size needs to be set before bulma import
$footer-padding: 1.5rem;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style lang="scss" scoped>
.search {
  font-weight: bolder;
}

.data-category{
  margin-top: 1.2rem;
}

.hero-img {
  background-image: url("./assets/images/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
</style>

