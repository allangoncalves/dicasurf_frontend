<template>
  <div>
    <section class="section has-background-tertiary">
      <div class="container">
        <div class="columns section-bottom section-top">
          <div class="column is-2 has-text-centered-mobile">
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
              />
              <b-button
                style="margin-right:0.6rem;"
                type="is-white has-text-secondary"
                icon-right="fa-facebook-f"
                icon-pack="fab"
              />
              <b-button type="is-white has-text-secondary" icon-right="fa-whatsapp" icon-pack="fab" />
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
      verticalLogo: require("@/assets/images/logo_vertical_with_name.png")
    };
  }
}
</script>

<style lang="scss" scoped>
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