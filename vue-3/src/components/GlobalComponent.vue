<template>
  <div style="color: cornflowerblue;">
    {{ message }}
  </div>
</template>

<script setup>
import {ref} from "vue";

const message = ref('global-Component');
</script>

<style lang="scss" scoped>

</style>