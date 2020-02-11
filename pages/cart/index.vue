<template>
  <section>
    <shopping-order />

    <article v-if="products.length === 0">
      <p class="shopping-cart-empty">Your Shopping Cart is empty.</p>
      <nuxt-link to="/" class="shopping-cart-empty-link">
        Return to list of product
      </nuxt-link>
    </article>

    <article>
      <table>
        <shopping-cart-product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </table>
    </article>

    <shopping-cart-proceed v-if="products.length > 0" />
  </section>
</template>

<script>
import ShoppingOrder from '@/components/ShoppingOrder'
import ShoppingCartProduct from '@/components/ShoppingCartProduct'
import ShoppingCartProceed from '@/components/ShoppingCartProceed'

export default {
  components: {
    ShoppingOrder,
    ShoppingCartProduct,
    ShoppingCartProceed
  },
  computed: {
    products() {
      return this.$store.getters['shopping/getTotalShopping']
    }
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

article {
  max-width: $project-inner;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}

.shopping-cart-empty {
  color: color('secondary');
  font-family: font-name('default-bold');
  font-size: rem(28);
  text-align: center;

  &-link {
    color: color('secondary');
    display: block;
    font-family: font-name('default-bold');
    font-size: rem(14);
    text-align: center;
  }
}

table {
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid color('secondary');

    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>
