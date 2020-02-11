<template>
  <div class="action">
    <div class="action__number">
      <button
        aria-label="substract quantity of product"
        :disabled="quantity === 1"
        role="button"
        @click="substractQuantity"
      >
        <img src="@/assets/images/minus-icon.svg" alt />
      </button>

      <span>{{ quantity }}</span>

      <button
        aria-label="Add the quantity of product"
        role="button"
        @click="addQuantity"
      >
        <img src="@/assets/images/plus-icon.svg" alt />
      </button>
    </div>

    <button
      class="action__add"
      role="button"
      @click="addProduct(id, quantity, price)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    addProduct(id, quantity, price) {
      const order = {
        productId: id,
        price,
        quantity
      }

      this.$store.dispatch('shopping/addProduct', order)
      this.quantity = 1
    },
    addQuantity() {
      this.quantity += 1
    },
    substractQuantity() {
      this.quantity = this.quantity === 1 ? 1 : this.quantity - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.action {
  align-items: center;
  display: flex;

  &__number {
    align-items: center;
    background: #e5e5e580;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 6px;

    button {
      border: 1px solid #e5e5e5;
      height: 3.6rem;
      padding: 0;
      width: 3.6rem;

      &:hover {
        cursor: pointer;
      }

      &[disabled] {
        border: 0;

        &:hover {
          cursor: not-allowed;
        }
      }
    }

    span {
      color: color('secondary');
      font-family: font-name('default-bold');
      font-size: rem(16);
      margin-left: 1.6rem;
      margin-right: 1.6rem;
    }
  }

  &__add {
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

    &:hover {
      cursor: pointer;
      background-color: rgba(color('highlight'), 0.8);
    }
  }
}
</style>
