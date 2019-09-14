<template>
  <div>
    
    <div class="base has-text-centered" >
        <!-- Wind -->
      <img class="abs-position base" src="@/assets/indicators/wind_med.svg" alt />
      <!-- Clouds -->
      <img class="abs-position base" src="@/assets/indicators/clouds.svg" alt />
      <!-- SUN -->
      <img class="abs-position base" src="@/assets/indicators/sun.svg" alt />
      <!-- Tide Height -->
      <img class="abs-position base" src="@/assets/indicators/tide_med.svg" alt />
      <!-- Waves Frequency -->
      <img class="abs-position base" src="@/assets/indicators/wave_med.svg" alt />
      <!-- BASE -->
      <img class="abs-position base" src="@/assets/indicators/window.svg" alt />
      <img src="@/assets/indicators/base.svg" class="base" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.abs-position {
  position: absolute;
}
.hour{
  position: absolute;
  left: 320px;
  top: 350px
}
.base{
    width: auto;
    height: 345px;
    border-radius: 3% 3% 20% 20%;
}
</style>