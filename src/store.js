import Vue from 'vue'
import Vuex from 'vuex'
import './firebase'
import firebase from 'firebase'
const db = firebase.database()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    health: 200,
    point: 0
  },
  mutations: {
    register (state, payload) {
      state.username = payload
    }
  },
  actions: {
    register ({ commit, state }, payload) {
      let player = {
        name: payload,
        health: state.health,
        point: state.point
      }
      db.ref('users/').push(player)
      commit('register', payload)
      // simpan di localstorage biar gak ilang kalo di refresh
      localStorage.setItem('player', JSON.stringify(player))
    }
  }
})
