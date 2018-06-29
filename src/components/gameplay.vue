<template>
  <div>
    <div class="container" v-if="player.turn === room.turn && room.winner === -1">
      <h2>hi {{player.name}}</h2>
      <h2>point kamu : {{player.point}}</h2>
      <div class="ngewrap" style="margin:  0 0 0 2% ;">
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://1.bp.blogspot.com/-qTeBmXisqYU/WVcnXzDd54I/AAAAAAAAQGU/PJlShOMr6xwjgEsue3Z46FUEQBY3GOSXwCLcBGAs/s1600/no-nothing-480.gif" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61FYUKHqDnL._SX522_.jpg   " alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://media.screwfix.com/is/image//ae235?src=ae235/2026C_P&$prodImageMedium$" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://cdn.britannica.com/700x450/70/123170-004-E7FBD22B.jpg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt1fB4QcW6JTYZD48KJt3mch8c4NUfKbka_c0Fz6GZOcBcqFj" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 14rem;">
          <img class="card-img-top" src="https://cristology.files.wordpress.com/2013/08/11-tampar.jpg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <h1>Terrr-{{room.players[player.turn].action}}</h1>
      <img src="http://webiconspng.com/wp-content/uploads/2017/09/Blood-PNG-Image-69403.png" width="30%" class="flicker-in-1" v-if="room.players[player.turn].action.length>0">
      <h4>Darah tersisa:</h4>
      <div class="progress">                                                           
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" :style="{width: player.health+'%'}" aria-valuenow="100" aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
      <div class="card text-center">
        <div class="card-header">
          <h3>Death Dice</h3>
        </div>
        <div class="card-body">
          <h3 class="card-title">Kocok dadunya</h3>
          <img class="dadu mt-2" :src="linkshow"><br>
          <button type="button" class="btn btn-light mt-2 mb-2" @click="kocokdadu">Random</button>
          <button class="btn btn-secondary" @click="doneTurn">Lanjut</button>
        </div>
      </div>
    </div>
    <div class="container" v-else-if="player.turn !== room.turn && room.winner === -1">
      <h1>Mohon tunggu sekarang giliran musuh</h1>
      <img src="http://static.zerochan.net/CROWS.ZERO.full.1384713.jpg" alt="">
    </div>
    <div class="container" v-else-if="room.winner === player.turn">
      <h1>selamat kamu telah membantai musuh</h1>
      <img src="http://static.zerochan.net/Takiya.Genji.full.1036507.jpg" alt="">
    </div>
    <div class="container" v-else>
      <h1>Cupuu!! kamu telah dibantai oleh musuh</h1>
      <img src="http://3.bp.blogspot.com/-6M68ZwGmbo4/UFJ1QhQoAkI/AAAAAAAAEDA/HPiZyWdMnnw/s1600/Naruto%2BSD%2BEpisode%2B24.jpg" alt="">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Gameplay',
    data () {
      return {
          // question:{}
          linkdadu:[
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png',
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png",
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/2000px-Dice-3-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png',
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/2000px-Dice-6-b.svg.png"
      ],
      linkshow:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png"
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
      kocokdadu(){
        let angka = Math.ceil(Math.random() * 6)
        this.linkshow = this.linkdadu[angka-1]
        this.useSkill(angka)
      },
      useSkill (skillIndex) {
        this.$store.commit('useSkill', skillIndex)
        if (this.room.winner === this.player.turn) {
          this.$store.commit('updatePlayers')
          this.$store.dispatch('endTurn')
        }
      },
      doneTurn () {
        this.$store.commit('updatePlayers')
        this.$store.dispatch('endTurn')
        this.$store.dispatch('getQuestion')
      },
      decrease: function(){
        return `${this.player.health} + %`
      }
    },
    created () {
      this.$store.dispatch('getGameplayData')
      this.$store.dispatch('getQuestion')
    }
}
</script>

<style scoped>
.ngewrap {
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
  }
  .card-img-top{
    width : 150px;
    height: 150px;
  }
  .dadu{
    width : 150px;
    height: 150px;
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





