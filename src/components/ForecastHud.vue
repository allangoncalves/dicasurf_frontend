<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-full indicator " style="display: flex;justify-content:center">
      <indicator :tempC="tempC" :fullDate="fullDate"/>
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/ondas-01.svg" alt />
          </figure>
        </div>

        <div class="column is-full">
          <p>Altura</p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-6 has-text-weight-bold">{{waveHeight + "m"}}</p>
        </div>

        <div class="column is-full">
          <b-tag class="has-text-weight-bold has-text-white" type="is-primary">{{swellHeight + "m"}}</b-tag>
        </div>
      </div>
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/intervalo-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full">
          <p>Períodos</p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-6 has-text-weight-bold">{{wavePeriods + "s"}}</p>
        </div>
      </div>
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/vento-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full">
          <p>Vento</p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-6 has-text-weight-bold">{{WindGustKmph + "km/h"}}</p>
        </div>
        <div class="column is-full">
          <b-tag class="has-text-weight-bold has-text-white" type="is-primary">{{windDir}}</b-tag>
        </div>
      </div>
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/temperatura-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full">
          <p>Temp. da Água</p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-6 has-text-weight-bold">{{waterTemp + "C°"}}</p>
        </div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/exposicao-01.svg" />
          </figure>
        </div>
        <div class="column is-full">
          <p class>Índice UV</p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-6 has-text-weight-bold">{{ultraViolet}}</p>
        </div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Indicator from "./Indicator";
export default {
  components: {
    Indicator
  },
  props: {
    waveHeight: {
      required: true,
      type: String
    },
    WindGustKmph: {
      required: true,
      type: String
    },
    waterTemp: {
      required: true,
      type: String
    },
    ultraViolet: {
      required: true,
      type: String
    },
    wavePeriods: {
      required: true,
      type: String
    },
    swellHeight: {
      required: true,
      type: String
    },
    windDir: {
      required: true,
      type: String
    },
    tempC: {
      required: true,
      type: String
    },
    fullDate: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
.indicator {
  padding-top: 0px;
}
</style>