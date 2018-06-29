<template>
  <div>
    <!-- <div class="container" v-if="player.turn === room.turn && room.winner === -1"> -->
    <div class="container" v-if="room.winner === -1">
      <h2>hi {{player.name}}</h2>
      <p>{{room.players[0].name}} vs {{room.players[1].name}}</p>
      
      <div class="ngewrap">
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://1.bp.blogspot.com/-qTeBmXisqYU/WVcnXzDd54I/AAAAAAAAQGU/PJlShOMr6xwjgEsue3Z46FUEQBY3GOSXwCLcBGAs/s1600/no-nothing-480.gif"
            alt="Card image cap">
          <div class="card-body">
            <p class="card-text">ga bisa nyerang</p>
            <p class="card-text">damage : 0</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61FYUKHqDnL._SX522_.jpg   " alt="Card image cap">
          <div class="card-body">
            <p class="card-text">teflon emak</p>
            <p class="card-text">damage : 25</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://media.screwfix.com/is/image//ae235?src=ae235/2026C_P&$prodImageMedium$" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">kapak 212</p>
            <p class="card-text">damage : 30</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://cdn.britannica.com/700x450/70/123170-004-E7FBD22B.jpg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">ak-47</p>
            <p class="card-text">damage : 35</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt1fB4QcW6JTYZD48KJt3mch8c4NUfKbka_c0Fz6GZOcBcqFj"
            alt="Card image cap">
          <div class="card-body">
            <p class="card-text">granat nanas</p>
            <p class="card-text">damage : 40</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://cristology.files.wordpress.com/2013/08/11-tampar.jpg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">kepret mantan</p>
            <p class="card-text">damage : 95</p>
          </div>
        </div>
      </div>
      <h1>Terrr-{{room.players[player.turn].action}}</h1>
      <img src="https://media1.tenor.com/images/bfb7243cbedfe648c24edaeddb6c8494/tenor.gif" width="30%" class="flicker-in-1" v-if="room.players[player.turn].action.length>0">
      <br>
      <br>
      <br>
      <h4>Darah {{room.players[0].name}} tersisa:</h4>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" :style="{width: room.players[0].health+'%'}" aria-valuenow="100"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div>
        <h2>VS</h2>
      </div>
      <h4>Darah {{room.players[1].name}} tersisa:</h4>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" :style="{width: room.players[1].health+'%'}" aria-valuenow="100"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="card text-center">
        <div class="card-header">
          <h3>Death Dice</h3>
        </div>
        <div class="card-body" v-if="player.turn === room.turn">
          <h3 class="card-title">Kocok dadunya</h3>
          <img class="dadu mt-2" :src="linkshow">
          <br>
          <button type="button" class="btn btn-danger" @click="kocokdadu">Random</button>
          <button type="button" class="btn btn-success" @click="doneTurn">Lanjut</button>
        </div>
        <h2  v-if="player.turn !== room.turn">enemies turn</h2>
      </div>
    </div>
    <!-- <div class="container" v-else-if="player.turn !== room.turn && room.winner === -1">
      <h1>Mohon tunggu sekarang giliran musuh</h1>
      <img src="http://static.zerochan.net/CROWS.ZERO.full.1384713.jpg" alt="">
    </div> -->
    <div class="container" v-else-if="room.winner === player.turn">
      <h1>selamat kamu telah membantai musuh</h1>
      <button @click="back" type="button" class="btn btn-outline-primary">Back List Room !!</button>
      <br>
      <img src="http://static.zerochan.net/Takiya.Genji.full.1036507.jpg" alt="">
    </div>
    <div class="container" v-else>
      <h1>Cupuu!! kamu telah dibantai oleh musuh dan Terrr-{{room.players[player.turn].action}}</h1>
      <button @click="back" type="button" class="btn btn-outline-primary">Back List Room !!</button>
      <br>
      <img src="http://3.bp.blogspot.com/-6M68ZwGmbo4/UFJ1QhQoAkI/AAAAAAAAEDA/HPiZyWdMnnw/s1600/Naruto%2BSD%2BEpisode%2B24.jpg"
        alt="">
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'Gameplay',
    data() {
      return {
        // question:{}
        linkdadu: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png',
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png",
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/2000px-Dice-3-b.svg.png',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png',
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/2000px-Dice-6-b.svg.png"
        ],
        linkshow: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png"
      }
    },
    computed: {
      ...mapState([
        'question',
        'player',
        'room'
      ])
    },
    methods: {
      back() {
        this.$router.push('lobby')
      },
      kocokdadu() {
        let angka = Math.ceil(Math.random() * 6)
        console.log(angka)
        this.linkshow = this.linkdadu[angka-1]
        this.useSkill(angka-1)
      },
      useSkill(skillIndex) {
        this.$store.commit('useSkill', skillIndex)
        if (this.room.winner === this.player.turn) {
          this.$store.commit('updatePlayers')
          this.$store.dispatch('endTurn')
        }
      },
      doneTurn() {
        this.$store.commit('updatePlayers')
        this.$store.dispatch('endTurn')
        this.$store.dispatch('getQuestion')
      },
      decrease: function () {
        return `${this.player.health} + %`
      }
    },
    created() {
      this.$store.dispatch('getGameplayData')
      this.$store.dispatch('getQuestion')
    }
  }
</script>

<style scoped>
  h2 {
    font-family: 'Eater', cursive;
  }

  h4 {
    font-family: 'Orbitron', sans-serif;
    font-size: 20px;
  }

  div.container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .ngewrap {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
  }

  img.card-img-top {
    width: 120px;
    height: 120px;
  }

  div.card {
    margin: 3px;
    height: 30%;
  }

  .card-img-top {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
  }

  div.card.text-center {
    height: 60%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  p.card-text {
    font-size: 12px;
  }

  .dadu {
    width: 150px;
    height: 150px;
  }

  .btn {
    margin: 5px;
    font-size: 20px;
    width: 100%;
  }

  .flicker-in-1 {
    -webkit-animation: flicker-in-1 2s linear both;
    animation: flicker-in-1 2s linear both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2018-5-17 21:40:39
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * @animation flicker-in-1
 * ----------------------------------------
 */

  @-webkit-keyframes flicker-in-1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    10.1% {
      opacity: 1;
    }
    10.2% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    20.1% {
      opacity: 1;
    }
    20.6% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    30.1% {
      opacity: 1;
    }
    30.5% {
      opacity: 1;
    }
    30.6% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    45.1% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    55.1% {
      opacity: 0;
    }
    57% {
      opacity: 0;
    }
    57.1% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    60.1% {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    65.1% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    75.1% {
      opacity: 0;
    }
    77% {
      opacity: 0;
    }
    77.1% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    85.1% {
      opacity: 0;
    }
    86% {
      opacity: 0;
    }
    86.1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes flicker-in-1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    10.1% {
      opacity: 1;
    }
    10.2% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    20.1% {
      opacity: 1;
    }
    20.6% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    30.1% {
      opacity: 1;
    }
    30.5% {
      opacity: 1;
    }
    30.6% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    45.1% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    55.1% {
      opacity: 0;
    }
    57% {
      opacity: 0;
    }
    57.1% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    60.1% {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    65.1% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    75.1% {
      opacity: 0;
    }
    77% {
      opacity: 0;
    }
    77.1% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    85.1% {
      opacity: 0;
    }
    86% {
      opacity: 0;
    }
    86.1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>