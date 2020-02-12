<template>
  <div>
    <shopping-order :step="2" />
    <section>
      <article>
        <header>
          <h2>Account</h2>
          <p>Sign in to your account</p>
        </header>
        <div v-if="!isLogged">
          <ui-button role="button" @click="openSignInModal">Sign in</ui-button>
        </div>

        <div v-if="isLogged">
          <p>You are logged as test user</p>
        </div>
      </article>

      <article v-if="isLogged">
        <header>
          <h2>Payment type</h2>
          <p>Choose how do you want to pay your order</p>
        </header>

        <form>
          <input v-model="cardNumber" type="number" />
          <input v-model="cardExpiration" type="date" />
          <input v-model="cardCVV" type="number" />
        </form>
      </article>
    </section>
    <nuxt-link to="/cart/finish">Continue</nuxt-link>
    <login-modal :is-open="isOpen" />
  </div>
</template>

<script>
import ShoppingOrder from '@/components/ShoppingOrder'
import UiButton from '@/components/UI/UiButton'
import LoginModal from '@/components/LoginModal'

export default {
  components: {
    ShoppingOrder,
    UiButton,
    LoginModal
  },
  props: {
    error: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  middleware: 'shipping',
  computed: {
    isLogged() {
      return this.$store.getters['user/isAuthenticated']
    }
  },
  created() {
    this.$bus.$on('modalSignin', (value) => {
      this.isOpen = value
    })
  },
  methods: {
    openSignInModal() {
      this.isOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  max-width: $project-inner;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}

header {
  h2 {
    font-family: font-name('default-black');
    font-size: rem(32);
    margin-top: 4rem;
  }

  p {
    font-family: font-name('default');
    font-size: rem(14);
    color: color('default');
  }
}

p {
  font-family: font-name('default');
  font-size: rem(14);
  color: color('highlight');
}
</style>
