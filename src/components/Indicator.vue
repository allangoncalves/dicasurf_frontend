<template>
  <div>
    <div class="base has-text-centered test">
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
var moment = require("moment");
const WEEK_DAYS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
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
  display: flex;
  justify-content: center;
}
.hour {
  position: absolute;
  margin-left: 180px;
  margin-top: 120px;
}
.date {
  position: absolute;
  margin-left: 180px;
  margin-top: 180px;
}
.day {
  position: absolute;
  margin-left: 180px;
  margin-top: 203px;
}

.test {
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