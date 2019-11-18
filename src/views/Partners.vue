<template>
  <div>
    <section class="hero is-medium">
      <figure class="image is-3by1">
        <img src="@/assets/images/parceiros.png" alt />
      </figure>
    </section>
    <section class="section section-top section-bottom">
      <div class="container">
        <div>
          <p
            class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
          >
            seja nosso parceiro
          </p>
          <hr style="border: 1px solid #0075bb" />
          <p
            class="subtitle is-4 has-text-primary has-text-centered is-uppercase has-text-weight-bold"
            style="padding-bottom:2rem"
          >
            portfólio
          </p>
        </div>
        <figure class="image is-2by1">
          <iframe
            class="has-ratio"
            :src="selectedVideo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </figure>
        <carousel
          :perPageCustom="[
            [0, 1],
            [769, 2],
            [1024, 3]
          ]"
          :navigationClickTargetSize="10"
          :navigationEnabled="true"
          :paginationEnabled="false"
        >
          <slide
            @slideclick="changeVideo(video.url)"
            v-for="(video, index) in videos"
            :key="index"
          >
            <figure class="image is-clickable" style="margin:2rem">
              <img :src="video.img" alt="" />
            </figure>
          </slide>
        </carousel>
        <section class="section-top section-bottom">
          <p class="title is-3 has-text-primary">
            Você gostaria de acrescentar ao conceito da sua empresa uma produção
            audiovisual de alta qualidade?
          </p>
          <p>
            Muitas empresas estão incluindo o
            <span class="has-text-weight-bold">vídeo marketing</span> em suas
            estratégias de comunicação para obter
            <span class="has-text-weight-bold">maiores benefícios</span> em sua
            marca. Para alcançar este objetivo, a primeira coisa que devemos
            considerar é a opção de
            <span class="has-text-weight-bold">investir</span> em um bom vídeo
            para seu negócio.
          </p>
          <p style="padding-top:1rem">
            Nós percebemos a dificuldade que grande parte das marcas têm para
            produzir vídeos corporativos de qualidade. Decidimos solucionar este
            problema incluindo este serviço aos nossos planos de parceria,
            convertendo nossa relação com nossos parceiros em algo realmente
            <span class="has-text-weight-bold"
              >interessante e lucrativo para todos.</span
            >
          </p>
          <p style="padding-top:1rem">
            Nossas propostas de parcerias beneficiarão todas as partes
            envolvidas, por isso nos perguntamos o que poderíamos oferecer a
            nossos parceiros, além da publicidade nas nossas redes sociais,
            site, etc… Como nosso produto é 90% vídeo e nosso time está
            integrado com
            <span class="has-text-weight-bold">profissionais</span> para a
            <span class="has-text-weight-bold"
              >produção audiovisual, elaboração de roteiros, gravação, pós
              produção, edição</span
            >, etc, decidimos oferecer esse serviço para agregar mais um
            conceito de
            <span class="has-text-weight-bold"
              >qualidade para sua empresa.</span
            >
          </p>
          <p style="padding-top:1rem">
            Em apenas um minuto, sua marca
            <span class="has-text-weight-bold">conquistará</span> as mentes dos
            consumidores, se
            <span class="has-text-weight-bold">conectará</span> com seus gostos
            e hábitos e te
            <span class="has-text-weight-bold">posicionará</span> como
            referência e especialista em seu setor de atuação.
          </p>
        </section>
        <section class="section-top section-bottom">
          <p
            class="title is-3 has-text-centered is-uppercase has-text-primary has-text-weight-bold"
          >
            nossos planos
          </p>
          <div class="tile">
            <!--  -->
            <div class="tile is-8 is-vertical">
              <div class="tile">
                <div
                  class="tile is-vertical has-text-centered"
                  style="border: 1px solid #0075bb;margin:1rem"
                >
                  <div style="padding-bottom:2rem">
                    <p
                      class="title is-3 is-uppercase has-background-primary has-text-white"
                      style="padding:1.5rem"
                    >
                      sunrise
                    </p>
                  </div>
                  <div class="tile is-child">
                    <div style="padding-right:1rem;padding-left:1rem">
                      <p
                        class="has-text-weight-bold has-text-primary title is-2"
                      >
                        <span
                          class="has-text-weight-bold has-text-primary title is-6"
                          >R$</span
                        >800
                      </p>
                      <p style="margin-top:3rem" class="has-text-centered">
                        1 vídeo de
                        <span class="has-text-weight-bold">60 segundos</span> ou
                        2 videos de
                        <span class="has-text-weight-bold">30 segundos</span>
                      </p>
                      <p style="margin-top:1.2rem">
                        Roteiro + Captação + Pós Produção + Alteraçōes
                      </p>
                      <p style="margin-top:1.2rem">2 teaser de 15 segundos</p>
                      <p style="margin-top:1.2rem">
                        10 fotos tratadas (ambiente, produtos, serviços, etc...)
                      </p>
                      <b-button
                        style="margin-top:2rem;margin-bottom:2rem"
                        type="is-primary"
                        size="is-large"
                        outlined
                        ><span class="has-text-weight-bold is-uppercase"
                          >saber mais</span
                        ></b-button
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="tile is-vertical has-text-centered"
                  style="border: 1px solid #0075bb;margin:1rem"
                >
                  <div style="padding-bottom:2rem">
                    <p
                      class="title is-3 is-uppercase has-background-primary has-text-white"
                      style="padding:1.5rem"
                    >
                      big rider
                    </p>
                  </div>
                  <div class="tile is-child">
                    <div style="padding-right:1rem;padding-left:1rem">
                      <p
                        class="has-text-weight-bold has-text-primary title is-2"
                      >
                        <span
                          class="has-text-weight-bold has-text-primary title is-6"
                          >R$</span
                        >1.200
                      </p>
                      <p style="margin-top:3rem" class="has-text-centered">
                        1 vídeo de
                        <span class="has-text-weight-bold">60 segundos</span> ou
                        2 videos de
                        <span class="has-text-weight-bold">30 segundos</span>
                      </p>
                      <p style="margin-top:1.2rem">
                        Roteiro + Captação + Pós Produção + Alteraçōes
                      </p>
                      <p style="margin-top:1.2rem">3 teaser de 15 segundos</p>
                      <p style="margin-top:1.2rem">
                        15 fotos tratadas (ambiente, produtos, serviços, etc...)
                      </p>
                      <b-button
                        style="margin-top:2rem;margin-bottom:2rem"
                        type="is-primary"
                        size="is-large"
                        outlined
                        ><span class="has-text-weight-bold is-uppercase"
                          >saber mais</span
                        ></b-button
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile"></div>
            </div>
            <!--  -->
            <div class="tile">
              <div
                class="tile is-vertical has-text-centered"
                style="border: 1px solid #0075bb;margin:1rem"
              >
                <div style="padding-bottom:2rem">
                  <p
                    class="title is-3 is-uppercase has-background-primary has-text-white"
                    style="padding:1.5rem"
                  >
                    rosa dos ventos
                  </p>
                </div>
                <div class="tile is-child">
                  <div style="padding-right:1rem;padding-left:1rem">
                    <p class="has-text-weight-bold has-text-primary title is-2">
                      <span
                        class="has-text-weight-bold has-text-primary title is-6"
                        >R$</span
                      >2.000
                    </p>
                    <p style="margin-top:3rem" class="has-text-centered">
                      1 vídeo de
                      <span class="has-text-weight-bold">60 segundos</span> ou 2
                      videos de
                      <span class="has-text-weight-bold">30 segundos</span>
                    </p>
                    <p style="margin-top:1.2rem">
                      Roteiro + Captação + Pós Produção + Alteraçōes
                    </p>
                    <p style="margin-top:1.2rem">4 teaser de 15 segundos</p>
                    <p style="margin-top:1.2rem">
                      fotos (ambiente, produtos, etc...)
                    </p>
                    <p style="margin-top:1.2rem">
                      15 fotos tratadas (ambiente, produtos, serviços, etc...)
                    </p>
                    <p style="margin-top:1.2rem">
                      <span class="has-text-weight-bold"
                        >publicidade criativa</span
                      >
                      em episódios (ou + 2 teasers)
                    </p>
                    <p style="margin-top:1.2rem">
                      Fotos <span class="has-text-weight-bold">360</span>
                    </p>
                    <p style="margin-top:1.2rem">
                      Drone
                    </p>
                    <b-button
                      style="margin-top:2rem;margin-bottom:2rem"
                      type="is-primary"
                      size="is-large"
                      outlined
                      ><span class="has-text-weight-bold is-uppercase"
                        >saber mais</span
                      ></b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="tile">
              <div
                class="tile is-vertical has-text-centered"
                style="border: 1px solid #0075bb;margin:1rem"
              >
                <div style="padding-bottom:2rem">
                  <p
                    class="title is-3 is-uppercase has-background-primary has-text-white"
                    style="padding:1.5rem"
                  >
                    adesao anual
                  </p>
                </div>
                <div class="tile is-child">
                  <div style="padding-right:1rem;padding-left:1rem">
                    <p class="has-text-weight-bold has-text-primary title is-2">
                      <span
                        class="has-text-weight-bold has-text-primary title is-6"
                        >R$</span
                      >500*
                    </p>
                    <p style="margin-top:3rem" class="has-text-centered">
                      1 teaser de 15 segundos por mês, durante
                      <span class="has-text-weight-bold">12 meses</span>
                    </p>
                    <b-button
                      style="margin-top:2rem;margin-bottom:2rem"
                      type="is-primary"
                      size="is-large"
                      outlined
                      ><span class="has-text-weight-bold is-uppercase"
                        >saber mais</span
                      ></b-button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="tile">
              <div
                class="tile is-vertical has-text-centered"
                style="margin:1rem"
              >
                <div style="padding-bottom:2rem">
                  <p
                    class="title is-3 is-uppercase has-background-primary has-text-white has-text-left"
                    style="padding:1.5rem"
                  >
                    adicionais
                  </p>
                </div>
                <div class="tile is-child">
                  <div style="padding-right:1.5rem;padding-left:1.5rem;">
                    <p
                      class="has-text-centered is-size-5 has-text-weight-bold has-text-left"
                    >
                      Drone = <span class="has-text-primary">R$500</span>
                    </p>
                    <p
                      class="has-text-centered is-size-5 has-text-weight-bold has-text-left"
                    >
                      Modelo/Figurantes =
                      <span class="has-text-primary"
                        >Cachê por conta do parceiro</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>*Exclusivo para parceiros do Dica Surf</p>
          <figure class="image is3by1" style="padding-top:4rem">
            <img src="@/assets/images/parceiros.png" alt="" />
          </figure>
          <p>(VÁLIDO POR 6 MESES)*</p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  methods: {
    changeVideo(url) {
      this.selectedVideo = url;
    }
  },
  data() {
    return {
      selectedVideo: "https://www.youtube.com/embed/jMwNXQFcBB4",
      videos: [
        {
          url: "https://www.youtube-nocookie.com/embed/_msRXflOfWw",
          img: require("@/assets/images/beach.jpg")
        },
        {
          url: "https://www.youtube.com/embed/vy-k0FopsmY",
          img: require("@/assets/images/beach.jpg")
        },
        {
          url: "https://www.youtube-nocookie.com/embed/_msRXflOfWw",
          img: require("@/assets/images/beach.jpg")
        },
        {
          url: "https://www.youtube.com/embed/vy-k0FopsmY",
          img: require("@/assets/images/beach.jpg")
        }
      ]
    };
  }
};
</script>
