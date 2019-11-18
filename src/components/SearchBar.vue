<template>
  <div class="columns is-vcentered">
    <div class="column is-narrow" v-if="hasLabel">
      <p
        class="title is-5 has-text-primary has-text-centered-touch has-text-weight-bold"
      >
        Nossos Picos
      </p>
    </div>
    <div class="column">
      <v-select
        class="style-chooser has-text-white"
        v-model="selectedState"
        :resetOnOptionsChange="true"
        icon="search"
        placeholder="Selecione um estado"
        :options="filteredStates"
        label="name"
        :clearable="false"
        @input="stateSelected"
      />
    </div>
    <div class="column">
      <v-select
        class="style-chooser"
        v-model="selectedCity"
        :resetOnOptionsChange="true"
        :disabled="selectedState === null"
        placeholder="Selecione uma cidade"
        :options="filteredCities"
        label="name"
        :clearable="false"
        @input="citySelected"
      />
    </div>
    <div class="column" v-if="hasSpot">
      <v-select
        class="style-chooser"
        v-model="selectedSpot"
        :resetOnOptionsChange="true"
        :disabled="selectedCity === null"
        placeholder="Selecione um pico"
        :options="spots"
        :clearable="false"
        @input="spotSelected"
      >
        <template v-slot:selected-option="option">
          {{ option.spot.name }}
        </template>
        <template v-slot:option="option">
          {{ option.spot.name }}
        </template>
      </v-select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {
    hasLabel: {
      type: Boolean,
      default: true
    },
    hasSpot: {
      type: Boolean,
      default: true
    },
    onlyVisible: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.onlyVisible) {
      if(this.selectedState.is_visible == false){
        this.selectedState = null;
        this.selectedSpot = null;
        this.selectedCity = null;
      }
      else if(this.selectedCity.is_visible == false){
        this.selectedSpot = null;
        this.selectedCity = null;
      }
    }
  },
  computed: {
    ...mapState("geo", [
      "states",
      "cities",
      "spots",
      "currentState",
      "currentCity",
      "currentSpot"
    ]),
    filteredStates() {
      return this.onlyVisible
        ? this.states.filter(state => state.is_visible == true)
        : this.states;
    },
    filteredCities() {
      return this.onlyVisible
        ? this.cities.filter(city => city.is_visible == true)
        : this.cities;
    },
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
    ...mapActions("geo", ["getCities", "getSpots"]),
    ...mapMutations("geo", [
      "setCurrentState",
      "setCurrentCity",
      "setCurrentSpot"
    ]),
    stateSelected() {
      this.selectedSpot = null;
      this.selectedCity = null;
      this.getCities(this.selectedState.id);
    },
    citySelected() {
      if (this.selectedCity != null) {
        this.$emit("city-selected", this.selectedCity);
        this.selectedSpot = null;
        this.getSpots({ state_id: 1, city_id: this.selectedCity.id });
      }
    },
    spotSelected() {
      if (this.selectedSpot != null) {
        this.$emit("spot-selected", this.selectedSpot);
      }
    }
  }
};
</script>
<style lang="scss">
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu,
.style-chooser .vs__selected {
  background: #0075bb;
  border: none;
  color: white;
  text-transform: lowercase;
  font-variant: small-caps;
}
.vs--disabled .vs__search {
  background-color: #0075bb;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: white;
  background-color: #0075bb;
}
</style>
