<script setup>
import { useTaskStore } from "~/store/TaskStore";
const store = useTaskStore();
const totalTasks = store.task;
</script>
<template>
  <div class="task-container">
    <UiTaskCard :tasks="totalTasks" />
  </div>
</template>

<style scoped>
.task-container {
  width: 50vw;
  margin: auto;
  margin-top: 20px;
}
</style>
