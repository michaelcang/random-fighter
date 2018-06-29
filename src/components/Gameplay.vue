<template>
  <div>
    <h1>Weapon You Can Use</h1>
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
    <img class="dadu mt-2" :src="linkshow"><br>
    <button type="button" class="btn btn-light mt-2 mb-2" @click="kocokdadu">Random</button>
    <div class="d-flex justify-content-start">

    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>
        </div>
        <div class="col-sm">
          <h7>
          <----------Joni
          ==============
          Jalu---------->
        </h7>
        </div>
        <div class="col-sm">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
  methods:{
    kocokdadu(){
      let angka = Math.ceil(Math.random() * 6)
      this.linkshow = this.linkdadu[angka-1]
      console.log(angka);
    },
  }
}
</script>

<style lang="css" scoped>
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
</style>
