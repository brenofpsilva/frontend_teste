import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: null,
    user: null,
    // user: null
  },
  mutations: {
    authUser (state, userData) {
      state.access_token = userData.token
      state.user = userData.user
    },
    clearAuth (state) {
      state.access_token = null
      state.user = null
    }
  },
  actions: {
    signup ({commit}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAv71t6_6YOyOdpbkmsvqtE2i68uhL3U1g', {
        username: authData.username,
        password: authData.password,
      })
        .then(res => {
          console.log(res)
           localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('user', res.data.user.id)
          commit('authUser', {
            token: res.data.access_token,
            user: res.data.user.id
          })
        
          router.push("/dashboard")
        })
        .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post('http://localhost:8000/api/login', {
        username: authData.username,
        password: authData.password,
      })
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('user', res.data.user.id)
          commit('authUser', {
            token: res.data.access_token,
            user: res.data.user
          })
          router.push("/dashboard")
        })
        .catch(error => alert(error))
    },
    logout ({commit}) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.replace('/')
    },
    AutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const user = localStorage.getItem('user')
      commit('authUser', {
        token: token,
        user: user
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    ifAuthenticated (state) {
      return state.access_token !== null
    }
  }
})
