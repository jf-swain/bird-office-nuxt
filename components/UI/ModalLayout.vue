<template>
  <div v-if="isOpen">
    <div class="modal-backward" @click="onCloseModal(false)"></div>
    <div class="modal">
      <header class="modal-header">
        {{ title }}
        <button class="modal-header__close" @click="onCloseModal(false)">
          <img src="@/assets/images/close-icon.svg" alt="close modal" />
        </button>
      </header>

      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Modal Title'
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    onCloseModal(value) {
      this.$bus.$emit('modalSignin', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-backward {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(color('secondary'), 0.6);
}

.modal {
  background-color: color('basic-white');
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 30rem;
  z-index: 1;

  &__content {
    padding: 2rem 1rem;
  }
}

.modal-header {
  font-family: font-name('default-bold');
  font-size: rem(32);
  color: color('highlight');
  padding: 0 1rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(color('highlight'), 0.1);

  &__close {
    border: 0;
    background: transparent;
  }
}
</style>
