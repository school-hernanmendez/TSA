<template>
  <div>
    <i class="material-icons ch" @click="home">home</i>
    <div class="program">
      <div class="program-inner">
        <h1>CTE Programs</h1>
        <div>
          <h3>What is CTE?</h3>
          <p>Career and Technical Education (CTE) gives high school students the chance to get a head start on preparing for college and careers. In CTE programs you will learn how core school subjects like math, science and writing are used in real-life. As a CTE student you have the opportunity to participate in hands-on training in your chosen program and gain real world experience through job shadows and internships. Many programs offer you the opportunity to earn nationally recognized certifications which you can use to get a job, that will help you pay for college, or start off your career straight out of high school!</p>
          <span>
            Source:
            <a
              href="https://chooseyourfuture.cps.edu/career-technical-education/what-is-cte/"
            >https://chooseyourfuture.cps.edu/career-technical-education/what-is-cte/</a>
          </span>
          <p class="CTE">Here are the CTE programs our school offers:</p>
        </div>
      </div>
    </div>
    <div class="tech">
      <h2>Technology</h2>
      <div class="left-p">
        <div class="teche apc">
          <div class="txt">
            <h3>AP Computer Science Principles</h3>
            <p>Students develop computational thinking skills, foster creativity and problem solving, and learn the basics of Javascript. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="right-p">
        <div class="teche dit">
          <div class="txt">
            <h3>Digital Information Technology</h3>
            <p>Get certified in Microsoft Office Suite and Adobe Creative Suite! This course introduces students to fundamental business skills and explores the use of digital information technology.</p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="left-p">
        <div class="teche gsf">
          <div class="txt">
            <h3>Game and Simulation Foundations/Design</h3>
            <p>These courses teach students the fundamentals of game design and eventually create and market their own, original games. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="right-p">
        <div class="teche dvt">
          <div class="txt">
            <h3>Digital Video Technology</h3>
            <p>Get certified in Adobe Premiere Pro! These courses give students an in-depth look at filming and editing, and allows students to be part of the CHS TV 25 Storm Report show. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="left-p">
        <div class="teche bio">
          <div class="txt">
            <h3>PLTW Biomedical Sciences Program</h3>
            <p>Get the Biotechnician Assistant Certification. This four-course program allows students to explore human medicine and biotechnology concepts through hands-on experience. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
    </div>
    <div class="arts">
      <h2>Arts</h2>
      <div class="left-p">
        <div class="art dmf">
          <div class="txt">
            <h3>Digital Media/Multi Media Foundations</h3>
            <p>Get certified using Adobe Photoshop CC and Adobe Illustrator! These courses will teach students how to utilize drawing software to create artwork. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="right-p">
        <div class="art dai">
          <div class="txt">
            <h3>Digital Art Imaging</h3>
            <p>Get certified in Adobe Animate and Adobe Indesign! These courses teach students the basics of media creation and be part of the CHS Yearbook team. </p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
      <div class="left-p">
        <div class="art tv">
          <div class="txt">
            <h3>Television Production</h3>
            <p>These courses allow students to create original videos and work as part of the TV25 film crew.</p>
          </div>
          <div class="cimg"></div>
        </div>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Copyright from "./Copyright.vue";

export default {
  name: "Programs",
  components: {
    Copyright
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.bio > .cimg {
  background: url('../assets/U-BIO.jpeg');
}
.apc > .cimg {
  background: url('../assets/u-AP.jpg');
}
.dit > .cimg {
  background: url('../assets/u-dit.jpg');
}
.gsf > .cimg {
  background: url('../assets/u-gaming.jpg');
}
.dvt > .cimg {
  background: url('../assets/u-v.jpg');
}
.tv > .cimg {
  background: url('../assets/u-tv.jpg');
}
.dmf > .cimg {
  background: url('../assets/u-media.jpeg');
}
.dai > .cimg {
  background: url('../assets/u-digitalart.jpg');
}

.bio > .cimg, .apc > .cimg, .dit> .cimg, .gsf> .cimg, .dvt> .cimg, .tv> .cimg, .dmf> .cimg, .dai> .cimg {
  background-size: cover;
  background-position: center;
}
.txt {
  padding: 15px;
  font-family: "Roboto", sans-serif;
}
.CTE {
  font-size: 24px;
  font-weight: bold;
}
.txt > h3 {
  margin: 0;
}
.art .txt > h3 {
  margin-top: -10px;
}
a {
  color: inherit;
  word-break: break-all;
}
.program {
  background-color: rgb(27, 219, 233);
  padding: 50px 0;
  text-align: justify;
}
.program-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
}
.teche {
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 30px;
  align-items: stretch;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.teche .txt {
  flex: 2;
}
.teche .cimg {
  flex: 1;
  min-height: 150px;
}
.art {
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 30px;
  align-items: stretch;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 20px;
}
.art .txt {
  flex: 2;
}
.art .cimg {
  flex: 1;
  min-height: 150px;
  margin: -10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.right-p > .art {
  flex-direction: row-reverse;
}
.right-p > .art .cimg {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.right-p > .teche {
  flex-direction: row-reverse;
}
.tv {
  margin-bottom: 0;
}
.left-p {
  display: flex;
  flex-direction: row;
}
.right-p {
  display: flex;
  flex-direction: row-reverse;
}
.art {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
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
  background: linear-gradient(
      rgba(112, 42, 106, 0.45) 0%,
      rgba(112, 42, 106, 0.45) 100%
    ),
    url("../assets/u-arts.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 40px;
}
.tech {
  background: linear-gradient(
      rgba(47, 47, 121, 0.45) 0%,
      rgba(47, 47, 121, 0.45) 100%
    ),
    url("../assets/u-astronaut.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 40px;
}
.arts h2,
.tech h2 {
  font-size: 60px;
  color: white;
  margin: 0;
  padding: 5vw;
}
.tech h2 {
  font-family: "Righteous", cursive;
}
.arts h2 {
  font-family: "Rock Salt", cursive;
  padding-top: 4vw;
  margin-bottom: -20px;
}
@media (orientation: portrait) {
  .program h1 {
    font-size: 43px;
    font-family: "Righteous", cursive;
  }
  .left-p, .right-p {
    display: block;
  }
  .tech h2 {
    font-size: 43px;
  }
  .teche, .art {
    width: 90%;
    margin: 0 auto 30px auto;
    display: block;
  }
  .right-p > .art .cimg, .art .cimg {
  border-top-left-radius: 0;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 20px;
}
}
</style>
