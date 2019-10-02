<template>
  <div
    class="columns is-multiline is-centered is-vcentered has-background-primary box is-paddingless"
  >
    <div class="column is-narrow is-full-touch has-text-secondary has-text-weight-bold">
      <p class="title is-4 has-text-centered-touch has-text-weight-bold">{{title}}</p>
    </div>
    <div class="column">
      <div class="columns is-centered is-multiline">
        <div class="column is-narrow has-text-centered-mobile">
          <b-field>
            <b-select
              v-model="selectedState"
              class="select"
              icon="search"
              placeholder="Selecione um estado"
              @input="stateSelected"
            >
              <option v-for="state in states" :value="state" :key="state.id">{{ state.name }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-narrow  has-text-centered-touch">
          <b-field>
            <b-select
              v-model="selectedCity"
              class="select"
              :disabled="selectedState === null"
              placeholder="Selecione uma cidade"
              @input="citySelected"
            >
              <option v-for="city in cities" :value="city" :key="city.id">{{ city.name }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-narrow has-text-centered-mobile">
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
        
      </div>
    </div>
    <div class="column is-narrow is-full-touch" v-if="!hideMessage">
      <p
        class="has-text-white has-text-centered-touch has-text-right-desktop"
      >Nossa vibe é surf, o resto é onda.</p>
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
    ...mapState(["states", "cities", "spots", "currentState", "currentCity", "currentSpot"]),
    selectedState: {
      get() {
        return this.currentState;
      },
      set(value) {
        this.setCurrentState(value);
      }
    },
    selectedCity: {
      get() {
        return this.currentCity;
      },
      set(value) {
        this.setCurrentCity(value);
      }
    },
    selectedSpot: {
      get() {
        return this.currentSpot;
      },
      set(value) {
        this.setCurrentSpot(value);
      }
    }
  },
  methods: {
    ...mapActions(["getCities", "getSpots"]),
    ...mapMutations(["setCurrentState", "setCurrentCity", "setCurrentSpot"]),
    stateSelected(){
      this.getCities(this.selectedState.id)
    },
    citySelected() {
      this.getSpots({state_id: 1, city_id: this.selectedCity.id });
    },
    spotSelected() {
      this.$emit("spot-selected");
    }
  }
};
</script>