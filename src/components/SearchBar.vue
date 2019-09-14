<template>
  <div class="columns is-vcentered has-background-primary is-marginless box is-paddingless">
    <div class="column is-2 has-text-secondary has-text-weight-bold">
      <p class="title is-4 has-text-centered-mobile has-text-weight-bold">{{title}}</p>
    </div>
    <div class="column has-text-centered-mobile">
      <b-field>
        <b-select
          v-model="selectedBeach"
          class="select"
          placeholder="Selecione uma praia"
          icon="search"
        >
          <option v-for="option in data" :value="option" :key="option">{{ option }}</option>
        </b-select>
      </b-field>
    </div>
    <div class="column has-text-centered-mobile">
      <b-field>
        <b-select
          class="select"
          :disabled="selectedBeach === null"
          placeholder="Selecione um pico"
          @input="$emit('spot-selected')"
        >
          <option v-for="option in data" :value="option" :key="option">{{ option }}</option>
        </b-select>
      </b-field>
    </div>
    <div class="column is-4" v-if="!hideMessage">
      <p class="has-text-white has-text-centered">Nossa vibe é surf, o resto é onda.</p>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      selectedBeach: null,
      selectedSpot: null,
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js"
      ]
    };
  }
};
</script>