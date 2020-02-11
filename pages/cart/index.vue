<template>
  <section>
    <shopping-order />

    <article>
      <p class="shopping-cart-empty">Your Shopping Cart is empty.</p>
      <nuxt-link to="/" class="shopping-cart-empty-link">
        Return to list of product
      </nuxt-link>
    </article>
  </section>
</template>

<script>
import ShoppingOrder from '@/components/ShoppingOrder'

export default {
  components: {
    ShoppingOrder
  }
}
</script>

<style lang="scss" scoped>
section {
  @include breakpoint(1052) {
    padding-left: 0;
    padding-right: 0;
  }
}

.shopping-cart-empty {
  color: color('secondary');
  font-family: font-name('default-bold');
  font-size: rem(28);
  margin-top: 5rem;
  text-align: center;

  &-link {
    color: color('secondary');
    display: block;
    font-family: font-name('default-bold');
    font-size: rem(14);
    text-align: center;
  }
}
</style>
