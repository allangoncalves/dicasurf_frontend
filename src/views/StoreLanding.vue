<template>
  <div class="bg-img">
    <b-icon
      icon="arrow-left"
      type="is-primary"
      size="is-large"
      class="back-button"
      @click.native="goToHome"
    >
    </b-icon>
    <div class="container is-flex content">
      
        <div class="columns is-multiline">
          <div class="column is-full">
            <p
              class="title is-size-3-mobile is-size-1-tablet is-uppercase has-text-right-tablet has-text-centered-mobile"
              style="margin-bottom:0.3rem"
            >
              estamos <br /><span class="has-text-primary has-text-weight-bold">
                chegando
              </span>
            </p>
            <p class="has-text-right-tablet has-text-centered-mobile">
              Deixe seu email e
              <span class="has-text-weight-bold"> ganhe 10% de desconto</span>
              na primeira compra!
            </p>
          </div>
          <div class="column is-full">
            
              <div class="columns">
                <div class="column is-2 is-offset-5">
                  <div
                    class="has-background-primary has-text-white is-flex"
                  >
                    <p
                      class="has-text-weight-bold is-uppercase"
                      style="text-align:center"
                    >
                      fique por dentro
                    </p>
                  </div>
                </div>
                <div class="column is-5">
                  <b-field>
                    <b-input expanded size="is-medium" placeholder="Email">
                    </b-input>
                    <p class="control">
                      <button style="height:100%" class="button is-white">
                        OK
                      </button>
                    </p>
                  </b-field>
                </div>
              </div>
            

            <div></div>
          </div>
          <div class="column is-full">b</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToHome() {
      console.log("eae");
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  align-items: center;
  height: 100%;
}
.back-button {
  position: fixed;
  top: 0;
  left: 0;
  margin: 1.5rem;
  cursor: pointer;
}
.bg-img {
  background-image: url("../assets/images/store_landing_bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
