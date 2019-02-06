<template>
  <div>
    <i class="material-icons ch" @click="home">home</i>
    <div class="chstsa full">
      <div class="tsa-image"></div>
      <div class="tsa-title">
        <h1>
          <span>CHS</span>
          <span class="tsa-thing">
            <s>T</s>
            <s>S</s>
            <s>A</s>
          </span>
        </h1>
        <h2>"Learning to lead in a technical world."</h2>
      </div>
    </div>
    <div class="officers-wrapper">
      <div class="officers">
        <h3>Our Officers</h3>
        <div class="officer" data-scroll>
          <div class="officer-img A"></div>
          <hr>
          <div>
            <p>
              <b>Audrey Jones</b>
            </p>
            <p>President</p>
          </div>
        </div>
        <div class="officer" data-scroll>
          <div class="officer-img K"></div>
          <hr>
          <div>
            <p>
              <b>Kevin Swamy</b>
            </p>
            <p>Vice President</p>
          </div>
        </div>
        <div class="officer" data-scroll>
          <div class="officer-img L"></div>
          <hr>
          <div>
            <p>
              <b>Timmy Lu</b>
            </p>
            <p>Treasurer</p>
          </div>
        </div>
        <div class="officer" data-scroll>
          <div class="officer-img R"></div>
          <hr>
          <div>
            <p>
              <b>David Robidas</b>
            </p>
            <p>Secretary</p>
          </div>
        </div>
        <div class="officer" data-scroll>
          <div class="officer-img Ly"></div>
          <hr>
          <div>
            <p>
              <b>Adonis Lysandrou</b>
            </p>
            <p>Reporter</p>
          </div>
        </div>
        <div class="officer" data-scroll>
          <div class="officer-img S"></div>
          <hr>
          <div>
            <p>
              <b>Vivian Spencer</b>
            </p>
            <p>Sergeant-at-Arms</p>
          </div>
        </div>
      </div>
    </div>
    <div class="achievements">
      <div class="achievements-inner">
        <h1>Our achievements</h1>
        <div class="national" data-scroll>
          <div class="image-nat"></div>
          <h3>
            National level -
            <span class="orange">2017</span>
          </h3>
          <p>
            <span class="orange prio">1st place</span> in Problem Solving
          </p>
          <p>
            <span class="orange">3rd place</span> in Structural Design & Engineering
          </p>
        </div>
        <div class="FL" data-scroll>
          <div class="image-FL"></div>
          <h3>
            State level FL -
            <span class="orange">2017 & 2018</span>
          </h3>
          <p>
            <span class="orange prio">11 Top 3</span> finishing teams
          </p>
          <p>
            <span class="orange">10 Top 5</span> finishing teams
          </p>
          <p>
            <span class="orange">20 Top 10</span> finishing teams
          </p>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="about-inner">
        <h2>About TSA</h2>
        <div>
          <h3>Mission Statement</h3>
          <p>The Technology Student Association (TSA) enhances personal development, leadership, and career opportunities in science, technology, engineering, and math (STEM), whereby members apply and integrate these concepts through intracurricular activities, competitions, and related programs.</p>
        </div>
        <div>
          <h3>Vision Statement</h3>
          <p>TSA is accelerating student achievement and supporting teachers by providing engaging opportunities to develop STEM skills.</p>
        </div>
        <div>
          <h3>Motto</h3>
          <p>Learning to lead in a technical world.</p>
        </div>
        <div>
          <h3>Creed</h3>
          <p>I believe that Technology Education holds an important place in my life in the technical world. I believe there is a need for the development of good attitudes concerning work, tools, materials, experimentation, and processes of industry. Guided by my teachers, artisans from industry, and my own initiative, I will strive to do my best in making my school, community, state, and nation better places in which to live.</p>
          <p>I will accept the responsibilities that are mine. I will accept the theories that are supported by proper evidence. I will explore on my own for safer, more effective methods of working and living. I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals. Through the work of my hands and mind, I will express my ideas to the best of my ability. I will make it my goal to do better each day the task before me, and to be steadfast in my belief in my God, and my fellow Americans.</p>
        </div>
        <span>Source: tsaweb.org</span>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "Chapter",
  mounted() {
    this.so = ScrollOut({
      threshold: 0.6,
      onShown(el) {
        if (el.classList[0] == "officer") {
          el.style.opacity = 1;
          el.style.transform = "scale(1)";
        } else if (el.classList[0] == "national" && window.innerWidth > 700) {
          el.style.opacity = 1;
          el.style.left = "0px";
          el.style.transform = "scale(1)";
        } else if (el.classList[0] == "FL" && window.innerWidth > 700) {
          el.style.opacity = 1;
          el.style.right = "0px";
          el.style.transform = "scale(1)";
        }
      },
      onHidden(el) {
        if (el.classList[0] == "officer") {
          el.style.opacity = 0.7;
          el.style.transform = "scale(.4)";
        } else if (el.classList[0] == "national" && window.innerWidth > 700) {
          el.style.opacity = 0.7;
          el.style.left = "-150px";
          el.style.transform = "scale(.8)";
        } else if (el.classList[0] == "FL" && window.innerWidth > 700) {
          el.style.opacity = 0.7;
          el.style.right = "-150px";
          el.style.transform = "scale(.8)";
        }
      }
    });
  },
  destroyed() {
    this.so.teardown();
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.about {
  font-family: "Righteous", cursive;
  background-color: rgb(227, 227, 227);
  padding: 30px 0;
  background: url("../assets/TSA.svg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  font-size: 25px;
}
.about p,
.about span {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
}
.about h3 {
  font-weight: lighter;
  margin-bottom: 6px;
}
.about h2 {
  margin: 0;
  font-size: 60px;
}
.about-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.image-nat {
  background: url("../assets/thumbnail-2.jpg");
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  float: right;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.image-FL {
  background: url("../assets/thumbnail-1.jpg");
  background-position: center;
  background-size: cover;
  width: 230px;
  height: 230px;
  float: right;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.achievements {
  padding-top: 20px;
  background-color: orange;
  color: white;
  padding-bottom: 40px;
}
.achievements-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.achievements-inner > h1 {
  font-size: 80px;
  font-family: "Righteous", cursive;
  margin-top: 0;
  margin-bottom: 20px;
}
.national {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 30px;
  margin: 0 10px 30px 10px;
  position: relative;
  left: -150px;
  transform: scale(0.8);
  opacity: 0.7;
  transition: opacity 0.5s 0.2s, left 0.5s 0.5s, transform 0.5s;
}
.national > h3 {
  margin: 0;
  margin-top: 10px;
  font-size: 40px;
}
.national > p {
  font-size: 25px;
}
span.orange {
  color: orange;
}
span.orange.prio {
  border: 2px solid rgba(255, 166, 0, 0.76);
  padding: 8px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 24px;
  border-radius: 10px;
}
.FL {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 10px 0px 10px;
  position: relative;
  right: -150px;
  transform: scale(0.8);
  opacity: 0.7;
  transition: opacity 0.5s 0.2s, right 0.5s 0.4s, transform 0.5s;
}
.FL > h3 {
  margin: 0;
  font-size: 35px;
}
.FL > p {
  font-size: 24px;
}
.ch {
  color: white;
  background-color: black;
  display: block;
  position: fixed;
  padding: 10px;
  font-size: 40px;
  transition: padding-left 0.3s;
  z-index: 100;
}
.ch:hover {
  padding-left: 25px;
}
.chstsa h1 {
  font-size: 120px;
  margin-top: 20vh;
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: "Righteous", cursive;
}
.chstsa h2 {
  margin-top: 0;
  margin-left: 30px;
  font-family: "Righteous", cursive;
  max-width: 45vw;
  font-size: 50px;
  font-weight: lighter;
  color: #555;
}
.chstsa {
  background: linear-gradient(
    80deg,
    white calc(50% - 2px),
    #f34418 50%,
    #f34418 calc(51% - 2px),
    #4343b6 51%
  );
}
.tsa-title {
  width: 60vw;
  padding-top: 25vh;
}
.tsa-title h1 {
  margin-top: 0;
}
.tsa-image {
  width: 40vw;
  height: 100vh;
  float: right;
  background: url("../assets/tsa.jpg");
  background-position: center;
  background-size: cover;
  transform: scale(0.95);
  border-radius: 20px;
  animation: img 1s ease-out 0.5s;
}
@keyframes img {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.tsa-thing {
  animation: tsa;
}
s:nth-of-type(2) {
  animation-delay: 80ms;
}
s:nth-of-type(3) {
  animation-delay: 160ms;
}
s {
  text-decoration: none;
  display: inline-block;
  color: #4343b6;
  transform: translateY(30px);
  animation: tsa 0.5s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes tsa {
  0% {
    transform: translateY(30px);
  }
  20% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.officers {
  max-width: 1000px;
  margin: 0 auto;
}
.officers-wrapper {
  background-color: #373749;
  padding-bottom: 0px;
  padding-top: 20px;
}
.officers > h3 {
  font-family: "Righteous", cursive;
  letter-spacing: 10px;
  color: white;
  font-size: 45px;
  margin: 0;
  grid-area: header;
  margin-bottom: 15px;
}
.officers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "header header header";
  grid-column-gap: 10px;
  justify-items: center;
}
.officer {
  text-align: center;
  width: 220px;
  padding: 10px;
  margin-bottom: 30px;
  background-color: rgb(241, 241, 241);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transform: scale(0.4);
  transition: opacity 0.5s, transform 0.5s ease-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.officer > div.officer-img {
  background-image: url("https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
  background-position: center;
  background-size: cover;
  width: 180px;
  height: 180px;
  border-radius: 90px;
}
hr {
  width: 180px;
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #aaa, #555, #aaa);
  margin-bottom: -5px;
}
b {
  font-size: 20px;
}
@media (orientation: portrait) {
  .achievements-inner,
  .about-inner {
    max-width: 800px;
  }
  .national {
    position: static;
  }
  .FL {
    position: static;
  }
  .about {
    background: #f0f0f0;
  }
}
@media (orientation: portrait) and (min-width: 800px) {
  .officers {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header";
    grid-column-gap: 10px;
  }
}
@media (max-width: 1050px) {
  .achievements-inner,
  .about-inner {
    max-width: 800px;
  }
  .national {
    position: static;
  }
  .FL {
    position: static;
  }
  .officers {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "header header header";
    grid-column-gap: 10px;
    justify-items: center;
  }
  .chstsa {
    background: url("../assets/tsa.jpg");
    background-size: cover;
    background-position: center;
  }
  .tsa-image {
    display: none;
  }
  .tsa-title {
    width: 100%;
    text-align: center;
    padding-top: 20vh;
  }
  .tsa-title h1 {
    font-size: 150px;
  }
  .tsa-title h2 {
    font-size: 75px;
    max-width: 100%;
    padding: 0 5vw;
    margin: 0;
    color: white;
  }
  s {
    color: #f34418;
  }
}
@media (max-width: 800px) {
  .officers {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header";
    grid-column-gap: 10px;
  }
  .chstsa {
    background: url("../assets/tsa.jpg");
    background-size: cover;
    background-position: center;
  }
  .tsa-image {
    display: none;
  }
  .tsa-title {
    width: 100%;
    text-align: center;
    padding-top: 20vh;
  }
  .tsa-title h2 {
    font-size: 55px;
    max-width: 100%;
    padding: 0 5vw;
    margin: 0;
    color: white;
  }
  s {
    color: #f34418;
  }
}
@media (max-width: 720px) {
  .achievements h1 {
    font-size: 47px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .national {
    opacity: 1;
    transform: scale(1);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0;
    padding-bottom: 10px;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
  }
  .image-nat {
    float: none;
    width: 100%;
    box-shadow: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .FL {
    opacity: 1;
    transform: scale(1);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0;
    padding-bottom: 10px;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
  }
  .image-FL {
    float: none;
    width: 100%;
    box-shadow: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .FL h3,
  .national h3 {
    font-size: 30px;
    width: 90%;
    margin: 10px auto;
    margin-bottom: 24px;
  }
  .FL p,
  .national p {
    font-size: 24px;
    width: 90%;
    margin: 0px auto;
    margin-bottom: 15px;
    line-height: 1.6;
  }
  span.orange.prio {
    font-size: 24px;
    padding: 6px;
  }
}
@media (max-width: 520px) {
  .chstsa {
    background: url("../assets/tsa.jpg");
    background-size: cover;
    background-position: center;
  }
  .tsa-image {
    display: none;
  }
  .tsa-title {
    width: 100%;
    text-align: center;
    padding-top: 20vh;
  }
  .tsa-title h1 {
    font-size: 50px;
  }
  .tsa-title h2 {
    font-size: 35px;
    max-width: 100%;
    padding: 0 5vw;
    margin: 0;
  }
  .officers {
    grid-template-columns: 1fr;
    grid-template-areas: "header";
    grid-column-gap: 10px;
  }
  .officers h3 {
    letter-spacing: 3px;
    font-size: 40px;
  }
  .officer {
    width: 70%;
  }
}
</style>
