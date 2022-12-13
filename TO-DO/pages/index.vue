<script setup></script>

<template>
  <div>
    <div class="task-container">
      <UiNewTask></UiNewTask>
      <UiTaskCard class="task-card"></UiTaskCard>
    </div>
  </div>
</template>

<style scoped>
.task-container {
  width: 50vw;
  margin: auto;
  margin-top: 20px;
}
.task-card {
  margin-top: 10px;
}
</style>
