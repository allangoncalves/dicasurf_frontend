<template>
  <section class="section-top section-bottom">
    <div class="container">
      <div>
        <p
          class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
        >
          login
        </p>
        <hr style="border: 1px solid #0075bb" />
      </div>
      <div class="is-flex" style="justify-content:center">
        <div style="min-width:300px;width:300px">
          <b-field
            label="Email"
            :type="{
              'is-danger': messages.email.length > 0 || geralMessage.length > 0
            }"
            :message="messages.email"
          >
            <b-input v-model="email" placeholder="Seu Email"></b-input>
          </b-field>

          <b-field
            label="Senha"
            :message="geralMessage"
            :type="{ 'is-danger': geralMessage.length > 0 }"
          >
            <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="Sua Senha"
            ></b-input>
          </b-field>
        </div>
      </div>

      <div class="has-text-centered" style="margin-top:1rem">
        <b-button
          class="button is-primary"
          size="is-medium"
          @click="tryLogin(email, password)"
          >Entrar</b-button
        >
        <p
          class="has-text-primary is-size-7 is-clickable"
          @click="goToPasswordReset"
          style="margin-top:1rem"
        >
          Esqueceu sua senha?
        </p>
        <p
          class="has-text-primary is-size-7 is-clickable"
          @click="goToAccountCreation"
        >
          Não tem uma conta? Crie a sua!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    isOpen: { default: false, type: Boolean }
  },
  data() {
    return {
      email: "",
      password: "",
      messages: {
        password: [],
        email: [],
        non_field_errors: []
      }
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    tryLogin(email, password) {
        const loading = this.$buefy.loading.open();
      this.messages = Object.assign({}, this.messages, {
        password: [],
        email: [],
        non_field_errors: []
      });

      this.login({ email, password })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(err => {
          this.messages = Object.assign({}, this.messages, err);
        }).finally(() => loading.close());
    },
    goToAccountCreation() {
      this.$router.push("/nova");
    },
    goToPasswordReset() {
      this.$router.push("/esquecisenha");
    }
  },
  computed: {
    geralMessage() {
      const other_errors = this.messages.non_field_errors;
      return other_errors.length > 0 ? other_errors : this.messages.password;
    },
    sentinel: {
      get() {
        return this.isOpen;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  }
};
</script>
