<script setup>
import { useUserStore } from "~/store/userStore";
import { useTaskStore } from "~/store/TaskStore";
const task = useTaskStore();
const user = useUserStore();

const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const select = (event, field) => {
  console.log(field);
  console.log(event.target.value);
  field.value.value = event.target.value;
};
const submitHandler = () => {
  task.createTask(fields);
  console.log(fields);
};
console.log(user.user);
const fields = [
  {
    label: "Tasks",
    name: "tasks",
    type: "text",
    value: ref(""),
  },
  {
    label: "Created On",
    name: "createdOn",
    type: "text",
    value: ref(date),
  },
  {
    label: "Assigned To",
    name: "assignedTo",
    type: "select",
    options: user.user,
    value: ref(""),
  },
];
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div v-for="field in fields" class="mb-3">
      <div v-if="field.type === 'select'">
        <select
          @change="
            (event) => {
              select(event, field);
            }
          "
          class="form-select"
        >
          <option selected>{{ field.label }}</option>
          <option v-for="option in field.options" :value="option.value">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div v-else>
        <label for="task" class="form-label">{{ field.label }}</label>
        <input
          v-model="field.value.value"
          :type="field.type"
          class="form-control"
        />
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
