<template>
  <div class="container">
    <div class="top-screen"></div>
    <Navbar state="initial"/>
    <div class="homescreen full">
      <div class="title">
        <h1 class="wilder" data-scroll>Wilder</h1>
        <p class="motto">So wild, we don't even have a motto</p>
      </div>
      <div class="right"></div>
    </div>
    <div class="weare full">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="top-shadow" data-scroll></div>
      <div class="bottom-shadow" data-scroll></div>
      <div class="cnt">
        <h2>Who we are</h2>
        <p>
          We are Wilder, and we play for the uniquely wild You. We’re just five misfits with a passion for music, and true self-expression. 
        </p>
      </div>
    </div>
    <div class="beliefs">
      <div data-scroll class="beliefs-in">
        <h2>Our beliefs</h2>
        <p>Worry less, Live more<br>
Think less, See more<br>
Know less, Experience more<br>
Hate less, Love more<br>
Music is a powerful art. It’s a gift that allows us to express who we are and experience life to its fullest. Wilder believes in freedom, beauty, truth, and love. 
</p>
      </div>
    </div>
    <div class="listen full">
      <h1>Listen to us</h1>
      <audio src="../assets/music/The_Inventors_-_01_-_Perfect.mp3" class="p1a"></audio>
      <audio src="../assets/music/The_Inventors_-_02_-_10s_and_9s.mp3" class="p2a"></audio>
      <audio src="../assets/music/The_Inventors_-_03_-_Still_Sailor.mp3" class="p3a"></audio>
      <audio src="../assets/music/The_Inventors_-_04_-_Melon.mp3" class="p4a"></audio>
      <audio src="../assets/music/The_Inventors_-_05_-_Venice.mp3" class="p5a"></audio>
      <audio src="../assets/music/The_Inventors_-_06_-_Fire.mp3" class="p6a"></audio>
      <audio src="../assets/music/The_Inventors_-_08_-_Malala.mp3" class="p7a"></audio>
      <audio src="../assets/music/The_Inventors_-_09_-_Blood_Milk.mp3" class="p8a"></audio>
      <div>
        <div class="player p1">
          <i class="material-icons">play_arrow</i>
          <p>Perfect</p>
        </div>
        <div class="player p2">
          <i class="material-icons">play_arrow</i>
          <p>10s and 9s</p>
        </div>
        <div class="player p3">
          <i class="material-icons">play_arrow</i>
          <p>Still Sailor</p>
        </div>
        <div class="player p4">
          <i class="material-icons">play_arrow</i>
          <p>Melon</p>
        </div>
        <div class="player p5">
          <i class="material-icons">play_arrow</i>
          <p>Venice</p>
        </div>
        <div class="player p6">
          <i class="material-icons">play_arrow</i>
          <p>Fire</p>
        </div>
        <div class="player p7">
          <i class="material-icons">play_arrow</i>
          <p>Malala</p>
        </div>
        <div class="player p8">
          <i class="material-icons">play_arrow</i>
          <p>Blood Milk</p>
        </div>
      </div>
    </div>
    <div class="buy full">
      <div class="cd"></div>
      <div class="buy">
        <h3>Buy our CDs</h3>
        <p>Enjoy to you heart's content</p>
        <button class="1">Buy Physical copy</button>
        <button class="2">Download</button>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
import Navbar from "./navbar.vue";
import Copyright from "./Copyright.vue";

function c(el, ch) {
  return el.classList[0] === ch;
}

export default {
  name: "Celebrating",
  components: {
    Navbar,
    Copyright
  },
  mounted() {
    this.so = ScrollOut({
      threshold: 0.35,
      onShown(el) {
        if (c(el, "top-shadow")) {
          el.style.left = "18.5%";
        } else if (c(el, "bottom-shadow")) {
          el.style.left = "8.5%";
        } else if (c(el, "wilder")) {
          document
            .getElementsByClassName("navbar-wrapper")[0]
            .classList.remove("fullnav");
        } else if (c(el, "beliefs-in")) {
          el.style.boxShadow = "-12px 11px 0px 0px rgba(231,166,26,1)";
        }
      },
      onHidden(el) {
        if (c(el, "top-shadow")) {
          el.style.left = "20%";
        } else if (c(el, "bottom-shadow")) {
          el.style.left = "10%";
        } else if (c(el, "wilder")) {
          document
            .getElementsByClassName("navbar-wrapper")[0]
            .classList.add("fullnav");
        } else if (c(el, "beliefs-in")) {
          el.style.boxShadow = "0px 0px 0px 0px rgba(231,166,26,1)";
        }
      }
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style>
.buy {
  display: none;
}
.listen {
  display: none;
  background: rgb(60, 60, 73);
}
.listen > h1 {
  margin: 0;
}
.homescreen {
  display: flex;
  flex-direction: row;
}
.title {
  flex: 1;
}
.wilder {
  margin-top: 15vh;
  margin-bottom: -110px;
  margin-left: 100px;
  font-family: "Rock Salt", cursive;
  font-size: 150px;
  position: relative;
}
.motto {
  margin-left: 100px;
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  position: absolute;
  width: 90vw;
}
.right {
  width: 40%;
  background: linear-gradient(
      117deg,
      white 56.4%,
      #d4d4d4 56.4,
      #d4d4d4 46.5%,
      #adadad 46.5%,
      #adadad 47%,
      rgba(0, 0, 0, 0) 47%
    ),
    url("../assets/u-band.jpeg");
  background: linear-gradient(
      117deg,
      white calc(47% - 10px),
      #adadad calc(47% - 9px),
      #adadad 47%,
      rgba(238, 238, 238, 0.2) calc(47% + 1px),
      rgba(0, 0, 0, 0) 47%
    ),
    url("../assets/u-band.jpeg");
  background-position: left;
}
.weare {
  background-color: #111;
  position: relative;
}
.top {
  background-color: #777;
  position: absolute;
  height: 55vh;
  width: 35vh;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  left: 20%;
  z-index: 1;
  background: linear-gradient(
      rgba(0, 94, 255, 0.8) 0%,
      rgba(0, 94, 255, 0.5) 100%
    ),
    url("../assets/u-guitar.jpg");
  background-size: cover;
  background-position: center;
}
.bottom {
  position: absolute;
  height: 55vh;
  width: 35vh;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  bottom: 0;
  left: 10%;
  z-index: 1;
  background: linear-gradient(
      rgba(255, 102, 0, 0.5) 0%,
      rgba(255, 102, 0, 0.8) 100%
    ),
    url("../assets/u-singer.jpg");
  background-size: cover;
  background-position: center;
}
.top-shadow {
  background-color: rgb(255, 255, 255);
  position: absolute;
  height: 55vh;
  width: 35vh;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  left: 20%;
  transition: left 0.4s ease-out 0.2s;
}
.bottom-shadow {
  background-color: rgb(255, 255, 255);
  position: absolute;
  height: 55vh;
  width: 35vh;
  bottom: 0;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  left: 10%;
  transition: left 0.4s ease-out 0.2s;
}
.cnt {
  float: right;
  width: 30vw;
  text-align: center;
  color: white;
  margin-right: 20vw;
  margin-top: 15vh;
}
.cnt > h2 {
  font-family: "Rock Salt", cursive;
  font-size: 50px;
  margin-bottom: -30px;
  color: white;
}
.cnt > p {
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
}
.beliefs {
  background-image: url("../assets/u-beli.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 600px;
}
.beliefs > div {
  position: absolute;
  left: 15%;
  top: 100px;
  width: 320px;
  height: 380px;
  background-color: white;
  box-shadow: 0px 0px 0px 0px rgba(231, 166, 26, 1);
  transition: box-shadow 1s 0.2s;
}
.beliefs h2 {
  font-family: "Permanent Marker", cursive;
  font-weight: lighter;
  font-size: 40px;
  margin: 0;
  width: 100%;
  text-align: center;
  color: black;
}
.beliefs p {
  margin: 10px 25px;
  font-size: 22px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
}

.player {
  max-width: 500px;
}
@media (orientation: portrait) {
  .top,
  .bottom,
  .top-shadow,
  .bottom-shadow {
    display: none;
  }
  .cnt {

  }
}
</style>
