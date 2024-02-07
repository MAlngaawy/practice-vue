<script setup>
  const { changeSeen } = defineProps(['changeSeen'])
  const message = 'Click To Show Message'
</script>

<template>
  <v-btn @click="changeSeen">{{ message }}</v-btn>
</template>
