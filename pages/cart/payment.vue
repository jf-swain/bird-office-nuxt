<template>
  <section>
    <shopping-order :step="2" />

    <article>
      <header>
        <h2>Payment type</h2>
        <p>Choose how do you want to pay your order</p>
      </header>
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

<style lang="scss" scoped></style>
