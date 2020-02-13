export const state = () => ({
  card: null
})

export const getters = {
  getCardInfos(state) {
    return state.card
  }
}

export const mutations = {
  registerCard(state, card) {
    state.card = card
  }
}

export const actions = {
  submitCard(vuexContext, card) {
    if (card) {
      vuexContext.commit('registerCard', card)
    } else {
      return Promise.reject(new Error('There is a error in your card info'))
    }
  }
}
