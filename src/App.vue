<template>
  <div>
    <section class="hero hero-img is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <Navbar />
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body container">
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

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot"></div>
    </section>
    <section class="container">
      <div class="columns is-centered">
        <div class="column is-7 has-background-primary search box">
          <div class="columns is-vcentered is-centered is-mobile">
            <div class="column">
              <p class="has-text-secondary ">NOSSOS PICOS</p>
            </div>
            <div class="column">
              <b-select class="is-pulled-right" placeholder="Selecione um pico" icon="search"></b-select>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child">
            <p class="title">MADEIRO</p>
            <p class="subtitle">Tibau do Sul - RN</p>
            <div>
              <h5 class="title is-4 is-marginless">Acesso:</h5>
              <p>{{ access }}</p>
              <p>{{ specialAccess }}</p>
              <p>{{ beachType }}</p>
              <p>{{ accessType }}</p>
            </div>
            <div>
              <h5 class="title is-4 is-marginless">Acesso:</h5>
              <p>{{ access }}</p>
              <p>{{ specialAccess }}</p>
              <p>{{ beachType }}</p>
              <p>{{ accessType }}</p>
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
  computed: {
    access() {
      return `Acesso de carro: ${this.spot.access}`;
    },
    specialAccess() {
      return `Acesso especial: ${this.spot.access}`;
    },
    beachType() {
      return `Tipo de praia: ${this.spot.access}`;
    },
    accessType() {
      return `Tipo de acesso: ${this.spot.access}`;
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

.hero-img {
  background-image: url("./assets/images/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

