<template>
  <header>
    <nuxt-link to="/">
      <img class="app-logo" src="@/assets/images/logo.svg" alt="Dewalt Logo" />
    </nuxt-link>

    <!-- <app-shopping /> -->
  </header>
</template>

<script>
// import Shopping from "./Shopping";

export default {
  components: {
    // appShopping: Shopping
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  box-shadow: 0 1px 1px #00000026;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  padding: 0 $project-mobile-padding;

  @include breakpoint(1172) {
    padding: 0 7rem;
  }
}

.app-logo {
  height: 3.8rem;
}
</style>
