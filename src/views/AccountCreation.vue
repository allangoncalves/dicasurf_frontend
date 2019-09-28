<template>
  <section class="section is-medium">
    <div class>
      <div class="container">
        <b-tag type="is-tertiary" size="is-large">Novo Usuário</b-tag>
        <div
          class="column is-full has-background-tertiary is-paddingless"
          style="max-height:0.2em;height:0.2em;width:100%;margin-top:0.3rem;margin-bottom:2rem"
        ></div>
        <div class="columns is-multiline">
          <div class="column is-7">
            <div class="columns is-multiline">
              <div class="column is-full">
                <b-field
                  label="Nome"
                  custom-class="is-label"
                  :type="{'is-danger': messages.first_name.length > 0}"
                  :message="messages.first_name"
                  horizontal
                >
                  <b-input
                    v-model="first_name"
                    size="is-medium"
                    expanded
                    custom-class="input-color"
                  ></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field
                  label="Sobrenome"
                  :type="{'is-danger': messages.last_name.length > 0}"
                  :message="messages.last_name"
                  horizontal
                >
                  <b-input v-model="last_name" size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field
                  label="E-mail"
                  :type="{'is-danger': messages.email.length > 0}"
                  :message="messages.email"
                  horizontal
                >
                  <b-input v-model="email" size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field
                  label="Senha"
                  :type="{'is-danger': messages.password.length > 0}"
                  :message="messages.password"
                  horizontal
                >
                  <b-input
                    size="is-medium"
                    type="password"
                    v-model="password"
                    password-reveal
                    expanded
                    custom-class="input-color"
                  ></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field label="Confirmar senha" horizontal>
                  <b-input
                    size="is-medium"
                    type="password"
                    v-model="password_confirmation"
                    password-reveal
                    expanded
                    custom-class="input-color"
                  ></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field
                  label="Apelido"
                  :type="{'is-danger': profile.nickname.length > 0}"
                  :message="profile.nickname"
                  horizontal
                >
                  <b-input v-model="nickname" size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns is-multiline">
              <div class="column is-full">
                <b-field
                  label="País"
                  :type="{'is-danger': profile.country.length > 0}"
                  :message="profile.country"
                  horizontal
                >
                  <b-input v-model="country" size="is-medium" expanded custom-class="input-grey"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field
                  label="Estado"
                  :type="{'is-danger': profile.state.length > 0}"
                  :message="profile.state"
                  horizontal
                >
                  <b-input v-model="state" size="is-medium" expanded custom-class="input-grey"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field
                  label="Cidade"
                  :type="{'is-danger': profile.city.length > 0}"
                  :message="profile.city"
                  horizontal
                >
                  <b-input v-model="city" size="is-medium" expanded custom-class="input-grey"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field
                  label="Localidade"
                  :type="{'is-danger': profile.address.length > 0}"
                  :message="profile.address"
                  horizontal
                >
                  <b-input v-model="address" size="is-medium" expanded custom-class="input-grey"></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column is-7">
            <b-field label="Sexo" horizontal>
              <div class="block">
                <b-radio v-model="radio" name="Masculino" native-value="Masculino">Masculino</b-radio>
                <b-radio v-model="radio" name="Feminino" native-value="Feminino">Feminino</b-radio>
              </div>
            </b-field>
          </div>
          <div class="column is-7" style="padding-bottom:0px;padding-top:0px">
            <b-field label="News" horizontal>
              <b-checkbox
                v-model="news"
                name="Basico"
              >Deseja receber notícias e previsões do Dica SURF por e-mail?</b-checkbox>
            </b-field>
            <div style="align-items:center;display:flex;">
              <p class="has-text-weight-bold is-label is-hidden-mobile" style="margin-right:1rem"></p>
            </div>
          </div>
          <div class="column is-7" style="padding-top:0px">
            <b-field label="Termos" horizontal>
              <b-checkbox name="Basico" v-model="terms">
                Concordo com as
                <span @click.stop class="has-text-primary">regras de uso do Dica SURF</span>
              </b-checkbox>
            </b-field>
          </div>
          <div class="column has-text-right" style="margin-bottom:2rem">
            <b-button @click="createForm" size="is-medium" type="is-primary">Enviar</b-button>
          </div>
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
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
      nickname: "",
      country: "",
      state: "",
      city: "",
      address: "",
      radio: "Feminino",
      news: false,
      terms: false,
      messages: {
        email: [],
        first_name: [],
        last_name: [],
        password: []
      },
      profile: {
        name: [],
        nickname: [],
        country: [],
        state: [],
        city: [],
        address: [],
        sex: [],
        news: [],
        terms: []
      }
    };
  },
  methods: {
    ...mapActions(["registerUser", "login"]),
    createForm() {
      this.messages = Object.assign({}, this.messages, {
        email: [],
        first_name: [],
        last_name: [],
        password: []
      });
      this.profile = Object.assign({}, this.profile, {
        name: [],
        nickname: [],
        country: [],
        state: [],
        city: [],
        address: [],
        sex: [],
        news: [],
        terms: []
      });
      this.registerUser({
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        profile: {
          name: `${this.first_name} ${this.last_name}`,
          nickname: this.nickname,
          country: this.country,
          state: this.state,
          city: this.city,
          address: this.address,
          sex: this.radio,
          news: this.news,
          terms: this.terms
        }
      })
        .then(() => {
          this.login({ email: this.email, password: this.password });
          this.$router.push("/");
        })
        .catch(err => {
          if (err.response) {
            this.messages = Object.assign({}, this.messages, err.response.data);
            this.profile = Object.assign(
              {},
              this.profile,
              err.response.data.profile
            );
          }
        });
    },
    createUser() {}
  }
};
</script>

<style lang="scss" scoped>
.is-label {
  display: flex;
  align-items: center;
  max-width: 100px;
  text-align: right;
}
</style>
<style lang="scss">
.field-label {
  align-items: center;
}
.control.has-icons-right .icon {
  color: grey !important;
}
.input-color.input {
  background-color: #d7d7d7;
}
.input-grey.input {
  background-color: grey;
}
</style>