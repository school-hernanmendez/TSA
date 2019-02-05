<template>
  <div>
    <i class="material-icons ch" @click="home">home</i>
    <div class="program">
      <h1>CTE Programs</h1>
      <div>
        <h3>What is CTE?</h3>
        <p>Career and Technical Education (CTE) gives high school students the chance to get a head start on preparing for college and careers. In CTE programs you will learn how core school subjects like math, science and writing are used in real-life. As a CTE student you have the opportunity to participate in hands-on training in your chosen program and gain real world experience through job shadows and internships. Many programs offer you the opportunity to earn nationally recognized certifications which you can use to get a job, that will help you pay for college, or start off your career straight out of high school!</p>
        <span>Source: <a href="https://chooseyourfuture.cps.edu/career-technical-education/what-is-cte/">https://chooseyourfuture.cps.edu/career-technical-education/what-is-cte/</a></span>
        <p class="CTE">Here are the CTE programs our school offers:</p>
      </div>
    </div>
    <div class="tech">
      <h2>Technology</h2>
      <div class="teche left">
        <div>
        <h3>AP Computer Science Principles</h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
      <div class="teche right">
        <div>
        <h3>Digital Information Technology</h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
      <div class="teche left">
        <div>
        <h3>Game and Simulation Foundations/Design</h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
      <div class="teche right">
        <div>
        <h3>Digital Video Technology</h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
      <div class="teche right">
        <div>
        <h3>Television Production</h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
    </div>
    <div class="arts">
      <h2>Arts</h2>
      <div class="art ">
        <div class="art left">
        <div>
        <h3>Digital Media/Multi Media Foundations</h3>
        <p></p>
        </div>
        <div class="img">Digital Art Imaging</div>
      </div>
      <div class="art right">
        <div>
        <h3></h3>
        <p></p>
        </div>
        <div class="img"></div>
      </div>
      </div>
    </div>
    <div class="apc">
      <h3>AP Computer Science Principles</h3>
      <p></p>
    </div>
    <div class="dit">
      <h3>Digital Information Technology</h3>
      <p></p>
    </div>
    <div class="game">
      <h3>Game and Simulation Foundations</h3>
      <p></p>
    </div>
    <div class="game2">
      <h3>Game and Simulation Design</h3>
      <p></p>
    </div>
    <div class="dmt">
      <h3>Digital Media/Multi Media Foundations</h3>
      <p></p>
    </div>
    <div class="tv">
      <h3>Digital Video Technology - Television Production</h3>
      <p></p>
    </div>
    <div class="dai">
      <h3>Digital Art Imaging</h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Programs",
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.ch {
  color: white;
  background-color: black;
  display: block;
  position: fixed;
  top: 0;
  padding: 10px;
  font-size: 40px;
  transition: padding-left 0.3s;
  z-index: 100;
}
.ch:hover {
  padding-left: 25px;
}
.arts {
  background: url("../assets/u-arts.jpg");
}
.tech {
  background: url("../assets/u-astronaut.jpg");
}
.arts h2, .tech h2 {
  font-size: 60px;
  color: white;
  margin: 0;
  padding: 5vw;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.tech h2 {
  font-family: "Righteous", cursive;
}
.arts h2 {
  font-family: 'Rock Salt', cursive;
}
</style>
