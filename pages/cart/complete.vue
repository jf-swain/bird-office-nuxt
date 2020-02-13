<template>
  <div>
    <shopping-order :step="3" />
  </div>
</template>

<script>
import ShoppingOrder from '@/components/ShoppingOrder'

export default {
  components: {
    ShoppingOrder
  },
  middleware: ['check-auth', 'auth', 'shipping']
}
</script>

<style lang="scss" scoped></style>
