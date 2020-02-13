import Vue from 'vue'
import Vuex from 'vuex'

import { actions, mutations } from '@/store/shopping'

Vue.use(Vuex)

describe('Shopping action', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: { shopping: [] },
      mutations,
      actions: {
        addProduct: actions.addProduct
      }
    })
  })

  it('Dispatch an action/mutation add product', () => {
    store.dispatch('addProduct', { id: '2', quantity: 3 })
    expect(store.state.shopping).toHaveLength(1)
    expect(store.state.shopping).toEqual([{ id: '2', quantity: 3 }])
  })
})
