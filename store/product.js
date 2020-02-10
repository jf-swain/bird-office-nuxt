export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCT(state, products) {
    state.products = products
  }
}

export const actions = {}

export const getters = {
  products: (state) => {
    return state.products
  }
}
