<script setup>
import { useTaskStore } from "~/store/TaskStore";
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/solid";
const taskStore = useTaskStore();
const { tasks } = defineProps(["tasks"]);
</script>

<template>
  <div
    v-for="task in tasks"
    :class="task.completed ? 'border-success' : 'border-danger'"
    class="card"
    :key="task.tasks"
  >
    <div>{{ task.tasks }}</div>
    <span class="task-toggle"
      ><button @click="taskStore.toggleStatus(task)">
        <CheckIcon v-if="task.completed" class="icon" />
        <XMarkIcon v-if="!task.completed" class="icon" /></button
    ></span>
  </div>
</template>

<style scoped>
.card {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
button {
  border: transparent;
  background: transparent;
}

.icon {
  height: 25px;
}
</style>
