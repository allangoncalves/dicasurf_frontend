<template>
  <div>
    <b-navbar wrapper-class="container navbar has-background-tertiary" type="is-tertiary">
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
          <div class="columns is-multiline has-text-centered has-background-black box is-paddingless">
            <div class="column is-full">
              <b-icon icon="user-circle" type="is-primary" size="is-medium" pack="fas"></b-icon>
            </div>
            <div class="column is-full" style="padding-top:0rem">
              <b-button size="is-small" tag="router-link" icon-right="lock" to="/login" type="is-primary" outlined>Login</b-button>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainLogo: require("@/assets/images/logo_nome_horizontal.png"),
      routes: [
        { text: "Previsão", name: "/previsao" },
        { text: "Picos", name: "/picos" },
        { text: "News", name: "/news" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  opacity: 0.9;
}
</style>