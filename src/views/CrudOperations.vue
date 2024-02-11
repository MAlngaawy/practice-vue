<template>
  <h2>This is a crud operations</h2>
  <div>
    <div class="my-4" v-for="post in posts">
      <h2 class="text-2xl mb-2">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let posts = ref(null)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => (posts.value = data))
</script>
