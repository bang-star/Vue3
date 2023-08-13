<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <global-component />
    <local-component />
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import LocalComponent from "@/components/LocalComponent.vue";   // 로컬

const message = ref('Root Component');
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
