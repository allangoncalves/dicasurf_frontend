<template>
  <div class="columns is-vcentered">
    <div class="column is-narrow">
      <p class="title is-5 has-text-primary has-text-centered-touch has-text-weight-bold">Nossos Picos</p>
    </div>
    <div class="column">
      <v-select
        class="style-chooser has-text-white"
        v-model="selectedState"
        icon="search"
        placeholder="Selecione um estado"
        :options="states"
        label="name"
        :clearable="false"
        @input="stateSelected"
      />
    </div>
    <div class="column">
      <v-select
        class="style-chooser"
        v-model="selectedCity"
        :disabled="selectedState === null"
        placeholder="Selecione uma cidade"
        :options="cities"
        label="name"
        :clearable="false"
        @input="citySelected"
      />
    </div>
    <div class="column">
      <v-select
        class="style-chooser"
        v-model="selectedSpot"
        :disabled="selectedCity === null"
        placeholder="Selecione um pico"
        :options="spots"
        label="name"
        :clearable="false"
        @input="spotSelected"
      />
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
    ...mapState("geo", [
      "states",
      "cities",
      "spots",
      "currentState",
      "currentCity",
      "currentSpot"
    ]),
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
      this.getCities(this.selectedState.id);
    },
    citySelected() {
      this.getSpots({ state_id: 1, city_id: this.selectedCity.id });
    },
    spotSelected() {
      this.$emit("spot-selected");
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