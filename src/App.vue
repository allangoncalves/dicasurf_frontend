<template>
  <div>
    <Navbar />
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
      name: "",
      selected: null
    };
  },
  computed: {
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
$primary-invert: findColorInvert($primary);
$footer-background-color: #222221;


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

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style lang="scss" scoped>
.hero-img {
  background-image: url("./assets/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

