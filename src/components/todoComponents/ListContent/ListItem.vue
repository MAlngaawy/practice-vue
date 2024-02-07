<template>
  <div class="item">
    <h3 @click="handleDoneTodo" :class="{ doneItem: item.done }">
      {{ item.message }}
    </h3>
    <v-btn
      class="deleteIcon"
      icon="mdi-trash-can"
      color="red-lighten-2"
      @click="deleteTodo"
    ></v-btn>
  </div>
</template>

<script setup>
  const { item, deleteTodo, doneTodo } = defineProps([
    'item',
    'deleteTodo',
    'doneTodo',
  ])

  const handleDeleteTodo = () => {
    deleteTodo(item.id)
  }

  const handleDoneTodo = () => {
    doneTodo(item.id)
  }
</script>

<style>
  .item {
    color: #eee;
    background-color: rgb(68, 68, 68);
    margin: 10px 0;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item h3 {
    width: fit-content;
    cursor: pointer;
  }
  .doneItem {
    text-decoration-line: line-through;
    opacity: 0.5;
  }
  .deleteIcon {
    cursor: pointer;
    background-color: transparent !important;
    box-shadow: none;
    text-decoration: none;
  }
  .deleteIcon:hover {
    color: rgb(255, 86, 86);
    box-shadow: none;
  }
</style>
