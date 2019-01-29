<template>
  <div class="home">
    <p class="celebration">Celebration TSA</p>
    <div class="big-three">
      <div class="chapter">
        <div class="content">
          <div>
            <h2>Our Chapter</h2>
            <p>Here we say, like, y'know, cool stuff</p>
          </div>
        </div>
      </div>
      <div class="music">
        <div class="content">
          <div>
            <h2>Celebrating the music</h2>
            <p>Here we say, like, y'know, cool stuff</p>
          </div>
        </div>
      </div>
      <div class="programs">
        <div class="content">
          <div>
            <h2>Our CTE Programs</h2>
            <p>Here we say, like, y'know, cool stuff</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  color: #222;
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
  transform: scale(.94);
}
.big-three > div {
  display: flex;
  flex-direction: column;
  margin: 0 5px;
}
.chapter {
  background-image: url("https://www.positivelyosceola.com/wp-content/uploads/2018/02/celebrationhigh.jpg");
  flex: 5;
}
.music {
  background-image: url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  flex: 9;
}
.programs {
  background-image: url("https://images.unsplash.com/photo-1520229534044-62d7cd4e9b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  flex: 5;
}
.programs,
.chapter,
.music {
  transform: scale(1);
  transition: transform 0.6s;
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
  box-sizing: border-box;
  width: 100%;
  flex: 1;
}

.content > div {
  position: relative;
  top: 10px;
  transition: top 0.5s;
}

.content h2 {
  font-family: "Righteous", cursive;
  font-size: 47px;
  color: #222;
  font-weight: lighter;
  margin: 0;
}

.content p {
  font-size: 22px;
  color: #222;
}

.programs:hover > .content,
.chapter:hover > .content,
.music:hover > .content {
  opacity: 1;
}

.programs:hover > .content > div,
.chapter:hover > .content > div,
.music:hover > .content > div {
  top: 0;
}
</style>
