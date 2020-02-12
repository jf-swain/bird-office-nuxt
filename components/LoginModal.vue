<template>
  <modal-layout title="Sign in" :is-open="isOpen">
    <form @submit.prevent="submitLogin">
      <div class="input-group">
        <label for="email">Email:</label>

        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="test@test.com"
          :class="[error ? 'input-error' : '']"
        />

        <p v-if="error" class="input-group__error">{{ error.message }}</p>
      </div>

      <div class="form-footer">
        <ui-button type="submit">Sign In</ui-button>
      </div>
    </form>
  </modal-layout>
</template>

<script>
import ModalLayout from '@/components/UI/ModalLayout'
import UiButton from '@/components/UI/UiButton'

export default {
  components: {
    ModalLayout,
    UiButton
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
.input-group {
  margin-bottom: 2rem;

  label {
    font-family: font-name('default');
    font-size: rem(14);
  }

  input {
    font-family: font-name('primary-light');
    font-size: rem(14);
    display: block;
    width: 100%;
    height: 2rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid color('default');
    margin-top: 1rem;

    &.input-error {
      border-bottom: 1px solid color('error');
    }
  }

  &__error {
    font-family: font-name('primary-light');
    font-size: rem(14);
    text-align: center;
    color: color('error');
  }
}

.form-footer {
  text-align: center;
  width: 100%;
}
</style>
