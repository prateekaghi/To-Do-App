<script setup>
const { tasks } = defineProps(["tasks"]);
</script>

<template>
  <div
    v-for="task in tasks"
    :class="task.completed ? 'border-success' : 'border-danger'"
    class="card"
  >
    <div>{{ task.name }}</div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 10px;
  padding: 10px;
}
</style>
