<template>
  <aside>
    <div class="order-wrapper">
      <div class="order order--active">
        <span class="order__number">1</span>
        <div>
          <p class="order__title">Shopping Cart</p>
          <p class="order__description">Manage your item list</p>
        </div>
      </div>

      <div class="order-chevron">
        <img src="@/assets/images/chevron-icon.svg" alt="" />
      </div>

      <div class="order">
        <span class="order__number">2</span>
        <div>
          <p class="order__title">Account & Payment</p>
          <p class="order__description">Enter your account and payment type</p>
        </div>
      </div>

      <div class="order-chevron">
        <img src="@/assets/images/chevron-icon.svg" alt="" />
      </div>

      <div class="order">
        <span class="order__number">3</span>
        <div>
          <p class="order__title">Complete Order</p>
          <p class="order__description">Review and submit order</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
aside {
  background: rgba(color('highlight'), 0.1);
}

.order-wrapper {
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

.order {
  align-items: center;
  display: flex;
  opacity: 0.3;

  &--active {
    opacity: 1;
  }

  &__number {
    color: color('highlight');
    font-family: font-name('primary-light');
    font-size: rem(70);
    margin-right: 1.5rem;
  }

  &__title {
    color: color('highlight');
    font-family: font-name('default-bold');
    font-size: rem(28);
    margin: 0 0 1rem 0;
  }

  &__description {
    color: color('default');
    font-family: font-name('default');
    font-size: rem(14);
    margin: 0;
  }
}
</style>
