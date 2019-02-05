<template>
  <div class="home">
    <p class="celebration">Celebration TSA</p>
    <div class="big-three">
      <div class="chapter" @click="chapter">
        <div class="content">
            <h2>Our Chapter</h2>
        </div>
      </div>
      <div class="music" @click="music">
        <div class="content">
            <h2>Celebrating the music</h2>
        </div>
      </div>
      <div class="programs" @click="programs">
        <div class="content">
            <h2>Our CTE Programs</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    chapter() {
      this.$router.push("/chapter");
    },
    music() {
      this.$router.push("/celebrating");
    },
    programs() {
      this.$router.push("/programs");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  color: #222;
  background-color: rgb(225, 227, 229);
}
.celebration {
  margin: 10px auto;
  margin-top: 26px;
  font-family: "Righteous", cursive;
  font-size: 60px;
}
.big-three {
  flex: 1;
  display: flex;
  flex-direction: row;
  transform: scale(0.94);
}
.big-three > div {
  display: flex;
  flex-direction: column;
  margin: 0 5px;
}
.chapter {
  background-image: url("../assets/u-chapter.jpg");
  flex: 5;
}
.music {
  background-image: url("../assets/u-music.jpg");
  flex: 9;
}
.programs {
  background-image: url("../assets/u-CTE.jpeg");
  flex: 5;
}
.programs,
.chapter,
.music {
  transform: scale(1);
  transition: transform 0.6s;
  background-size: cover;
  background-position: center;
}
.programs:hover,
.chapter:hover,
.music:hover {
  transform: scale(1.015);
  z-index: 999;
}

.content {
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.6);
  transition: opacity 0.6s;
  padding: 20px 30px;
  padding-bottom: 0;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  text-align: center;
}

.content h2 {
  font-family: "Righteous", cursive;
  font-size: 47px;
  color: #222;
  font-weight: lighter;
  margin: 0;
  margin-top: 20vh;
}

.programs:hover > .content,
.chapter:hover > .content,
.music:hover > .content {
  opacity: 1;
}

@media (orientation: portrait) {
  .big-three {
    flex-direction: column;
  }
  .big-three > div {
    margin-top: 20px;
  }
  .content {
    opacity: 1;
  }
  .content h2 {
    margin-top: 5vh;
  }
  .celebration {
    margin-bottom: -30px;
  }
}
@media (orientation: portrait) and (min-width: 800px) {
  .content h2 {
    font-size: 67px;
  }
  .celebration {
    margin-bottom: -30px;
  }
}
@media (max-width: 530px) {
  .content {
    padding: 5px;
    padding-bottom: 0;
  }
  .celebration {
    font-size: 40px;
  }
  .content h2 {
    font-size: 34px;
  }
}
</style>
