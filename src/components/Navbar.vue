<template>
  <nav class="navbar has-background-black has-text-light">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="" alt="DicaSurf" />
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item is-tab is-active">Previsão</a>
          <a class="navbar-item is-tab">Picos</a>
          <a class="navbar-item is-tab">News</a>
          <div class="navbar-item columns is-multiline is-centered">
            <div class="column is-full has-text-centered">
              <b-icon icon="account-circle" size="is-medium" type="is-primary"></b-icon>
            </div>
            <div class="column is-full has-text-centered">
              <b-button size="is-small" icon-right="lock">Login</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  opacity: 0.8;
}
</style>