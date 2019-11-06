<template>
  <div>
    <section class="hero is-medium">
      <!-- Hero content: will be in the middle -->
      <figure class="image is-3by1">
        <img src="@/assets/images/boaonda.png" alt />
      </figure>
    </section>
    <section class="section section-top section-bottom">
      <div class="container">
        <div>
          <p class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold">Boa Onda</p>
          <hr />
        </div>
        <div class="tile is-ancestor is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child" v-html="html"></div>
            </div>
            <div class="tile is-parent is-vertical">
              <div class="tile is-child">
                <figure class="image is-3by1">
                  <img src="@/assets/images/exotic.jpg" alt />
                </figure>
              </div>
              <div class="tile is-child">
                <figure class="image is-3by1">
                  <img src="@/assets/images/sky.jpg" alt />
                </figure>
              </div>
              <div class="tile is-child">
                <figure class="image is-3by1">
                  <img src="@/assets/images/action.jpg" alt />
                </figure>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child">
                <figure class="image is-2by1">
                  <img src="@/assets/images/action.jpg" alt />
                </figure>
              </div>
              <div class="tile is-child" style="padding-left:1.2rem">
                <p class="is-size-3 has-text-weight-bold has-text-primary is-uppercase">regras</p>
                <div class="is-flex" style="justify-content:flex-end">
                  <b-pagination
                    :total="rules.length"
                    :current.sync="current"
                    :size="size"
                    :simple="isSimple"
                    :rounded="isRounded"
                    :per-page="perPage"
                    :icon-prev="prevIcon"
                    :icon-next="nextIcon"
                  ></b-pagination>
                </div>
                <hr style="margin-top:0.4rem;margin-bottom:0.4rem" />
                <p class="is-size-3 has-text-weight-bold has-text-primary">{{currentRule}}</p>
                <p>{{ rules[current - 1].text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    currentRule() {
      return `0${this.current}.`;
    }
  },
  data() {
    return {
      // eslint-disable-next-line
      html: `<p style="white-space:pre-wrap"><span class="has-text-weight-bold">Boa Onda</span> é o projeto social do <span class="has-text-weight-bold">Dica Surf</span> que direciona parte dos nossos lucros para ajudar projetos sociais/ambientais/etc...

A ideia é criar uma <span class="has-text-weight-bold">comunidade colaborativa</span> (vaquinha online) dentro do nosso site, alimentada e difundida na Loja Online e nas Redes Sociais.
              </p>
              <p
                class="title is-5 is-uppercase has-text-primary"
              >as causas podem ser de qualquer tipo</p>
              <p style="white-space:pre-wrap">Um garoto que não tem dinheiro para a inscrição em um campeonato de surf;

Alguem que gostaria de ver o mar pela primeira vez;

Alguma instituição que cuida da limpeza de praias;

Ajudar um surfista numa viagem para um pico que ele sonha conhecer;

Alguém que gostaria de comprar uma prancha, mas não tem condiçōes;

              </p>`,
      current: 1,
      perPage: 1,
      order: "is-centered",
      size: "is-small",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      rules: [
        {
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
          text:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        },
        {
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
          text:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
        },
        {
          text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
            
        },
        {
          text:
            "Ao final de cada compra, o cliente terá a opção de escolher para qual projeto ele quer direcionar o lucro"
        }
      ]
    };
  }
};
</script>