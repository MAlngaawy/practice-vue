<template>
  <div>
    <ListItem
      v-for="todo of reversedTodos"
      :item="todo"
      :deleteTodo="deleteTodo"
      :doneTodo="doneTodo"
    />
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue'
  import { defineProps, computed } from 'vue'

  const { todos, deleteTodo, doneTodo } = defineProps([
    'todos',
    'deleteTodo',
    'doneTodo',
  ])

  const reversedTodos = computed(() => {
    return [...todos].reverse()
  })

  console.log('todostodos', todos)
</script>
