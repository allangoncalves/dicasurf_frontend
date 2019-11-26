<template>
  <div>
    <b-navbar fixed-top wrapper-class="container" type="is-tertiary">
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <img :src="mainLogo" alt="DicaSurf" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          v-for="route in routes"
          :key="route.name"
          tag="router-link"
          :to="route.name"
        >{{ route.text }}</b-navbar-item>
        <b-navbar-item tag="router-link" to="/login"  v-if="!isLogged">
          <div class="columns is-vcentered is-clickable is-mobile has-text-primary-mobile">
            <div class="column is-narrow has-text-primary-mobile">
              <b-icon icon="user-circle"  size="is-small" pack="fas"></b-icon>
            </div>
            <div class="column" style="padding-left:0rem">
              <p>Login</p>
            </div>
          </div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/perfil"  v-if="isLogged">
          <div class="columns is-vcentered is-clickable is-mobile has-text-primary-mobile">
            <div class="column is-narrow has-text-primary-mobile">
              <b-icon icon="user-circle" size="is-small" pack="fas"></b-icon>
            </div>
            <div class="column" style="padding-left:0rem">
              <p>Acessar Perfil</p>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <login-modal :isOpen.sync="modalOpen" @close="modalOpen = false" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    LoginModal
  },
  data() {
    return {
      mainLogo: require("@/assets/icons/logo_top.svg"),
      routes: [
        { text: "Tábua de Maré", name: "/tabua" },
        { text: "Picos", name: "/picos" },
        { text: "Boa Onda", name: "/boaonda"},
        { text: "Parceiros", name: "/parceiros"},
        { text: "News", name: "/news" },
        
      ],
      modalOpen: false
    };
  },
  computed: {
    ...mapState("auth", ["user", "isLogged"])
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    openModal() {
      this.modalOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.transparent {
  opacity: 0.5;
}
</style>