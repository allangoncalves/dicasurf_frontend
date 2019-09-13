<template>
  <div class="container">
    <div class="tile is-ancestor is-vertical" v-if="days.length !== 0">
      <div class="tile is-parent">
        <div class="tile is-child is-5">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child has-text-centered">
              <p class="title">Praia do Madeiro</p>
            </div>
            <div class="tile is-child">
              <forecast-hud
                :waveHeight="waveHeight"
                :WindGustKmph="WindGustKmph"
                :waterTemp="waterTemp"
                :ultraViolet="ultraViolet"
                :wavePeriods="wavePeriods"
              />
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
                  v-for="(day, index) in week"
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
                      >{{day.date}}</p>
                    </div>
                    <div class="column is-full">
                      <p
                        class="subtitle"
                        :class="{'has-text-secondary': selectedDay == index, 'has-text-primary': selectedDay != index }"
                      >{{day.weekDay}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tile is-child">
              <!-- Chart -->
              <apexchart width="100%" type="bar" :options="barChart.options" :series="waveHeightSeries"></apexchart>
            </div>
          </div>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child is-5">
          <!-- Tide -->
          <div class="tile is-parent is-vertical" style="padding-top:0.32rem">
            <div class="tile-is-child">
              <div class="columns is-gapless is-mobile">
                <div class="column">
                  <img src="@/assets/icons/new_wave.svg" alt />
                </div>
                <div class="column is-6">
                  <p class="title is-5 has-text-centered">TÁBUA DE MARÉ</p>
                </div>
                <div class="column">
                  <img src="@/assets/icons/new_wave.svg" alt />
                </div>
              </div>
            </div>
            <div class="tile-is-child">
              <apexchart
                width="100%"
                height="100"
                type="area"
                :options="areaChart.chartOptions"
                :series="tideSeries"
              ></apexchart>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="columns">
            <div class="column is-8">
              <div class="columns is-multiline">
                <div class="column is-full">
                  <div class="columns is-vcentered is-centered is-mobile">
                    <div class="column is-1 is-flex is-horizontal-end" style="padding-right:0px">
                      <figure class="image is-24x24">
                        <img src="@/assets/icons/star.svg" alt />
                      </figure>
                    </div>
                    <div
                      class="column is-9 has-text-centered"
                      style="padding-left:0px;padding-right:0px"
                    >
                      <p class="title is-5">MELHORES DO DIA</p>
                    </div>
                    <div class="column is-1 is-flex is-horizontal-start" style="padding-left:0px">
                      <figure class="image is-24x24">
                        <img src="@/assets/icons/star.svg" alt />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="column is-full">
                  <div class="columns is-mobile">
                    <div
                      class="column is-flex is-horizontal-center"
                      v-for="time in topThree"
                      :key="time.time"
                    >
                      <div
                        class="has-text-centered is-flex is-horizontal-center"
                        :class="time.highest ?  'best-secondary':  'best-primary'"
                      >
                        <div>
                          <p class="title is-5">{{time.time}}</p>
                          <p class="subtitle is-6">{{`${time.waveHeight}m`}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="columns is-mobile has-text-centered-mobile">
                <div class="column">
                  <div class="tile is-parent is-vertical">
                    <div class="tile is-child">
                      <div class="columns is-multiline">
                        <div
                          class="column is-full is-gapless is-horizontal-center is-flex"
                          style="padding-top:0px;padding-bottom:0px;"
                        >
                          <figure class="image is-32x32">
                            <img src="@/assets/icons/dawn.svg" alt />
                          </figure>
                        </div>
                        <div
                          class="column is-full is-gapless has-text-centered"
                          style="padding-top:0px;"
                        >
                          <p class="subtitle is-6">{{sunrise}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="tile is-child">
                      <div class="columns is-multiline">
                        <div
                          class="column is-full is-horizontal-center is-flex"
                          style="padding-bottom:0px;"
                        >
                          <figure class="image is-32x32">
                            <img src="@/assets/icons/twilight.svg" alt />
                          </figure>
                        </div>
                        <div class="column is-full has-text-centered" style="padding-top:0px;">
                          <p class="subtitle is-6" style="padding-bottom:0px">{{sunset}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="tile is-parent is-vertical" style="padding-top:0px">
                    <div class="tile is-child">
                      <div class="columns is-multiline is-gapless">
                        <div class="column is-full is-horizontal-center is-flex">
                          <figure class="image is-32x32">
                            <img src="@/assets/icons/humidity.svg" alt />
                          </figure>
                        </div>
                        <div class="column is-full has-text-centered">
                          <p class="subtitle is-6" style="padding-top:0.5rem;">{{humidity}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="tile is-child is-horizontal-center is-flex">
                      <div class="comment has-text-centered">
                        <p style="padding:0.22rem"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForecastHud from "../components/ForecastHud";

import core from "../mixins/core";

export default {
  components: {
    ForecastHud
  },
  mixins: [core],

  data() {
    return {
      barChart: {
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
            type: "datetime"
          },
          tooltip: {
            x: {
              show: true,
              format: "HH:mm"
            }
          }
        }
      },
      areaChart: {
        chartOptions: {
          grid: {
            show: false
          },
          chart: {
            id: "vuechart-example",
            toolbar: {
              show: false
            },
            selection: {
              enabled: false
            }
          },

          dataLabels: {
            enabled: true
          },

          markers: {
            size: 0,
            style: "hollow"
          },
          xaxis: {
            type: "datetime"
          },
          tooltip: {
            x: {
              show: false,
              format: "HH:mm"
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          }
        }
      }
    };
  },
};
</script>


<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
.is-horizontal-end {
  justify-content: flex-end;
}
.is-horizontal-start {
  justify-content: flex-start;
}
.comment {
  background-image: url("../assets/icons/comments.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
  width: 50px;
  height: 35px;
}
.best-secondary {
  border: 6px solid #222221;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  align-items: center;
}
.best-primary {
  border: 6px solid #0075bb;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  align-items: center;
}
</style>