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
            :src="createVideo(selectedVideo)"
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
          :navigationClickTargetSize="0"
          :navigationEnabled="true"
          :paginationEnabled="false"
        >
          <slide
            @slideclick="changeVideo(video)"
            v-for="(video, index) in videoIds"
            :key="index"
          >
            <figure class="image is-clickable" style="margin:2rem">
              <img :src="createThumb(video)" alt="" />
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
          <br />
          <p>
            Nós percebemos a dificuldade que grande parte das marcas têm para
            produzir vídeos corporativos de qualidade. Decidimos solucionar este
            problema incluindo este serviço aos nossos planos de parceria,
            convertendo nossa relação com nossos parceiros em algo realmente
            <span class="has-text-weight-bold"
              >interessante e lucrativo para todos.</span
            >
          </p>
          <br />
          <p>
            O Dica Surf tem uma equipe totalmente integrada para a produção
            audiovisual, elaboração de roteiros, gravação, pós produção, etc.
            Decidimos comercializar esse serviço para agregar mais um conceito
            de qualidade para sua empresa e, ao mesmo tempo, monetizar nosso
            projeto para nos ajudar a manter o Dica no ar, trazendo os melhores
            conteúdos que você já conhece.
          </p>
          <br />
          <p>
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
                      <p style="margin-top:1rem" class="has-text-centered">
                        1 vídeo de
                        <span class="has-text-weight-bold">60 segundos</span> ou
                        2 videos de
                        <span class="has-text-weight-bold">30 segundos</span>
                      </p>
                      <br />
                      <p>
                        Roteiro + Captação + Pós Produção + Alteraçōes
                      </p>
                      <br />
                      <p>2 teaser de 15 segundos</p>
                      <br />
                      <p>
                        10 fotos tratadas (ambiente, produtos, serviços, etc...)
                      </p>
                      <b-button
                        style="margin-top:2rem;margin-bottom:2rem"
                        type="is-primary"
                        size="is-large"
                        outlined
                        @click="openEmailModal(1)"
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
                      <p style="margin-top:1rem" class="has-text-centered">
                        1 vídeo de
                        <span class="has-text-weight-bold">60 segundos</span> ou
                        2 videos de
                        <span class="has-text-weight-bold">30 segundos</span>
                      </p>
                      <br />
                      <p>
                        Roteiro + Captação + Pós Produção + Alteraçōes
                      </p>
                      <br />
                      <p>3 teaser de 15 segundos</p>
                      <br />
                      <p>
                        15 fotos tratadas (ambiente, produtos, serviços, etc...)
                      </p>
                      <b-button
                        style="margin-top:2rem;margin-bottom:2rem"
                        type="is-primary"
                        size="is-large"
                        outlined
                        @click="openEmailModal(2)"
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
                    <p style="margin-top:1rem" class="has-text-centered">
                      1 vídeo de
                      <span class="has-text-weight-bold">60 segundos</span> ou 2
                      videos de
                      <span class="has-text-weight-bold">30 segundos</span>
                    </p>
                    <br />
                    <p>
                      Roteiro + Captação + Pós Produção + Alteraçōes
                    </p>
                    <br />
                    <p>4 teaser de 15 segundos</p>
                    <br />
                    <p>
                      15 fotos tratadas (ambiente, produtos, serviços, etc...)
                    </p>
                    <br />
                    <p>
                      <span class="has-text-weight-bold"
                        >publicidade criativa</span
                      >
                      em episódios (ou + 2 teasers de 15 segundos)
                    </p>
                    <br />
                    <p>Fotos <span class="has-text-weight-bold">360</span></p>
                    <br />
                    <p>
                      Drone
                    </p>
                    <b-button
                      style="margin-top:2rem;margin-bottom:2rem"
                      type="is-primary"
                      size="is-large"
                      outlined
                      @click="openEmailModal(3)"
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
                    adesao anual**
                  </p>
                </div>
                <div class="tile is-child">
                  <div style="padding-right:1rem;padding-left:1rem">
                    <p style="margin-top:1rem" class="has-text-centered">
                      1 teaser de 15 segundos por mês, durante
                      <span class="has-text-weight-bold">12 meses</span>
                    </p>
                    <b-button
                      style="margin-top:2rem;margin-bottom:2rem"
                      type="is-primary"
                      size="is-large"
                      outlined
                      @click="openEmailModal(4)"
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
          <p>**Exclusivo para parceiros do Dica Surf</p>
          <figure class="image is3by1" style="padding-top:4rem">
            <img src="@/assets/images/promo.png" alt="" />
          </figure>
          <p>(VÁLIDO POR 6 MESES)*</p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
const YOUTUBE_REGEX = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
import { Carousel, Slide } from "vue-carousel";
import EmailModal from "@/components/EmailModal";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Carousel,
    Slide
  },
  created() {
    this.getPartnerData().then(() => {
      if (this.partnerCarousel.length > 0) {
        this.selectedVideo = this.videoIds[0];
      }
    });
  },
  computed: {
    ...mapState("website", ["partnerCarousel"]),
    videoIds() {
      return this.partnerCarousel.map(
        slide => slide.video_url.match(YOUTUBE_REGEX)[2]
      );
    }
  },
  methods: {
    ...mapActions("website", ["getPartnerData"]),
    createThumb(id) {
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    },
    createVideo(id) {
      console.log(`https://www.youtube.com/embed/${id}`);
      return `https://www.youtube.com/embed/${id}`;
    },
    changeVideo(video) {
      this.selectedVideo = video;
    },
    openEmailModal(choice) {
      this.$buefy.modal.open({
        parent: this,
        component: EmailModal,
        trapFocus: true,
        hasModalCard: true,
        customClass: "",
        props: {
          choice
        }
      });
    }
  },
  data() {
    return {
      selectedVideo: ""
    };
  }
};
</script>
