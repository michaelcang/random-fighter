<template>
  <div>
    <div>
      <h1>Please Wait</h1>
    </div>
    <div>
      <button @click="back" type="button" class="btn btn-outline-primary">Back List Room !!</button>
    </div>
  </div>


</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'wait',
    data() {
      return {
        room: ''
        // status: false,
      }
    },
    methods: {
      back() {
        this.$store.dispatch('delete')
        this.$router.push('lobby')
      }
    },
    computed: {
      ...mapState([
        'status'
      ])
    },
    created() {
      let data = localStorage.getItem('player')
      this.room = JSON.parse(data).roomName
      this.$store.dispatch('getStatusRoom', this.room)
    },
    watch: {
      status() {
        // this.status = this.$store.state.status
        if (this.status === true) {
          this.$router.push('gameplay')
        }
      }
    }
  }
</script>

<style>
  .btn-outline-primary {
    font-size: 20px;
  }
</style>