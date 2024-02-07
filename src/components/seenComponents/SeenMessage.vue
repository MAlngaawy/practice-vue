<script setup>
  defineProps(['seen'])
</script>

<template>
  <h1 v-if="seen">You can se me Now</h1>
</template>

<style>
  h1 {
    margin: 20px 0;
    color: white;
  }
</style>
