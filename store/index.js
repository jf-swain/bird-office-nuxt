import Data from '@/data/data'

export const actions = {
  nuxtServerInit(vueContext, context) {
    vueContext.commit('product/SET_PRODUCT', Data)
  }
}
