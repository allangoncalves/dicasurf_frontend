<template>
  <section>
    <b-modal :active.sync="sentinel" has-modal-card>
      <div class="modal-card has-background-tertiary" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-field
            label="Email"
            :type="{'is-danger': messages.email.length > 0 || geralMessage.length > 0}"
            :message="messages.email"
          >
            <b-input v-model="email" placeholder="Seu Email"></b-input>
          </b-field>

          <b-field
            label="Senha"
            :message="geralMessage"
            :type="{'is-danger': geralMessage.length > 0}"
          >
            <b-input type="password" v-model="password" password-reveal placeholder="Sua Senha"></b-input>
          </b-field>
          <p
            class="has-text-primary is-size-7"
            @click="goToAccountCreation"
          >Não tem uma conta? Crie a sua!</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$emit('close')">Fechar</button>
          <button class="button is-primary" @click="tryLogin(email, password)">Entrar</button>
        </footer>
      </div>
    </b-modal>
    <!-- <button
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
    >Launch component modal</button>-->
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
      this.messages = Object.assign({}, this.messages, {
        password: [],
        email: [],
        non_field_errors: []
      });

      this.login({ email, password })
        .then(() => {
          this.$emit("close");
        })
        .catch(err => {
          console.log(err);
          this.messages = Object.assign({}, this.messages, err);
        });
    },
    goToAccountCreation() {
      this.$emit("close");
      this.$router.push("/nova");
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


