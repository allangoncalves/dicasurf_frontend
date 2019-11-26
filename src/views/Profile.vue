<template>
  <div class="container">
    <section class="section-top section-bottom">
      <div class="columns">
        <div class="column is-clickable" @click="logoutAndGoToHome">
          <div
            class="is-flex"
            style="align-items:flex-end;justify-content:center;height:100%"
          >
            <p class="has-text-primary title is-5 is-uppercase">
              Sair da conta
            </p>
          </div>
        </div>
        <div class="column is-clickable" @click="goToPasswordChange">
          <div
            class="is-flex"
            style="align-items:flex-end;justify-content:center;height:100%"
          >
            <p class="has-text-primary title is-5 is-uppercase">
              Alterar senha
            </p>
          </div>
        </div>
        <div
          class="column is-clickable has-background-primary"
          style="border-radius: 10px 10px 0px 0px;margin-left:0.8rem"
        >
          <div
            class="is-flex"
            style="align-items:flex-end;justify-content:center;height:100%"
          >
            <p class="has-text-white title is-5 is-uppercase">meus dados</p>
          </div>
        </div>
        <div class="column is-4 has-text-right-desktop has-text-centered-touch">
          <p
            class="has-text-weight-bold title is-3 is-uppercase has-text-primary"
          >
            meu perfil
          </p>
        </div>
      </div>
      <hr style="border: 1px solid #0075bb;margin-top:0px" />
      <div class="tile">
        <div class="tile is-5">
          <div
            class="is-flex"
            style="justify-content:center;width:100%"
          >
            <b-field class="file">
              <b-upload v-model="file">
                <figure class="image is-128by128 is-clickable">
                  <img
                    src="https://bulma.io/images/placeholders/256x256.png"
                    style="border-radius:50%"
                  />
                  <p
                    class="has-text-centered is-uppercase has-text-weight-bold"
                    style="margin-top:0.7rem"
                  >
                    alterar foto
                  </p>
                </figure>
              </b-upload>
            </b-field>
          </div>
        </div>
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <b-field
                label="Email"
                label-position="on-border"
                :type="{ 'is-danger': this.emailMessage.length > 0 }"
                :message="emailMessage"
              >
                <b-input v-model="email"></b-input>
              </b-field>
            </div>
            <div class="tile is-child">
              <b-field label="Nome" label-position="on-border">
                <b-input v-model="name"></b-input>
              </b-field>
            </div>
            <div class="tile is-child">
              <b-field label="Sobrenome" label-position="on-border">
                <b-input v-model="last_name"></b-input>
              </b-field>
            </div>
            <div class="tile is-child">
              <b-field label="Apelido" label-position="on-border">
                <b-input v-model="nickname"></b-input>
              </b-field>
            </div>
            <div class="tile is-child">
              <b-checkbox v-model="news" name="Basico"
                >Desejo receber notícias e previsões do Dica SURF por
                e-mail</b-checkbox
              >
            </div>
            <div class="tile is-child">
              <div class="is-flex" style="justify-content:flex-end">
                <div class="block" style="margin-right:1rem">
                  <p class="has-text-weight-bold">Sexo:</p>
                </div>
                <div class="block">
                  <b-radio
                    v-model="sex"
                    name="Masculino"
                    native-value="Masculino"
                    >Masculino</b-radio
                  >
                  <b-radio v-model="sex" name="Feminino" native-value="Feminino"
                    >Feminino</b-radio
                  >
                </div>
              </div>
            </div>
            <div class="tile is-child">
              <div class="has-text-right">
                <b-button @click="submit" size="is-medium" type="is-primary"
                  >SALVAR ALTERAÇŌES</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.loadUser();
  },
  data() {
    return {
      file: null,
      selectedTab: true,
      name: "",
      last_name: "",
      email: "",
      nickname: "",
      news: false,
      sex: null,
      emailMessage: []
    };
  },
  methods: {
    ...mapActions("auth", ["getUserData", "updateUserData", "logout"]),
    loadUser() {
      this.getUserData().then(res => {
        this.nickname = res.data.profile.nickname;
        this.name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.email = res.data.email;
        this.news = res.data.profile.news;
        this.sex = res.data.profile.sex;
      });
    },
    logoutAndGoToHome() {
      this.logout().then(() => this.$router.replace("/"));
    },
    goToPasswordChange() {
      this.$router.push("/alterarsenha");
    },
    changeTab(index) {
      this.selectedTab = index;
    },
    submit() {
      console.log(this.news)
      this.updateUserData({
        first_name: this.name,
        last_name: this.last_name,
        email: this.email,
        profile: {
          nickname: this.nickname,
          sex: this.sex,
          news: this.news
        }
      })
        .then(() => {
          this.emailMessage = [];
          this.$buefy.toast.open({
            duration: 2000,
            message: `Dados atualizados com sucesso!`,
            position: "is-top",
            type: "is-primary"
          });
        })
        .catch(res => {
          if (res.response) {
            console.log(res.response);
            this.emailMessage = res.response.data.email;
          }
        });
    }
  }
};
</script>
