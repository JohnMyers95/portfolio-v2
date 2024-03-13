<script setup>
</script>

<template>
  <nav class="navMenu">
    <div class="heading">
      <div class="colourIcon"></div>
      <h3>John Myers</h3>
    </div>
    <div class="menu-wrap">
      <div class="dark-mode-toggle"></div>
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
        <li><button>CV</button></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav.navMenu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}
.heading {
  display: flex;
  gap: 10px;
}
.colourIcon {
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50px;
  background-color: blue;
}
.menu-wrap {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

ul {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>

