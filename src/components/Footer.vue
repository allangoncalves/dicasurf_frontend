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
            <p class="has-text-white">A Dica SURF</p>
            <p class="has-text-white">Dicas</p>
            <p class="has-text-white">Picos</p>
            <p class="has-text-white">Life Style</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Mídia</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <p class="has-text-white">Eventos</p>
            <p class="has-text-white">Vídeos</p>
            <p class="has-text-white">Download</p>
            <p class="has-text-white">Life Style</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Contato</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <p class="has-text-white">Fale conosco</p>
            <p class="has-text-white">Trabalhe conosco</p>
          </div>
          <div class="column">
            <p class="title is-5 has-text-primary">Redes Sociais</p>
            <div
              class="subtitle is-5 has-background-primary is-paddingless"
              style="max-height:0.2em;height:0.2em"
            />
            <div>
              <b-button
                style="margin-right:0.6rem;"
                type="is-white has-text-secondary"
                icon-right="fa-instagram"
                icon-pack="fab"
                @click="openInstagram"
              />
              <b-button
                style="margin-right:0.6rem;"
                type="is-white has-text-secondary"
                icon-right="fa-facebook-f"
                icon-pack="fab"
                @click="openFacebook"
              />
              <b-button
                type="is-white has-text-secondary"
                icon-right="fa-youtube"
                icon-pack="fab"
                @click="openYoutube"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
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
    openFacebook(){
      window.open("https://www.facebook.com/dicasurf.com.br");
      window.focus();
    },
    openInstagram(){
      window.open("https://www.instagram.com/dica.surf");
      window.focus();
    },
    openYoutube(){
      window.open("https://www.youtube.com/channel/UCKFEDjVbeEya64C823H0Q6g");
      window.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.is-horizontal-center {
  display: flex;
  justify-content: center
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
