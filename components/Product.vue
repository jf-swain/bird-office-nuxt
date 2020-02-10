<template>
  <router-link
    v-if="product.featured === featured"
    :to="/product/ + product.id"
    class="link"
  >
    <div class="product">
      <img :src="require(`../assets/images/product/${product.image}`)" alt />

      <p class="product__description">
        <span class="product__amount">
          ${{ product.price | currency('en-US') }}
        </span>

        {{ product.title }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    featured: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  width: 100%;
  text-decoration: none;
}

.product {
  color: color('primary');
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: rem(15);

  img {
    width: 100%;
  }

  &__amount {
    font-family: font-name('primary-semibold');
  }

  &__description {
    font-family: font-name('primary-light');
  }
}
</style>
