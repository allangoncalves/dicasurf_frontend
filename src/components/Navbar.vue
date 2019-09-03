<template>
  <div class="has-background-black navbar">
    <b-navbar type="is-black" class="container">
      <template slot="brand">
        <b-navbar-item href="/">
          <img :src="mainLogo" alt="DicaSurf" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item v-for="route in routes" :key="route.name" tag="router-link" :to="route.name">{{ route.text }}</b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
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