<template>
  <section>
    <article>
      <header>
        <h2>Just Booked</h2>
      </header>

      <div class="home-content">
        <products
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </article>

    <article>
      <header>
        <h2>Featured experiences</h2>
      </header>

      <div class="home-content">
        <products
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          featured
        />
      </div>
    </article>
  </section>
</template>

<script>
import Product from '@/components/Product'

export default {
  components: {
    products: Product
  },
  computed: {
    products() {
      return this.$store.getters['product/products']
    }
  }
}
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

.home-content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  a {
    max-width: 50%;
    min-width: rem(150);

    @include breakpoint(600) {
      max-width: 100/3 * 1%;
    }

    @include breakpoint(820) {
      max-width: 100/5 * 1%;
    }
  }

  @include breakpoint('beyond-project') {
    justify-content: space-evenly;
  }
}
</style>
