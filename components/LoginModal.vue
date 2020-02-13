<template>
  <modal-layout title="Sign in" :is-open="isOpen">
    <form @submit.prevent="submitLogin">
      <ui-input
        v-model="email"
        type="email"
        placeholder="test@test.com"
        :error="error"
      >
        Email:
      </ui-input>

      <div class="form-footer">
        <ui-button type="submit">Sign In</ui-button>
      </div>
    </form>
  </modal-layout>
</template>

<script>
import ModalLayout from '@/components/UI/ModalLayout'
import UiButton from '@/components/UI/UiButton'
import UiInput from '@/components/UI/UiInput'

export default {
  components: {
    ModalLayout,
    UiButton,
    UiInput
  },
  props: {
    isOpen: {
      type: Boolean
    }
  },
  data() {
    return {
      email: '',
      error: null
    }
  },
  methods: {
    submitLogin() {
      this.$store
        .dispatch('user/authenticateUser', {
          email: this.email
        })
        .then(() => {
          this.$bus.$emit('modalSignin', false)
        })
        .catch((e) => {
          this.error = e
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-footer {
  text-align: center;
  width: 100%;
}
</style>
