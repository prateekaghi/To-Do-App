<template>
  <div class="screen">
    <NavTop></NavTop>
    <slot></slot>
  </div>
</template>
<style scoped>
.screen {
  width: 100vw;
  height: 100vh;
  background-image: url("~/assets/image/login-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
