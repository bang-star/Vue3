<template>
  <div style="color: pink">
    {{ message }}
  </div>
</template>

<script setup>
import {ref} from "vue";

const message = ref('local-Component');
</script>

<style lang="scss" scoped>

</style>