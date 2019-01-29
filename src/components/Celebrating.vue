<template>
  <div>
    <Navbar state="initial"/>
    <div class="homescreen full">
      <div class="title"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";

export default {
  name: "Celebrating"
};
</script>

<style scoped>
.homescreen {
  background: linear-gradient(
      110deg,
      white 70%,
      rgb(173, 173, 173) 70%,
      rgb(173, 173, 173) 72%,
      rgba(0, 0, 0, 0) 72%
    ),
    url("https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
.full {
  height: 100vh;
  width: 100%;
}
</style>
