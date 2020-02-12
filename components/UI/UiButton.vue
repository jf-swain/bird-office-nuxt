<template>
  <button :type="type" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: color('highlight');
  border-radius: 3px;
  border: 0;
  color: color('basic-white');
  font-family: font-name('default');
  font-size: rem(16);
  height: 51px;
  display: inline-block;
  padding-left: 2.2rem;
  padding-right: 2.2rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(color('highlight'), 0.8);
  }
}
</style>
