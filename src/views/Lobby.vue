<template>
  <div>
    <div class="lobby">
      <div class="wrap">
        <a class="button" data-toggle="modal" data-target="#create">Create Room</a>
        <div class="modal" tabindex="-1" role="dialog" id='create'>
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">#Death Dice</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Enter Room name:</p>
                <input v-model="roomName" placeholder="enter name here">
              </div>
              <div class="modal-footer">
                <button :disabled="!roomName" type="button" class="btn btn-danger btn-lg" data-dismiss="modal" @click="createRoom">Save</button>
                <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <h1 class="list">Room List</h1>
        <div>
          <div v-for="(room, index) in rooms" :key="index">
            <div v-if="room.players.length===1" class="card" style="width: 30rem;">
              <div class="card-body">
                <h3 class="card-title">Death Dice Room</h3>
                <hr>
                <p class="card-text">{{room.name}}</p>
                <h5>Host: </h5>
                <p>{{ room.players[0].name }}</p>
                <a href="#" class="btn btn-danger btn-lg" @click="joinRoom(room.name)">Challenge!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lobby',
    data() {
      return {
        roomName: ''
      }
    },
    computed: {
      rooms() {
        return this.$store.state.rooms
      }
    },
    methods: {
      createRoom() {
        let getPlayer = JSON.parse(localStorage.getItem('player'))
        getPlayer.turn = 0
        getPlayer.attack = false
        getPlayer.answer = false
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
        localStorage.setItem('roomname', JSON.stringify(this.roomName))
        this.$store.dispatch('createRoom', {
          room,
          name: room.name,
        })
        this.$router.push('wait')
      },
      joinRoom: function (roomName) {
        let getPlayer = JSON.parse(localStorage.getItem('player'))
        getPlayer.turn = 1
        getPlayer.attack = false
        getPlayer.answer = false
        getPlayer.roomName = roomName
        getPlayer.action = ''

        localStorage.setItem('player', JSON.stringify(getPlayer))
        this.$store.dispatch('joinRoom', {
          roomName,
          getPlayer
        })

        this.$router.push('gameplay')
      }
    },
    created: function () {
      this.$store.dispatch('getAllRoom')
    }

  }
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 17px;
  }

  .wrap {
    position:absolute;
    top: 30%;
    left: 50%;
    margin-top: -86px;
    margin-left: -89px;
    text-align: center;
  }

  a {
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    display: block;
    margin: 20px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 25px 35px;
  }

  a.button {
    border-radius: 10px;
    color: rgba(5, 2, 1, 0.6);
    box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  }

  a.button:hover {
    color: rgba(20, 8, 8, 0.85);
    box-shadow: rgba(255, 0, 0, 0.7) 0 0px 0px 40px inset;
    cursor: pointer;
  }

  .btn-danger {
    width: 50px;
    font-size: 15px;
  }

  .list {
    margin-top: 40%;
    margin-bottom: 20%;
  }

  h1.list {
    margin-top: 10%;
  }

  h3 {
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }

  .card{
    border-radius: 10px;
    width: 30%;
    margin-bottom: 10%;
  }
</style>