<template>
  <div>
    <section class="hero is-medium">
      <figure class="image is-3by1">
        <img src="@/assets/images/picos.png" alt />
      </figure>
      <!-- Hero content: will be in the middle -->
    </section>

    <section class="section">
      <div class="container" style="padding-top:2rem;padding-bottom:2rem">
        <search-bar
          :hideMessage="true"
          :onlyVisible="true"
        />
        <hr style="border: 1px solid #0075bb" />
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  components: {
    SearchBar,
  },
};
</script>
