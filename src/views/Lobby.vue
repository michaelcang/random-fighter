<template>
  <button @click="exit" type="button" class="btn btn-outline-dark">Exit Game</button>
</template>

<script>
export default {
  name: 'lobby',
  data () {
    return {

    }
  },
  methods: {
    exit: function () {
      localStorage.removeItem('player')
      this.$router.push('/')
    }
  },
  created () {
    if (!localStorage.getItem('player')) {
      this.$router.push('/')
    }
  }
}
</script>
