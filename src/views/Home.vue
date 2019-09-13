<template>
  <div>
    <carousel
      tag="div"
      :data="slides"
      direction="up"
      :controls="false"
      :interval="10000"
      indicator-type="disc"
    ></carousel>
    <section class="section hero is-medium" style="padding-top:1rem;padding-bottom:4rem;">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <div
              class="columns is-vcentered has-background-primary is-marginless box is-paddingless"
            >
              <div class="column is-2 has-text-secondary has-text-weight-bold">
                <p class="title is-4 has-text-centered-mobile">PREVISÃO</p>
              </div>
              <div class="column has-text-centered-mobile">
                <b-field>
                  <b-select class="select" placeholder="Selecione uma praia" icon="search">
                    <option v-for="option in data" :value="option" :key="option">{{ option }}</option>
                  </b-select>
                </b-field>
              </div>
              <div class="column has-text-centered-mobile">
                <b-field>
                  <b-select class="select" placeholder="Selecione um pico" icon>
                    <option v-for="option in data" :value="option" :key="option">{{ option }}</option>
                  </b-select>
                </b-field>
              </div>
              <div class="column is-4">
                <p class="has-text-white has-text-centered">Nossa vibe é surf, o resto é onda.</p>
              </div>
            </div>
          </div>
          <div class="column" style="padding-top:2rem">
            <div class="columns is-vcentered is-centered">
              <div class="column">
                <router-link to="/picos" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img src="@/assets/icons/picos.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">Previsão</p>
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="column">
                <router-link to="/picos" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img src="@/assets/icons/picos.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">Picos</p>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="column">
                <router-link to="/picos" tag="div">
                  <div class="columns is-multiline">
                    <div class="column is-full is-flex is-horizontal-center">
                      <div class="home-icon">
                        <img src="@/assets/icons/picos.svg" alt />
                      </div>
                    </div>
                    <div class="column is-full">
                      <p class="title is-4 has-text-centered">Picos</p>
                    </div>
                  </div>
                </router-link>
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
  name: "home",
  data() {
    return {
      slides: [
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
            </div>
            <div class="column is-full is-paddingless">
              <div class="columns is-vcentered is-marginless">
                <div
                  class="column is-4 has-background-primary is-paddingless"
                  style="max-height:0.2em;height:0.2em"
                ></div>
              </div>
            </div>
            <div class="column is-full">
              <div class="columns">
                <div class="column is-4">
                  <h2
                    class="has-text-white has-text-centered-mobile"
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`,
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
            </div>
            <div class="column is-full is-paddingless">
              <div class="columns is-vcentered is-marginless">
                <div
                  class="column is-4 has-background-primary is-paddingless"
                  style="max-height:0.2em;height:0.2em"
                ></div>
              </div>
            </div>
            <div class="column is-full">
              <div class="columns">
                <div class="column is-4">
                  <h2
                    class="has-text-white has-text-centered-mobile"
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`,
        `<section class="section is-medium home-carousel-item"><div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h1 class="title has-text-white has-text-centered-mobile">Praia do Madeiro</h1>
            </div>
            <div class="column is-full is-paddingless">
              <div class="columns is-vcentered is-marginless">
                <div
                  class="column is-4 has-background-primary is-paddingless"
                  style="max-height:0.2em;height:0.2em"
                ></div>
              </div>
            </div>
            <div class="column is-full">
              <div class="columns">
                <div class="column is-4">
                  <h2
                    class="has-text-white has-text-centered-mobile"
                  >O Pico mais democrático de Pipa. Todos os níveis, ondas o ano todo.<br><a>#DicaSurfPicos</a></h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div></section>`
      ],
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js"
      ]
    };
  }
};
</script>

<style lang="scss">
.is-horizontal-center {
  justify-content: center;
}
.home-carousel-item {
  background-image: url("../assets/images/surf-em-Ubatuba.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
}
.home-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: radial-gradient(#0075bb 100%, blue 30%);
  width: 160px;
  height: 160px;
}
</style>
