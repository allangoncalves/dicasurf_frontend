<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-full indicator">
      <indicator />
    </div>
    <div class="column is-paddingless">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/ondas-01.svg" alt />
          </figure>
        </div>

        <div class="column is-full">
          <p>Metros</p>
        </div>
        <div class="column is-full">
          <p class="subtitle has-text-weight-bold">{{waveHeight}}</p>
        </div>

        <div class="column is-full">
          <b-tag class="has-text-weight-bold" type="is-dicagreen">{{swellHeight}}</b-tag>
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
          <p>Segundos</p>
        </div>
        <div class="column is-full">
          <p class="subtitle has-text-weight-bold">{{wavePeriods}}</p>
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
          <p>Km/h</p>
        </div>
        <div class="column is-full">
          <p class="subtitle has-text-weight-bold">{{WindGustKmph}}</p>
        </div>
        <div class="column is-full">
          <b-tag class="has-text-weight-bold" type="is-dicagrey">{{windDir}}</b-tag>
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
          <p>Cº</p>
        </div>
        <div class="column is-full">
          <p class="subtitle has-text-weight-bold">{{waterTemp}}</p>
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
          <p class>UV</p>
        </div>
        <div class="column is-full">
          <p class="subtitle has-text-weight-bold">{{ultraViolet}}</p>
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