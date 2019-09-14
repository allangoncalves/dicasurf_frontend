<template>
  <div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { mapActions } from 'vuex';

export default {
  mounted(){
    this.getForecast({ lat: -6.222, lng: -35.07, hourTick:1 });
    this.getWeather({ lat: -6.222, lng: -35.07 });
  },
  components: {
    Footer,
    Navbar
  },
  methods: {
    ...mapActions(["getForecast", "getWeather"])
  }
};
</script>

<style lang="scss" scoped>
.teste {
  margin-top: -90px;
}
</style>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Disable the widescreen breakpoint
// $widescreen-enabled: false;

// Disable the fullhd breakpoint
// $fullhd-enabled: false;

$primary: #0075bb;
$primary-invert: #222221;
$secondary: #222221;
$secondary-invert: findColorInvert($secondary);
$tertiary: #343434;
$tertiary-invert: findColorInvert($tertiary);
$footer-background-color: $secondary;

$section-padding: 0rem 1.5rem 0rem 1.5rem;

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

// 
$family-primary: 'Montserrat';

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>