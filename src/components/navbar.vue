<template>
    <div>
    <div class="navbar" v-if="state == 'initial'">
        <div><i class="material-icons h">home</i><i class="material-icons b">keyboard_backspace</i></div>
        <p class="BIG">Wilder</p>
        <p>Who we are</p>
        <p></p>
    </div>
    <div class="navbar-full" v-else>
    </div>
    </div>
</template>

<script>
export default {
  name: "navbar",
  props: ['state']
};
</script>

<style scoped>
    .navbar {
        position: fixed;
        background: linear-gradient(rgba(0, 0, 0, 0.10) 0%, rgba(255, 255, 255, 0) 80%);
        height: 40px;
        width: 100%;
        width: 100vw;
        z-index: 10;
        margin: 0;
    }
    .navbar-full {
        position: absolute;
        background-color: white;
        height: 30px;
        width: 100%;
        width: 100vw;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        z-index: 10;
        margin: 0;
    }
    .navbar, .navbar-full, .navbar > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .navbar > div {
        height: 40px;
        padding-left: 15px;
        padding-right: 8px;
        background-color: black;
        color: white;
        margin-right: 15px;
        position: relative;
    }
    .h {
      opacity: 1;
      transition: opacity .4s .1s;
    }
    .navbar > div:hover .h {
        opacity: 0;
        transition: opacity .2s;
    }
    .b {
      opacity: 0;
      position: absolute;
      right: 0px;
      transition: opacity .3s, right .4s;
    }
    .navbar > div:hover > .b {
      opacity: 1;
      right: 8px;
      transition: opacity .3s .1s, right .4s .1s;
    }
    .BIG {
        font-family: 'Rock Salt', cursive;
        font-size: 25px;
        flex: 1;
    }
    
</style>
