<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container is-grid is-grid-50-50">
      <div class="left-bar">
        <div class="intro-card card">
          <h2>Hi There! I'm John</h2>
          <h4>
            Designing and implementing solutions for over <b>4 years</b> as a
            Software Developer
          </h4>
        </div>
      </div>
      <div class="right-bar" style="background-color: brown; width: 100%"></div>
    </div>
  </div>
</template>

<script>
import navBar from "./components/navbar.vue";
export default {
  name: "App",
  components: { navBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;800;900&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-weight: 200;
}
#app {
  margin: 0;
  padding: 0;
}
.is-flex {
  display: flex;
}
.is-grid {
  display: grid;
}
.is-grid-50-50 {
  grid-template-columns: repeat(2, 1fr);
}
.card {
  padding: 100px;
}
</style>
