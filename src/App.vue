<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Footer,
    Navbar
  },
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

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

