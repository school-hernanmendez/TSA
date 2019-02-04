<template>
  <div class="container">
    <div class="top-screen"></div>
    <Navbar state="initial" />
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
          We are just an imaginary band made by a weird, but smart and absolutely fabulous teenager.<br/>(weird flex, but ok)<br/> Our members are all depressed
          "young adults", i.e. legal teenagers.<br/> Bye. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="beliefs">
      <div data-scroll class="beliefs-in">
        <h2>Our beliefs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="listen full">
      <h1>Listen to us</h1>

    </div>
    <div class="Buy full">
      <div class="cd"></div>
      <div class="buy"></div>
    </div>
    <div class="Concerts full">
      <div class="concerts-title"></div>
    </div>
    <div class="Board full">
      <h2>Talk with the fans</h2>
      <div class="message-board">
        <div class="messages"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollOut from 'scroll-out'
import Navbar from "./navbar.vue";

function c(el, ch) { 
  return el.classList[0] === ch;
  }

export default {
  name: "Celebrating",
  components: {
    Navbar
  },
  mounted() {
    this.so = ScrollOut({
      threshold: .35,
      onShown(el) {
        if(c(el, "top-shadow")) {
          el.style.left = "18.5%"
        } else if(c(el, "bottom-shadow")) {
          el.style.left = "8.5%"
        } else if(c(el, "wilder")) {
          document.getElementsByClassName('navbar-wrapper')[0].classList.remove('fullnav')
        } else if(c(el, "beliefs-in")) {
          el.style.boxShadow = "-12px 11px 0px 0px rgba(231,166,26,1)"
        }
      },
      onHidden(el) {
        if(c(el, "top-shadow")) {
          el.style.left = "20%"
        } else if(c(el, "bottom-shadow")) {
          el.style.left = "10%"
        } else if(c(el, "wilder")) {
          document.getElementsByClassName('navbar-wrapper')[0].classList.add('fullnav')
        } else if(c(el, "beliefs-in")) {
          el.style.boxShadow = "0px 0px 0px 0px rgba(231,166,26,1)"
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
  height: 55vh;
  width: 35vh;
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
  height: 55vh;
  width: 35vh;
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
  height: 55vh;
  width: 35vh;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  left: 20%;
  transition: left .4s ease-out .2s;
}
.bottom-shadow {
  background-color: rgb(255, 255, 255);
  position: absolute;
  height: 55vh;
  width: 35vh;
  bottom: 0;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  left: 10%;
  transition: left .4s ease-out .2s;
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
  font-family: 'Rock Salt', cursive;
  font-size: 50px;
  margin-bottom: -30px;
  color: white;
}
.cnt > p {
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
}
.beliefs {
  background-image: url('https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80');
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
  box-shadow: 0px 0px 0px 0px rgba(231,166,26,1);
  transition: box-shadow 1s .2s;
}
.beliefs h2 {
  font-family: 'Permanent Marker', cursive;
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
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
}
</style>
