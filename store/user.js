import Cookie from 'js-cookie'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  authenticateUser(vuexContext, authData) {
    const AuthEmail = 'test@test.com'

    if (authData.email === AuthEmail) {
      const TOKEN = 'thisIsTheFakeTokenID'
      vuexContext.commit('setToken', TOKEN)
      localStorage.setItem('token', TOKEN)
      Cookie.set('jwt', TOKEN)
    } else {
      return Promise.reject(new Error('Wrong email'))
    }
  },
  initAuth(vuexContext, req) {
    let token

    if (req) {
      if (!req.headers.cookie) {
        return
      }

      const jwtCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('jwt='))

      if (!jwtCookie) {
        return
      }

      token = jwtCookie.split('=')[1]
    } else {
      token = localStorage.getItem('token')

      if (!token) {
        return
      }
    }

    if (!token) {
      vuexContext.dispatch('logout')
      return
    }

    vuexContext.commit('setToken', token)
  },
  logout(vuexContext) {
    vuexContext.commit('clearToken')
    Cookie.remove('jwt')

    if (process.client) {
      localStorage.removeItem('token')
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
