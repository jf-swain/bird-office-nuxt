export const state = () => ({
  shoppingAmount: 0,
  shopping: []
})

export const getters = {
  getTotalPrice: (state) => {
    return state.shoppingAmount
  },
  getTotalShopping: (state) => {
    return state.shopping
  }
}

export const mutations = {
  ADD_PRODUCT(state, product) {
    if (state.shopping.length > 0) {
      const index = state.shopping.findIndex(
        (prdt) => prdt.productId === product.productId
      )

      if (index > -1) {
        state.shopping[index].quantity += product.quantity
      } else {
        state.shopping.push(product)
      }
    } else {
      state.shopping.push(product)
    }
  },
  REMOVE_PRODUCT(state, id) {
    const index = state.shopping.findIndex((prdt) => prdt.productId === id)

    if (index > -1) {
      state.shopping.splice(index, 1)
    }
  }
}

export const actions = {
  addProduct: ({ commit }, order) => {
    commit('ADD_PRODUCT', order)
  },
  removeProduct: ({ commit }, id) => {
    commit('REMOVE_PRODUCT', id)
  }
}
