export const state = () => ({
  shoppingAmount: 0,
  shoppingQuantity: 0
})

export const getters = {
  getTotalPrice: (state) => {
    return state.shoppingAmount
  },
  getTotalQuantity: (state) => {
    return state.shoppingQuantity
  }
}

export const mutations = {
  ADD_PRODUCT(state, { productPrice, quantity }) {
    state.shoppingAmount += productPrice * quantity
    state.shoppingQuantity += quantity
  }
}

export const actions = {
  addProduct: ({ commit }, order) => {
    commit('ADD_PRODUCT', order)
  }
}
