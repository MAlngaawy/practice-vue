<template>
  <div>
    <ListItem
      v-for="todo of todos"
      :item="todo"
      :deleteTodo="deleteTodo"
      :doneTodo="doneTodo"
    />
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue'
  import { defineProps } from 'vue'

  const { todos, deleteTodo, doneTodo } = defineProps([
    'todos',
    'deleteTodo',
    'doneTodo',
  ])
</script>
