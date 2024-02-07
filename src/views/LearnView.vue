<template>
  <div id="seenApp">
    <ShowButton :changeSeen="changeSeen" />
    <SeenMessage :seen="seen" />
  </div>
</template>

<script setup>
  import ShowButton from '../components/seenComponents/ShowButton.vue'
  import SeenMessage from '../components/seenComponents/SeenMessage.vue'

  //! Compistion Api with script setup
  import { ref } from 'vue'
  const seen = ref(false)
  const changeSeen = () => {
    seen.value = !seen.value
  }

  // Options API
  // export default {
  //   data: () => ({
  //     seen: false,
  //   }),

  //   methods: {
  //     changeSeen() {
  //       this.seen = !this.seen
  //     },
  //   },

  //   components: {
  //     ShowButton,
  //     SeenMessage,
  //   },
  // }
</script>
