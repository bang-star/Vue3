<template>
  <img alt="Vue logo" src="./assets/logo.png">
  {{ message }}
  <h1>
    {{count}}
    <button @click="increment">Click Me</button>
  </h1>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      message: '안녕하세요',
      count: 0
    }
  },
  methods: {
    increment: function increment() {
      return this.count++;
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
    console.log("count: ", this.count)
  },
  created() {
    console.log("created")
    console.log("count: ", this.count)
  },
  beforeMount() {
    console.log("beforeMount")
    console.log("count: ", this.count)
  },
  mounted() {
    console.log("mounted")
    console.log("count: ", this.count)
  },
  beforeUpdate() {
    console.log("beforeUpdate")
    console.log("count: ", this.count)
  },
  updated() {
    console.log("updated")
    console.log("count: ", this.count)
  },
  beforeUnmount() {
    console.log("beforeUnmount")
    console.log("count: ", this.count)
  },
  unmounted() {
    console.log("unmounted")
    console.log("count: ", this.count)
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
