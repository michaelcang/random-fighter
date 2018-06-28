import Vue from 'vue'
import Vuex from 'vuex'
import '../firebase'
import firebase from 'firebase'
// import firebase from 'firebase'
// import {db} from '../firebase'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: false,
    health: 100,
    username: '',
    roomName: '',
    rooms: [],
    point: 0,
  },
  mutations: {
    changeStatus (state, payload) {
      state.status = payload
    },
    register(state, payload) {
      state.username = payload
    },
    getAllRoom: (state, payload) => {
      state.rooms = payload
    },
    setGameplayData(state, payload) {
      let player = JSON.parse(localStorage.getItem('player'))
      state.room = payload
      state.player = state.room.players[player.turn]
      localStorage.setItem('player', JSON.stringify(state.player))
    },

  },
  actions: {
    getStatusRoom (context, payload) {
      firebase.database().ref('rooms/' + payload + '/status').on('value', function (snapshot) {
        context.commit('changeStatus', snapshot.val())
      })
    },
    createRoom: function (context, payload) {
      firebase.database().ref('rooms/' + payload.name).set(payload.room)
    },
    delete: function (context){
      let payload = localStorage.getItem('roomname')
      let param = payload.substring(1,payload.length-1)
      firebase.database().ref('rooms/'+param).remove()
      .then (function(data){
        console.log(data, 'sukses')
      })
      .catch(function(error){
        console.log(error)
      })
    },
    getAllRoom: function (context) {
      firebase.database().ref('rooms/').on('value', function (snapshot) {
        let arrRoom = []

        snapshot.forEach(value => {
          arrRoom.push(value.val())
        })
        context.commit('getAllRoom', arrRoom)
      })
    },
    joinRoom: function (context, payload) {
      firebase.database().ref(`rooms/${payload.roomName}/players/1`).set(payload.getPlayer)
      firebase.database().ref(`rooms/${payload.roomName}`).update({status: true})
    },
    register(context, payload) {
      firebase.database().ref('users/').push({
        name: payload,
        health: context.state.health,
        point: context.state.point
      })
      context.commit('register', payload)
      let player = {
        name: payload,
        health: context.state.health,
        point: context.state.point
      }
      localStorage.setItem('player', JSON.stringify(player))
    },

  }
})
