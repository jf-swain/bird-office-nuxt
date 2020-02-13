<template>
  <div class="input-group">
    <label><slot /></label>

    <input
      v-bind="$attrs"
      :value="value"
      :class="[error ? 'input-error' : '']"
      @input="$emit('input', $event.target.value)"
    />

    <p v-if="error" class="input-group__error">{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: [Object, Error],
      default: null
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
</style>
