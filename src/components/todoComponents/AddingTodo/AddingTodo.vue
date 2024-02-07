<template>
  <v-form @submit.prevent>
    <v-text-field v-model="item" placeholder="Add Your todo"></v-text-field>
    <v-btn type="submit" block @click="handleAddTodo">Add Todo</v-btn>
  </v-form>
</template>

<script setup>
  import { ref } from 'vue'
  const { addTodo } = defineProps(['addTodo'])

  const item = ref('')

  const handleAddTodo = () => {
    addTodo(item.value)
    item.value = '' // Clear the item after adding todo
  }
</script>
