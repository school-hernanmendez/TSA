<template>
  <div class="container">
    <Navbar state="initial" />
    <div class="homescreen full">
      <div class="title">
        <h1 class="wilder">Wilder</h1>
        <p class="motto">So wild, we don't even have a motto</p>
      </div>
      <div class="right"></div>
    </div>
    <div class="weare full">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="top-shadow"></div>
      <div class="bottom-shadow"></div>
      <div class="content">
        <h2>Who we are</h2>
        <p>
          We are just an imaginary band made by a weird, but smart and absolutely fabulous teenager.<br/>(weird flex, but ok)<br/> Our members are all depressed
          "young adults", i.e. legal teenagers.<br/> Bye. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="goals full">
      <div>
        <h2>Our beliefs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";

export default {
  name: "Celebrating",
  components: {
    Navbar
  }
};

</script>

<style scoped>
.homescreen {
  display: flex;
  flex-direction: row;
}
.full {
  height: 100vh;
  width: 100%;
}
.title {
  flex: 1;
}
.wilder {
  margin-top: 15vh;
  margin-bottom: -110px;
  margin-left: 100px;
  font-family: 'Rock Salt', cursive;
  font-size: 150px;
  position: relative;
}
.motto {
  margin-left: 100px;
  font-family: 'Permanent Marker', cursive;
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
    url("https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background: linear-gradient(
      117deg,
      white calc(47% - 10px),
      #adadad calc(47% - 9px),
      #adadad 47%,
      rgba(238, 238, 238, .2) calc(47% + 1px),
      rgba(0, 0, 0, 0) 47%
    ),
    url("https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
.weare {
  background-color: #111;
  position: relative;
}
.top {
  background-color: #777;
  position: absolute;
  height: 60vh;
  width: 40vh;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  left: 20%;
  z-index: 1;
  background: 
  linear-gradient(rgba(0, 94, 255, 0.8) 0%, rgba(0, 94, 255, 0.5) 100%),
  url('https://images.unsplash.com/photo-1431069931897-aa1c99a2d2fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80');
  background-size: cover;
  background-position: center;
}
.bottom {
  position: absolute;
  height: 60vh;
  width: 40vh;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  bottom: 0;
  left: 10%;
  z-index: 1;
  background: 
  linear-gradient(rgba(255, 102, 0, 0.5) 0%, rgba(255, 102, 0, 0.8) 100%),
  url('https://images.unsplash.com/photo-1463421585849-6b0acf2c9257?ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80');
  background-size: cover;
  background-position: center;
}
.top-shadow {
  background-color: rgb(255, 255, 255);
  position: absolute;
  height: 60vh;
  width: 40vh;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  left: 19%;
}
.bottom-shadow {
  background-color: rgb(255, 255, 255);
  position: absolute;
  height: 60vh;
  width: 40vh;
  bottom: 0;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  left: 9%;
}
.content {
  float: right;
  width: 40vw;
  text-align: center;
  color: white;
  margin-right: 15vw;
  margin-top: 5vh;
}
.content > h2 {
  font-family: 'Rock Salt', cursive;
  font-size: 60px;
  margin-bottom: -10px;
}
.content > p {
  font-size: 27px;
  font-family: 'Roboto Mono', monospace;
}
.goals {
  background-image: url('https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
}
.goals > div {
  position: absolute;
  left: 15%;
  top: 15vh;
  width: 380px;
  height: 450px;
  background-color: white;
  box-shadow: -22px 21px 0px 0px rgba(231,166,26,1);
}
.goals h2 {
  font-family: 'Permanent Marker', cursive;
  font-weight: lighter;
  font-size: 40px;
  margin: 0;
  width: 100%;
  text-align: center;
}
.goals p {
  margin: 10px 25px;
  font-size: 26px;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
}
</style>
