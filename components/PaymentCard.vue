<template>
  <form @submit.prevent="submitCard">
    <ui-input
      v-model.number="card.number"
      :error="error && error.number ? error.number : error"
      >Card Number</ui-input
    >
    <ui-input
      v-model.number="card.cvv"
      :error="error && error.cvv ? error.cvv : error"
      >CVV</ui-input
    >

    <p v-if="error">{{ error.message }}</p>

    <ui-button type="submit">Submit</ui-button>
  </form>
</template>

<script>
import UiInput from '@/components/UI/UiInput'
import UiButton from '@/components/UI/UiButton'

export default {
  components: {
    UiInput,
    UiButton
  },
  data() {
    return {
      card: {
        number: null,
        expiration: null,
        cvv: null
      },
      error: null
    }
  },
  methods: {
    submitCard() {
      const { number, cvv } = this.card

      if (!number && !cvv) {
        return (this.error = { message: 'All infos are required' })
      }

      if (number.toString().length !== 16) {
        return (this.error = { number: { message: 'Error infos' } })
      }

      if (cvv.toString().length !== 3) {
        return (this.error = { cvv: { message: 'Error infos' } })
      }

      if (this.card)
        if (number && cvv) {
          this.$store.dispatch('payment/submitCard', this.card).catch((e) => {
            this.error = e
          })
        }
    }
  }
}
</script>

<style lang="scss" scoped></style>
