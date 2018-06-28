<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  // body {
  //   background-image: url('https://00e9e64bac025f2adb837b3127f25d55efe02c82e94c81b348-apidata.googleusercontent.com/download/storage/v1/b/soc-med.unguhiu.com/o/bg_dice_death.jpg?qk=AD5uMEs5aCTCf23xfvdObd3Bi70hdoFteWPnEXb_eC2_lwmOBX-dcYLc23pgHz2m4uXXBhjykd1rEU-o-G5L8-lSERcYAtTIX7SUQNt93TwKzklRm9dbVUYLCvxcesS2dbe2djnS7ACVFe92LM8sZigJO3tno2ZtcSeujH2WdYNNdpXQLWXeu93aUeP2dZlmTTj8hREaUmAb8HRBCZxzXMubkSwiWSbYxMJr0nvqMliuSbrcgYvkEcSJtsw_a7xCSbz1it-gCHU7Z7uM_8TI-db8kaRVEb7q0BzU1ieICNYou94YqEoyn1olCxVLRKKjtE2wUt10YjMX47y37mo_mFuoNJutAylSiNzW1cINwrc5A8qxKOpBReSzjFyNxIz1g1hRino8ngPQEgwq0KEIOdhUYyUG5jhhgZF83xYmLAq8AD-B6IrKeoDdznGvxWe2obEECnXT7LUXZQdquMt-fYUfm5pH5eKiLM_-Jwwzl02ciD6mD1hnp-KMUkFTqATdRG--tpxeE-adOVnU97yWAxY74_z2Amp9615xLhEOhL9ycLars6hYcil47-hpK8ZERt0heF0VcyNJScQx1ctPh6GyF3gr9Y76dbTPadyYHAdmJAGd3h7MQFSD43wbsgxq0NlKvZ6aqLEwI0neCti7sxqvOgf29IdYR3nOGycKfJlPNukt4wyb6QSIApG8A3Fcq5FDqhDhYw0Q89Te3aRduBES4L7v-MNnmms5337FOsKMx15lUOr8CjU');
  //   background-repeat: no-repeat;
  //   background-position: 0 0;
  //   background-size: cover;
  // }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>