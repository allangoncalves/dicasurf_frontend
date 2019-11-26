<template>
  <section class="section section-top section-bottom">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <b-icon
            custom-class="is-clickable"
            icon="chevron-left"
            size="is-small"
            pack="fas"
            @click="goBack"
          ></b-icon>
          <span
            class="has-text-primary is-clickable is-uppercase has-text-weight-bold"
            @click="goBack"
            >Voltar</span
          >
        </div>
        <div class="column is-narrow">
          <p
            class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
          >
            alterar senha
          </p>
        </div>
        <div class="column has-text-right"></div>
      </div>
      <hr style="border: 1px solid #0075bb" />
      <div class="is-flex" style="justify-content:center;padding-top:1rem">
        <div style="width:300px" class="has-text-centered">
          <b-field
            label="Nova senha"
            label-position="inside"
            :type="{ 'is-danger': this.pw_msg.length > 0 }"
            :message="pw_msg"
          >
            <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="Digite sua senha"
            ></b-input>
          </b-field>
          <b-field
            label="Confirmar"
            label-position="inside"
            :type="{ 'is-danger': this.confirmation_msg.length > 0 }"
            :message="confirmation_msg"
          >
            <b-input
              type="password"
              v-model="password_confirmation"
              password-reveal
              placeholder="Confirme sua senha"
            ></b-input>
          </b-field>
          <b-button @click="submit" size="is-medium" type="is-primary"
            >SALVAR ALTERAÇŌES</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      password: "",
      password_confirmation: "",
      pw_msg: [],
      confirmation_msg: []
    };
  },
  methods: {
    ...mapActions("auth", ["changePassword"]),
    goBack() {
      this.$router.go(-1);
    },
    submit() {
      this.changePassword({
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(() => {
          this.pw_msg = [];
          this.confirmation_msg = [];
          this.$buefy.toast.open({
            duration: 4000,
            message: `Senha alterada com sucesso.`,
            position: "is-top",
            type: "is-primary"
          });
          this.$router.go(-1);
        })
        .catch(res => {
          if (res.response) {
            let msgs = res.response.data;
            if (msgs.new_password1 != null) {
              this.pw_msg = res.response.data.new_password1;
            } else {
              this.pw_msg = [];
            }
            if (msgs.new_password2 != null) {
              this.confirmation_msg = res.response.data.new_password2;
            } else {
              this.confirmation_msg = [];
            }
          }
        });
    }
  }
};
</script>
