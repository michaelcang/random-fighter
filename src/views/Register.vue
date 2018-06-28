<template>
  <div class="register">
    <div class="form-group">
      <label for="user">Welcome, Guest</label>
      <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter Your Name"><br>
      <button @click="register" :disabled="!username" type="button" class="btn btn-outline-danger">Start Playing</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data: function () {
    return {
      username: '',
    }
  },
  methods: {
    register: function () {
      this.$store.dispatch('register', this.username);
      this.username = '';
      this.$router.push('lobby');
    }
  },
  created() {
    if (localStorage.getItem('player')) {
      this.$router.push('lobby');
    }
  }
}
</script>

<style>

.form-group {
  margin-top: 150px;
  text-align: center;
}

.form-control {
  width: 30%;
  margin: auto;
  text-align: center;
  margin-bottom: -10px;
}
</style>
