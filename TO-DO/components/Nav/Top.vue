<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img id="logo" src="~/assets/image/checklist.svg"
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link active" aria-current="page"
              >Home</NuxtLink
            >
          </li>

          <li class="nav-item">
            <NuxtLink to="/users" class="nav-link active" aria-current="page"
              >Users</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/tasks" class="nav-link active" aria-current="page"
              >Create Tasks</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  margin-left: 10px;
  height: 30px;
  width: auto;
}
.nav-item {
  min-width: 100px;
  text-align: center;
}
.nav-item:hover {
  background-color: aquamarine;
  border-radius: 50px;
}
</style>
