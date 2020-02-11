<template>
  <tr>
    <td>
      <div
        class="img"
        :style="{
          backgroundImage:
            'url(' + require(`@/assets/images/product/${pdt.image}`) + ')'
        }"
      ></div>
    </td>

    <td>
      <p class="name">
        {{ pdt.title }}
      </p>
    </td>

    <td>
      <span class="price">
        {{ pdt.price | currency('en-US') }}
      </span>
    </td>

    <td>
      <span class="quantity"> x {{ product.quantity }} </span>
    </td>

    <td>
      <span class="price">
        ${{ (pdt.price * product.quantity) | currency('en-US') }}
      </span>
    </td>

    <td>
      <button class="remove" @click="removeProduct(product.productId)">
        <img src="../assets/images/trash-icon.svg" alt="remove product" />
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    pdt() {
      return this.$store.getters['product/getProductById'](
        this.$props.product.productId
      )
    }
  },
  methods: {
    removeProduct(id) {
      this.$store.dispatch('shopping/removeProduct', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  height: 6rem;
  width: 6rem;
  background-image: url('../assets/images/product/product_1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid color('secondary');
}

.name {
  color: color('default');
  font-family: font-name('primary-light');
  font-size: rem(18);
}

.price,
.quantity {
  color: colo('default');
  font-family: font-name('primary-semibold');
  font-size: rem(18);
}

.remove {
  border: 0;
  background: transparent;
}
</style>
