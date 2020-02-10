<template>
  <div class="shopping-cart">
    <span v-if="shoppingQuantity != 0" class="shopping-cart__amount">
      {{ shoppingQuantity }} items · ${{ shoppingCart | currency('en-US') }}
    </span>

    <span v-if="shoppingQuantity === 0" class="shopping-cart__amount">0</span>

    <p class="shopping-cart__name">shopping-cart</p>

    <img src="@/assets/images/shopping-cart-icon.svg" alt />
  </div>
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$store.getters['shopping/getTotalPrice']
    },
    shoppingQuantity() {
      return this.$store.getters['shopping/getTotalQuantity']
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping-cart {
  align-items: center;
  border-left: 0.5px solid color('border');
  display: flex;
  font-family: font-name('default-book');
  padding-left: 1.6rem;

  &__amount {
    background: color('highlight');
    border-radius: 12px;
    color: color('basic-white');
    font-size: rem(14);
    height: 2.4rem;
    line-height: 2.4rem;
    margin-right: 1.3rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;

    @include breakpoint('beyond-medium') {
      margin-right: 0;
    }
  }

  &__name {
    color: color('secondary');
    display: none;
    font-size: rem(16);
    margin-left: 1.3rem;
    margin-right: 2.4rem;

    @include breakpoint('beyond-medium') {
      display: block;
    }
  }
}
</style>
