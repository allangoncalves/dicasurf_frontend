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
        <b-navbar-item tag="div">
          <div
            class="columns is-multiline has-text-centered has-background-black box is-paddingless"
          >
            <div @click="isLogged = true" class="column is-full">
              <b-icon icon="user-circle" type="is-primary" size="is-medium" pack="fas"></b-icon>
            </div>
            <div class="column is-full" style="padding-top:0rem">
              <b-button
                size="is-small"
                icon-right="lock"
                type="is-primary"
                outlined
                @click="openModal"
                v-if="!isLogged"
              >Login</b-button>
              <p class="has-text-primary" v-if="isLogged">Olá, <span>Allan</span></p>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <login-modal :isOpen.sync="modalOpen" @close="modalOpen = false"/>
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal";
export default {
  components: {
    LoginModal
  },
  data() {
    return {
      mainLogo: require("@/assets/images/logo_nome_horizontal.png"),
      routes: [
        { text: "Previsão", name: "/previsao" },
        { text: "Picos", name: "/picos" },
        { text: "News", name: "/news" }
      ],
      modalOpen: false,
      isLogged: false
    };
  },
  methods: {
    openModal(){
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