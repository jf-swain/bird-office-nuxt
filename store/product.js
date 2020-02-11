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
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  }
}
