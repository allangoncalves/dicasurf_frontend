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
          <div class="columns is-multiline">
            <div class="column is-2 is-offset-5" style="padding:1.5rem">
              <div
                class="has-background-primary has-text-white has-text-centered"
              >
                <p
                  class="has-text-weight-bold is-uppercase"
                  style="text-align:center"
                >
                  fique por dentro
                </p>
              </div>
            </div>
            <div class="column is-5" style="padding:1.5rem">
              <b-field>
                <b-input
                  expanded
                  size="is-medium"
                  placeholder="Email"
                  v-model="email"
                >
                </b-input>
                <p class="control">
                  <button
                    style="height:100%"
                    class="button is-white"
                    @click="register"
                  >
                    OK
                  </button>
                </p>
              </b-field>
              <p
                v-for="(message, index) in messages"
                :key="index"
                :class="{
                  'has-text-primary': success,
                  'has-text-danger': !success
                }"
              >
                {{ message }}
              </p>
            </div>
            <div
              class="column is-full has-text-centered-mobile has-text-right-tablet"
              style="padding:1.5rem"
            >
              <img src="@/assets/images/logo_horizontal_blue.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["registerEarlyUser"]),
    goToHome() {
      this.$router.replace("/");
    },
    register() {
      this.messages = [];
      this.success = false;
      this.registerEarlyUser({ email: this.email })
        .then(() => {
          this.success = true;
          this.messages = ["*Enviado com sucesso."];
          
        })
        .catch(err => {
          if (err.response) {
            this.success = false;
            this.messages = err.response.data.email;
            
          }
        });
    }
  },
  data() {
    return {
      email: "",
      messages: [],
      success: true
    };
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
