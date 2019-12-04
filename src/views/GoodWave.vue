<template>
  <div>
    <section class="hero is-medium">
      <!-- Hero content: will be in the middle -->
      <figure class="image is-3by1">
        <img :src='require("@/assets/images/boaonda-header.png")' alt />
      </figure>
    </section>
    <section class="section section-top section-bottom">
      <div class="container">
        <div>
          <p
            class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
          >
            Boa Onda
          </p>
          <hr style="border: 1px solid #0075bb" />
        </div>
        <div>
          <p>
            <span class="has-text-weight-bold">Boa Onda</span> é o projeto
            social do <span class="has-text-weight-bold">Dica Surf</span> que
            direciona parte dos nossos lucros para ajudar pessoas e projetos
            sociais, ambientais, culturais, etc. A ideia é criar uma
            <span class="has-text-weight-bold">comunidade colaborativa</span>
            (vaquinha online) dentro do nosso site, alimentada pela nossa loja
            online e redes sociais. Você poderá cadastrar um desejo e receberá
            parte dos nossos lucros como contribuição para realizar seu sonho.
            Nossa intenção com isso é compartilhar nosso sucesso com você!
            Acreditamos que o mundo se torna um lugar melhor quando repartimos
            nossos ganhos para ajudar pessoas que precisam.
          </p>
          <br />
          <p>
            A Boa Onda é uma iniciativa para transformar sonhos em realidade. No
            final de cada compra em nossa loja online os clientes terão a opção
            de escolher seu projeto para receber parte do lucro da compra
            realizada. As causas podem ser de qualquer tipo: Um garoto que não
            tem dinheiro para a inscrição no campeonato de surf; Alguém que
            gostaria de ver o mar pela primeira vez; Alguma instituição que
            cuida da limpeza das praias; Ajudar um surfista numa viagem para um
            pico que ele sonha conhecer; Alguém que gostaria de comprar uma
            prancha, mas não tem condições; etc…
          </p>
          <br />
          <p class="title is-4 has-text-primary has-text-weight-bold">Parece bom demais pra ser verdade?</p>
          <p class="subtitle is-5 has-text-tertiary">
            Então aguenta aí que você vai ver que estamos falando muito sério!
          </p>
          <p>
            A Boa Onda ainda está em desenvolvimento! Seu lançamento está
            previsto para o primeiro semestre de 2020. Até lá, trabalharemos
            muito em uma plataforma para receber todos os projetos, sonhos e
            histórias. Criaremos uma comunidade com a vibe do surf! Onde todos
            se ajudam e contribuem para o crescimento do outro.
          </p>
          <br />
          <p>
            Quer fazer parte dessa Boa Onda? Gostaria de inscrever algum projeto
            ou sonho enquanto nossa plataforma está sendo desenvolvida? Basta
            clicar em “Conte seu desejo”, preencher o formulário e nós
            entraremos em contato com você!
          </p>
          <br />
          <p class="has-text-weight-bold has-text-primary">Aloha!</p>
        </div>
        <div class="columns" style="margin-top:1rem">
          <div class="column">
            <figure class="image is-3by1" style="border-radius:10px">
              <img
                :src='require("@/assets/images/boaonda1.png")'
                style="border-radius:15px;"
              />
            </figure>
          </div>
          <div class="column">
            <figure class="image is-3by1">
              <img
                :src='require("@/assets/images/boaonda2.png")'
                style="border-radius:15px;"
              />
            </figure>
          </div>
          <div class="column">
            <figure class="image is-3by1">
              <img
                :src='require("@/assets/images/boaonda3.png")'
                style="border-radius:15px;"
              />
            </figure>
          </div>
        </div>
         <div class="has-text-centered" style="padding:2rem">
            <b-button
              type="is-primary"
              size="is-medium"
              outlined
              @click="openForm"
            >
              Conte seu desejo</b-button
            >
          </div>
        <div class="tile" style="margin-top:2rem">
          <div class="tile is-child has-background-primary box">
            <div
              class="is-flex"
              style="justify-content:center;align-items:center;height:100%"
            >
              <b-icon
                icon="chart-pie"
                pack="fas"
                type="is-white"
                size="is-large"
              />
            </div>
          </div>
          <div class="tile is-child" style="padding-left:1.2rem;min-height:290px">
            <p
              class="is-size-3 has-text-weight-bold has-text-primary is-uppercase"
            >
              regras
            </p>
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
            <p class="is-size-3 has-text-weight-bold has-text-primary">
              {{ currentRule }}
            </p>
            <p>{{ rules[current - 1].text }}</p>
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
      console.log(this.current.length);      
      return this.current < 10 ? `0${this.current}.` : `${this.current}.`;
    }
  },
  methods: {
    openForm() {
      window.open("https://pt.surveymonkey.com/r/7NYYGF2");
      window.focus();
    }
  },
  data() {
    return {
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
            "Doaremos 10% do lucro da empresa para essas causas."
        },
        {
          text:
            "Tanto os projetos sociais como as doações serão escolhidas pelos nossos próprios seguidores."
        },
        {
          text:
            "Qualquer pessoa poderá pedir ajuda para ele mesmo ou para outra pessoa, tanto para projetos pessoais quanto projetos sociais."
        },
        {
          text:
            "Criaremos modelos de petição para padronizar e organizar os pedidos."
        },
        {
          text:
            "As petições podem ser de qualquer tipo, pessoais ou para organizações."
        },
        {
          text:
            "A finalidade é que todo mundo possa pedir ajuda! Se as pessoas gostam da sua petição, financiarão sua causa."
        },
        {
          text:
            "Ao final de cada compra, o cliente terá a opção de escolher para qual projeto ele quer direcionar o lucro."
        },
        {
          text:
            "Todas as petições estarão visíveis no site para nossos seguidores."
        },
        {
          text:
            "Faremos vídeos, fotos, textos, etc… entregando o valor arrecadado ao projeto escolhido por nossos clientes."
        },
        {
          text:
            "Faremos um trabalho nas redes sociais para divulgar os projetos sociais e conseguir mais projetos para incluir no site e loja online."
        },
        {
          text:
            "No site e na loja online haverá um contador do dinheiro já doado e um indicador de quanto falta para realizar aquela causa."
        },
        {
          text:
            "Ao finalizar cada causa, os idealizadores enviarão vídeos confirmando a realização do projeto e divulgaremos nas redes. Além disso, entraremos em contato com todos os que escolheram essa causa para mostrar os vídeos e presenteá-los com algum tipo de desconto, frete grátis, etc..."
        }
      ]
    };
  }
};
</script>
