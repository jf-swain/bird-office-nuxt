<template>
  <section>
    <article>
      <header>
        <h2>Cart List</h2>
      </header>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  max-width: $project-inner;
  margin-left: auto;
  margin-right: auto;
  padding-left: $project-mobile-padding;
  padding-right: $project-mobile-padding;

  @include breakpoint(1052) {
    padding-left: 0;
    padding-right: 0;
  }
}

h2 {
  font-family: font-name('default-black');
  font-size: rem(32);
  margin-top: 4rem;

  @include breakpoint('beyond-project') {
    margin-top: 8.8rem;
  }
}
</style>
