<template>
  <div class="columns is-vcentered has-background-primary box is-paddingless">
    <div class="column is-2 has-text-secondary has-text-weight-bold">
      <p class="title is-4 has-text-centered-mobile has-text-weight-bold">{{title}}</p>
    </div>
    <div class="column is-3 has-text-centered-mobile">
      <b-field>
        <b-select
          v-model="selectedCity"
          class="select"
          placeholder="Selecione uma cidade"
          icon="search"
          @input="citySelected"
        >
          <option v-for="city in cities" :value="city" :key="city.id">{{ city.name }}</option>
        </b-select>
      </b-field>
    </div>
    <div class="column is-3 has-text-centered-mobile">
      <b-field>
        <b-select
          v-model="selectedSpot"
          class="select"
          :disabled="selectedCity === null"
          placeholder="Selecione um pico"
          @input="spotSelected"
        >
          <option v-for="spot in spots" :value="spot" :key="spot.id">{{ spot.name }}</option>
        </b-select>
      </b-field>
    </div>
    <div class="column" v-if="!hideMessage">
      <p class="has-text-white has-text-centered-mobile has-text-right-tablet">Nossa vibe é surf, o resto é onda.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    hideMessage: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapState(["cities", "spots", "currentCity", "currentSpot"]),
    selectedCity: {
      get(){
        return this.currentCity;
      },
      set(value){
        this.setCurrentCity(value)
      }
    },
    selectedSpot: {
      get(){
        return this.currentSpot;
      },
      set(value){
        this.setCurrentSpot(value);
      }
    }
  },
  methods: {
    ...mapActions(["getSpots", "getForecast", "getWeather"]),
    ...mapMutations(["setCurrentCity", "setCurrentSpot"]),
    citySelected() {
      this.getSpots({id: this.selectedCity.id});
    },
    spotSelected() {
      console.log(this.currentSpot);
      this.$emit("spot-selected");
    }
  }
};
</script>