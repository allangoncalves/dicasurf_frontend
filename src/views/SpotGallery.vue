<template>
  <div>
    <p
      class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
      style="margin-bottom:0px"
    >
      passeio 360°
    </p>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.tab {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.tab:hover {
  -webkit-filter: none; /* Safari 6.0 - 9.0 */
  filter: none;
}
</style>
