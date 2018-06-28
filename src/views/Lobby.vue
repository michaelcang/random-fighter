<template>
  <div class="lobby">
    <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#create">Create Room</button>
    <button @click="exit" type="button" class="btn btn-outline-dark">Exit Game</button>
    <div class="modal fade" tabindex="-1" role="dialog" id="create">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">#RandomFighter</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="user">Enter Room Name:</label>
            <input v-model="roomName" type="text" placeholder="Room Name...">
          </div>
          <div class="modal-footer">
            <button @click="createRoom" :disabled="!roomName" type="button" class="btn btn-danger" data-dismiss="modal">Create</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
    <h3>Room List</h3>
    <div class="list">
      <div class="card" v-for="(room, index) in rooms" :key="index">
        <div class="card-body">
          <small>RandomFighter</small>
          <br>
          <h4 class="card-title">{{room.name}}</h4><hr>
          <h5>Host: </h5>
          <p>{{ room.players[0].name }}</p>
          <a href="#" class="btn btn-danger" @click="joinRoom(room.name)">Challenge</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../firebase'
// import firebase from 'firebase'
export default {
  name: 'lobby',
  data () {
    return {
      roomName: ''
    }
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    createRoom: function () {
      let getPlayer = JSON.parse(localStorage.getItem('player'))
      getPlayer.turn = 0
      getPlayer.attack = false
      getPlayer.roomName = this.roomName
      getPlayer.action = ''

      let room = {
        name: this.roomName,
        players: [getPlayer],
        turn: 0,
        action: '',
        status: false,
        winner: -1
      }
      localStorage.setItem('player', JSON.stringify(getPlayer))
      this.$store.dispatch('createRoom', {room, name: this.roomName})
      this.$router.push('wait')
    },
    joinRoom: function (roomName) {
      console.log(roomName);
      let getPlayer = JSON.parse(localStorage.getItem('player'))
      getPlayer.turn = 1
      getPlayer.attack = false
      getPlayer.roomName = roomName
      getPlayer.action = ''

      localStorage.setItem('player', JSON.stringify(getPlayer))
      this.$store.dispatch('joinRoom', {roomName, getPlayer})
      this.$router.push('gameplay')
    },
    exit: function () {
      localStorage.removeItem('player')
      this.$router.push('/')
    }
  },
  created () {
    if (!localStorage.getItem('player')) {
      this.$router.push('/')
    } else {
      this.$store.dispatch('getAllRooms')
    }
  }
}
</script>

<style>
.card {
  height: 80%;
}

.list {
  width: 400px;
  margin: auto;
}

.btn {
  margin: 10px;
}

.modal-body input {
  margin-left: 10px;
}

h3 {
  font-family: 'Eater', cursive;
  color: #dc3545;
  margin: 40px 0;
}
</style>
