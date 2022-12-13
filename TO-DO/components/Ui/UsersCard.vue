<script setup>
import { useUserStore } from "~/store/userStore";
const users = useUserStore();
</script>

<template>
  <div class="container-card">
    <div v-for="user in users.user" class="card" style="width: 18rem">
      <img
        src="~/assets/image/users/user.jpg"
        class="card-img-top user-image"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">@{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 10px;
  margin-left: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.container-card {
  display: flex;
  margin-top: 40px;
}
.user-image {
  width: 200px;
  margin: auto;
  border-radius: 100%;
}
</style>
