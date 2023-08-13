<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <my-component />
    <global-component />
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: 'App',
  components: {
    MyComponent   // 지역
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },
  updated() {
    console.log("updated")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
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
