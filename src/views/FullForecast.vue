<template>
  <div class="container">
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent">
        <div class="tile is-child is-5">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child has-text-centered">
              <p class="title">Rio de Janeiro</p>
            </div>
            <div class="tile is-child">
              <forecast-hud />
            </div>
          </div>
        </div>
        <div class="tile is-child">
          <div class="tile is-parent is-vertical">

            <div class="tile is-child">
                <!-- Day selector -->
              <div class="columns is-mobile">
                <div
                  class="column"
                  v-for="(day, index) in days"
                  :key="index"
                  @click="changeDay(index)"
                >
                  <div class="columns is-gapless has-text-centered is-multiline">
                    <div class="column is-full">
                      <div
                        :class="{'has-background-secondary': selectedDay == index, 'has-background-primary': selectedDay != index}"
                        style="max-height:0.7em;height:0.5em;border-radius:15%"
                      ></div>
                    </div>
                    <div class="column is-full">
                      <p
                        class="title is-5"
                        :class="{'has-text-secondary': selectedDay == index, 'has-text-primary': selectedDay != index }"
                      >{{day.day}}</p>
                    </div>
                    <div class="column is-full">
                      <p
                        class="subtitle"
                        :class="{'has-text-secondary': selectedDay == index, 'has-text-primary': selectedDay != index }"
                      >{{day.label}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tile is-child">
                <!-- Chart -->
              <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tile is-parent">

        <div class="tile is-child is-5">
            <!-- Tide -->
          <div class="columns is-multiline has-text-centered">
            <div class="column is-full">
              <div class="columns is-gapless is-mobile">
                <div class="column">
                  <img src="@/assets/icons/new_wave.svg" alt />
                </div>
                <div class="column is-5">
                  <p class="title is-6">TÁBUA DE MARÉ</p>
                </div>
                <div class="column">
                  <img src="@/assets/icons/new_wave.svg" alt />
                </div>
              </div>
            </div>

            <div class="column is-full">
                <!-- Chart -->
              <apexchart width="100%" height="100" type="line" :options="options" :series="series"></apexchart>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <div class="columns is-vcentered">
                <div class="column is-gapless is-2">
                  <figure class="image is-24x24">
                    <img src="@/assets/icons/star.svg" alt />
                  </figure>
                </div>
                <div class="column is-gapless has-text-centered">
                  <p class="title is-6">MELHORES DO DIA</p>
                </div>
                <div class="column is-gapless is-2">
                  <figure class="image is-24x24">
                    <img src="@/assets/icons/star.svg" alt />
                  </figure>
                </div>
              </div>
            </div>
            <div class="tile is-child"><p>b</p></div>
          </div>
          <div class="tile is-child">
              <p>a</p>
          </div>
          <div class="tile is-child">
            <div class="columns is-multiline">
              <div
                class="column is-full is-gapless is-horizontal-center is-flex"
                style="padding-bottom:0px;"
              >
                <figure class="image is-32x32">
                  <img src="@/assets/icons/dawn.svg" alt />
                </figure>
              </div>
              <div class="column is-full is-gapless is-paddingless has-text-centered">
                <p class="subtitle">04h52</p>
              </div>
            </div>
          </div>
          <div class="tile is-child">
            <div class="columns is-multiline">
              <div
                class="column is-full is-gapless is-horizontal-center is-flex"
                style="padding-bottom:0px;"
              >
                <figure class="image is-32x32">
                  <img src="@/assets/icons/twilight.svg" alt />
                </figure>
              </div>
              <div class="column is-full is-gapless is-paddingless has-text-centered">
                <p class="subtitle">17h50</p>
              </div>
            </div>
          </div>
          <div class="tile is-child">
            <p>c</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForecastHud from "../components/ForecastHud";
export default {
  components: {
    ForecastHud
  },
  data() {
    return {
      days: [
        { day: 25, label: "dom" },
        { day: 26, label: "seg" },
        { day: 27, label: "ter" },
        { day: 28, label: "qua" },
        { day: 29, label: "qui" },
        { day: 30, label: "sex" },
        { day: 31, label: "sab" }
      ],
      selectedDay: 1,
      options: {
        grid: {
          show: false
        },
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          show: false,
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "Hour",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    changeDay(day) {
      this.selectedDay = day;
    }
  }
};
</script>


<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
</style>