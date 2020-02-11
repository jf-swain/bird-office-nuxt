import Data from '@/data/data'

export const actions = {
  nuxtServerInit(vueContext, context) {
    vueContext.commit('product/SET_PRODUCT', Data)
  }
}

export const getters = {
  getTotalQuantity: (state) => {
    const {
      shopping: { shopping }
    } = state

    return shopping.length > 0
      ? shopping.reduce((a, b) => ({
          quantity: a.quantity + b.quantity
        })).quantity
      : 0
  },
  getTotalPrice: (state) => {
    const {
      shopping: { shopping }
    } = state

    let totalPrice = 0

    if (shopping.length > 0) {
      shopping.map((elmt) => (totalPrice += elmt.quantity * elmt.price))
    }

    return totalPrice
  }
}
