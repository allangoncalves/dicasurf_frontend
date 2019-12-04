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
export default {
  data() {
    return {
      transitionName: DEFAULT_TRANSITION
    };
  },
  components: {
    Footer,
    Navbar
  }
};
</script>
