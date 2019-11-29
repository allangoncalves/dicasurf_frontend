<template>
  <div>
    <section class="section has-background-tertiary">
      <div class="container">
        <div class="columns section-bottom section-top">
          <div class="column has-text-centered-mobile is-horizontal-center">
            <img class="vertical-logo" :src="verticalLogo" alt="Dica Surf" />
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Sobre</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <div>
              <router-link style="display:block" class="has-text-white" to="quemsomos">Quem somos</router-link>
              <!-- <router-link style="display:block" class="has-text-white" to="equipe">Nossa equipe</router-link> -->
              <router-link style="display:block" class="has-text-white" to="boaonda">Boa Onda</router-link>
              <router-link style="display:block" class="has-text-white" to="parceiros">Parceiros</router-link>
            </div>
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Conteúdo</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <router-link style="display:block" class="has-text-white" to="picos">Picos</router-link>
            <router-link style="display:block" class="has-text-white" to="news">News</router-link>
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Contato</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <router-link style="display:block" class="has-text-white" to="faleconosco">Fale conosco</router-link>
            <!-- <router-link
              style="display:block"
              class="has-text-white"
              to="trabalheconosco"
            >Trabalhe conosco</router-link> -->
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Redes Sociais</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <div class="is-inline-block">
              <b-icon
                icon="fa-instagram"
                style="margin-right:0.6rem"
                pack="fab"
                type="is-white"
                size="is-medium"
                custom-class=" is-size-3 is-clickable"
                @click.native="openInstagram"
              />
              <b-icon
                icon="fa-youtube"
                style="margin-right:0.6rem"
                pack="fab"
                type="is-white"
                size="is-medium"
                custom-class=" is-size-3 is-clickable"
                @click.native="openYoutube"
              />
              <b-icon
                icon="fa-facebook-square"
                style="margin-right:0.6rem"
                pack="fab"
                type="is-white"
                size="is-medium"
                custom-class=" is-size-3 is-clickable"
                @click.native="openFacebook"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer has-background-primary">
      <div class="has-text-centered has-text-white">
        <p>&copy;2019 Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verticalLogo: require("@/assets/icons/logo_footer.svg")
    };
  },
  methods: {
    openFacebook() {
      window.open("https://www.facebook.com/dicasurfe");
      window.focus();
    },
    openInstagram() {
      window.open("https://www.instagram.com/dica.surf");
      window.focus();
    },
    openYoutube() {
      window.open("https://www.youtube.com/channel/UCKFEDjVbeEya64C823H0Q6g");
      window.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.is-horizontal-center {
  display: flex;
  justify-content: center;
}
.vertical-logo {
  width: 130px;
  height: 174.5px;
}

.section-top {
  padding-top: 3rem;
}

.section-bottom {
  padding-bottom: 3rem;
}
</style>
