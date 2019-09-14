<template>
  <div >
    <div class="columns is-mobile is-gapless">
      <div
        class="column is-flex is-paddingless tab"
        style="align-items:center"
        v-for="(tab, index) in tabs"
        :key="tab"
        @click="changeSelection(index)"
        :style="{backgroundImage: `url('${require(`@/assets/icons/tab_${ selectedTab === index ? 'black': 'blue'}.svg`)}')`}"
      >
        <p class="title is-5 is-size-6-mobile">{{ tab }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedTab: 0,
      tabs: ["Altura", "Periodo", "Vento", "Swell"]
    };
  },
  methods: {
    changeSelection(index) {
      this.selectedTab = index;
      this.$emit("selectionChanged", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  background-position: center left;
  background-repeat: no-repeat;
  background-attachment: center;
  background-size: contain;
  height: 70px;
}
.home-carousel-item {
  //   background-image: url("../assets/icons/tab_blue_base.svg");
  background-position: left;
  background-repeat: no-repeat;
  background-attachment: center;
  background-size: cover;
}
</style>