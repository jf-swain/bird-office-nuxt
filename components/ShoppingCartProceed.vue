<template>
  <footer>
    <div class="proceed-wrapper">
      <nuxt-link to="/" class="continue">
        Continue Shopping
      </nuxt-link>

      <div class="proceed-continue">
        <div class="total">
          <p>Total:</p>
          <span>${{ shoppingCart | currency('en-US') }}</span>
        </div>

        <nuxt-link to="/cart/payment">
          Proceed
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$store.getters.getTotalPrice
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: rgba(color('highlight'), 0.1);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
}

.proceed-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 12rem;
  margin-left: auto;
  margin-right: auto;
  max-width: $project-inner;
  padding-left: $project-mobile-padding;
  padding-right: $project-mobile-padding;
}

.continue {
  text-transform: uppercase;
  text-decoration: none;
  color: color('highlight');
  font-size: rem(17);
}

.total {
  p {
    font-size: rem(17);
    margin: 0;
  }

  span {
    font-size: rem(24);
    font-family: font-name('primary-semibold');
  }
}

.proceed-continue {
  display: flex;
  align-items: center;

  a {
    background-color: color('highlight');
    border-radius: 3px;
    border: 0;
    color: color('basic-white');
    font-family: font-name('default');
    font-size: rem(16);
    height: 51px;
    margin-left: 2rem;
    padding-left: 2.2rem;
    padding-right: 2.2rem;
    line-height: 50px;
    text-decoration: none;
  }
}
</style>
