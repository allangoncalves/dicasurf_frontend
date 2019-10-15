<template>
  <div>
    <Navbar />
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>


<script>
const DEFAULT_TRANSITION = "fade";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      transitionName: DEFAULT_TRANSITION
    };
  },
  beforeCreate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("lng", position.coords.longitude);
      });
    }
  },
  created() {
    const loading = this.$buefy.loading.open();
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.meta.id
        const fromDepth = from? from.meta.id : 0
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
    this.getStates()
      .then(() => {
        loading.close();
      })
      .catch((res) => {
        console.log(res);
        loading.close();
        this.$buefy.toast.open({
          duration: 4000,
          message: `Ops! Não foi possível carregar os dados, tente novamente.`,
          position: "is-bottom",
          type: "is-danger"
        });
      });
  },
  components: {
    Footer,
    Navbar
  },
  methods: {
    ...mapActions("geo", ["getStates"])
  }
};
</script>

<style lang="scss" scoped>
.teste {
  margin-top: -90px;
}
</style>

<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

// BULMA
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
$dica-green: #2c9a7c;
$dica-green-invert: findColorInvert($dica-green);
$dica-grey: #9b887a;
$dica-grey-invert: findColorInvert($dica-grey);
$footer-background-color: $secondary;

$section-padding: 0rem 1.5rem 0rem 1.5rem;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "dicagreen": (
    $dica-green,
    $dica-green-invert
  ),
  "dicagrey": (
    $dica-grey,
    $dica-grey-invert
  ),
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
$family-primary: "Montserrat";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>