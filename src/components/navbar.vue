<template>
    <div class="navbar-wrapper">
    <div class="bar"></div>
    <div class="navbar">
        <div @click="home"><i class="material-icons h">home</i><i class="material-icons b">keyboard_backspace</i></div>
        <p @click="wilder" class="BIG">Wilder</p>
        <p @click="weare" class="whoWeAre">Who we are</p>
        <p @click="beliefs" class="ourBeliefs">Our Beliefs</p>
        <p class="nav-last"></p>
    </div>
    </div>
</template>

<script>
import jump from 'jump.js'
export default {
  name: "navbar",
  props: ['state'],
  methods: {
      home() {
          this.$router.push("/");
      },
      wilder() {
          jump('.top-screen')
      },
      weare() {
          jump('.weare')
      },
      beliefs() {
          jump('.beliefs')
      }
  }
};

</script>

<style>
    .navbar {
        position: fixed;
        background: linear-gradient(rgba(0, 0, 0, 0.10) 0%, rgba(255, 255, 255, 0) 80%);
        height: 40px;
        width: 100%;
        width: 100vw;
        z-index: 10;
        margin: 0;
    }
    .bar {
        position: fixed;
        height: 0px;
        width: 100%;
        background-color: black;
        transition: height .2s ease-in-out;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    .fullnav > .navbar {
        color: white;
    }
    .fullnav > .bar {
        height: 40px;
        z-index: 9;
    }
    .navbar, .navbar > div {
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
        font-size: 25px !important;
        flex: 1;
    }
    .navbar > p {
        margin-right: 16px;
        font-size: 18px;
        font-weight: 100;
    }
    p.nav-last {
        width: 30px;
    }
    @media (orientation: portrait) {
        .navbar, .bar {
            position: absolute;
        }
        .whoWeAre, .ourBeliefs {
            display: none;
        }
    }
</style>
