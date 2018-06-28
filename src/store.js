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
    point: 0,
    rooms: []
  },
  mutations: {
    register (state, payload) {
      state.username = payload
    },
    getAllRooms: (state, payload) => {
      state.rooms = payload
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
    },
    createRoom: function (context, payload) {
      db.ref('rooms/' + payload.name).set(payload.room)
    },
    getAllRooms: function ({ commit }, payload) {
      db.ref('rooms/').on('value', function (snapshot) {
        let roomsArray = []
        snapshot.forEach(value => {
          roomsArray.push(value.val())
        })
        console.log(roomsArray)
        commit('getAllRooms', roomsArray)
      })
    },
    joinRoom: function (context, payload) {
      db.ref(`rooms/${payload.roomName}/players/1`).set(payload.getPlayer)
      db.ref(`rooms/${payload.roomName}`).update({status: true})
    }
  }
})
