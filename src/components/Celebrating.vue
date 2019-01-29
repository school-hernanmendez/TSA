<template>
  <div>
    <Navbar state="initial"/>
    <div class="homescreen full">
      <div class="title"></div>
      <div class="title"></div>
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
  display: flex;
  flex-direction: row;
}
.title {
  flex: 3;
}
.right {
  flex: 1;
  background: linear-gradient(
      135deg,
      white 50%,
      rgb(173, 173, 173) 50%,
      rgb(173, 173, 173) 55%,
      rgba(0, 0, 0, 0) 55%
    ),
    url("https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
.full {
  height: 100vh;
  width: 100%;
}
</style>
