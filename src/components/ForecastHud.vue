<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-full indicator">
      <indicator/>
    </div>
    <div class="column">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
        <figure class="image is-24x24 ">
          <img src="@/assets/icons/ondas-01.svg" alt />
        </figure>
        </div>

        <div class="column is-full"><p>Metros</p></div>
        <div class="column is-full"><p class="subtitle has-text-weight-bold">0.9</p></div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
    <div class="column">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/intervalo-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full"><p>Segundos</p></div>
        <div class="column is-full"><p class="subtitle has-text-weight-bold">0.9</p></div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
    <div class="column">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/vento-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full"><p>Km/h</p></div>
        <div class="column is-full"><p class="subtitle has-text-weight-bold">0.9</p></div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
    <div class="column">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/temperatura-01.svg" alt />
          </figure>
        </div>
        <div class="column is-full"><p>Cº</p> </div>
        <div class="column is-full"><p class="subtitle has-text-weight-bold">0.9</p></div>
        <!-- <div class="column is-full">DFF</div> -->
      </div>
    </div>
    <div class="column">
      <div class="columns is-gapless is-mobile is-multiline has-text-centered">
        <div class="column is-full is-horizontal-center is-flex">
          <figure class="image is-24x24">
            <img src="@/assets/icons/exposicao-01.svg" />
          </figure>
        </div>
        <div class="column is-full"><p class="">UV</p> </div>
        <div class="column is-full"><p class="subtitle has-text-weight-bold">0.9</p></div>
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
  }
  
}
</script>

<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
.indicator{
  padding-top:0px;
}
</style>