<template>
  <div style="width:330px;">
    <div class="base indicator">
      <div class="is-horizontal-center">
        <!-- <img class="abs-position base" src="@/assets/indicators/tide_med.svg" alt /> -->
        <p class="hour title is-1 has-text-white">{{temperature}}</p>
        <p class="title date is-6 has-text-white">{{date}}</p>
        <p class="title day is-6 has-text-white">{{day}}</p>
        <!-- <img src="@/assets/indicators/base.svg" class="base" /> -->
      </div>
    </div>
  </div>
</template>
<script>
const WEEK_DAYS = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
export default {
  props: {
    tempC: {
      required: true,
      type: String
    },
    fullDate: {
      required: true
    }
  },
  computed: {
    temperature() {
      return `${this.tempC}º`;
    },
    date() {
      return `${this.fullDate.date()}, ${MONTHS[this.fullDate.month()]}`;
    },
    day(){
      return `${WEEK_DAYS[this.fullDate.day()]}`
    }
  },
};
</script>

<style lang="scss" scoped>
.abs-position {
  position: absolute;
}
.is-horizontal-center {
  float: right;
  padding-right: 0.6rem;
  padding-top: 7.8rem;
  // display: flex;
  // justify-content: center;
}
.hour {
  margin-bottom:0.1em;
  // position: absolute;
  // margin-left: 1.8em;
  // margin-top: 2.5em;
}
.date {
  margin-bottom:0.2em;
  // position: absolute;
  // margin-left: 6em;
  // margin-top: 11.3em;
}
.day {
  // position: absolute;
  // margin-left: 5.8em;
  // margin-top: 12.6em;
}

.indicator {
  background-image: url("../assets/indicators/wind_med.svg"),
    url("../assets/indicators/clouds.svg"), url("../assets/indicators/sun.svg"),
    url("../assets/indicators/tide_med.svg"),
    url("../assets/indicators/window.svg"),
    url("../assets/indicators/wave_med.svg"),
    url("../assets/indicators/base.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: contain;
  width: auto;
  height: 370px;
  border-radius: 0px 0px 170vw 170vw;
}
</style>