<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-bind:id="message">
      {{ message }}
    </h1>
    {{ count }}
    <button @click="increment">
      Click Me!
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '안녕하세요',
      count: 0
    }
  },
  methods: {
    increment() {
      return this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
