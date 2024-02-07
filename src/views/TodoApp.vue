<template>
  <div>
    <h2>Todo App With Vue</h2>
    <AddingTodo :addTodo="addTodo" />
    <TodoList :todos="todos" :deleteTodo="deleteTodo" :doneTodo="doneTodo" />
  </div>
</template>

<script setup>
  import AddingTodo from '../components/todoComponents/AddingTodo/AddingTodo.vue'
  import TodoList from '../components/todoComponents/ListContent/List.vue'
  import { ref, computed } from 'vue'

  const todos = ref([])

  function addTodo(message) {
    if (message) {
      todos.value.push({
        message,
        done: false,
        id: Date.now(),
      })
    }
  }

  function deleteTodo(todoId) {
    const targetedTodo = todos.value.find((todo) => todo.id === todoId)
    const targetedTodoIndex = todos.value.indexOf(targetedTodo)
    todos.value.splice(targetedTodoIndex, 1)
  }

  function doneTodo(todoId) {
    const targetedTodo = todos.value.find((todo) => todo.id === todoId)
    const targetedTodoIndex = todos.value.indexOf(targetedTodo)
    todos.value[targetedTodoIndex].done = !todos.value[targetedTodoIndex].done
  }
</script>
