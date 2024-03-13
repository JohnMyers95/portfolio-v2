<script setup>
import Job from "./components/Job.vue";
import config from "./../config/experiences.json";

components: {
  Job;
}
</script>

<template>
  <div class="wrap">
    <header></header>
    <main>
      <div class="main-wrapper">
        <div class="left-bar">
          <div class="dev-details">
            <div class="dev-image-wrapper">
              <div class="dev-image"><img src="./assets/headshot.png" alt="it's a me, Mario!" /></div>
            </div>
            <h1 class="dev-name">{{ config.developer_info.name }}</h1>
            <h1 class="light-gray sub-heading">
              {{ config.developer_info.self_title }}
            </h1>
            <p>
              {{ config.developer_info.info }}
            </p>
          </div>
        </div>
        <div class="right-bar">
          <section>
            {{ config.developer_info.background }}
          </section>
          <section id="experience">
            <div v-for="foundJob in config.jobs" :key="foundJob.title + '-' + foundJob.company">
              <job :job="foundJob"></job>
            </div>
          </section>
          <!--
          <section id="projects">
            <div class="project">
              <div class="project-image"></div>
              <div class="project-details">
                <div class="project-title">
                  <h3>Project Title</h3>
                </div>
                <div class="project-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
                <div class="project-tech-stack">
                  <ul>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>Asterisk</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          -->
        </div>
      </div>
    </main>
    <footer>
      <div class="wrapper"></div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Patua+One&family=Poppins:ital,wght@0,300;0,400;0,500;1,400;1,500&display=swap");
</style>

<style scoped>
.main-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  width: 98%;
}

.left-bar {
  display: flex;
  flex-direction: column;
}

.dev-details {
  top: 100px;
  left: 0;
  position: sticky;
}

.dev-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dev-details .dev-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 19px -8px black;
}

.dev-details .dev-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

section#experience {
  padding-top: 80px;
}

section#projects {
  padding-top: 80px;
}

.intro {
  font-family: "Inter", sans-serif;
}

.dev-name {
  font-family: "Patua One", serif;
  font-size: 4em;
}

.sub-heading {
  font-family: "Patua One", serif;
}

.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wrapper {
  padding: 20px 0px;
}

@media only screen and (max-width: 900px) {
  .main-wrapper {
    grid-template-columns: 1fr;
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<style>
ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.button {
  padding: 15px 40px;
  border-radius: 30px;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: var(--color-button-background);
  color: var(--color-button-text);
  transition: all 0.3s;
}

.button:hover {
  background-color: var(--color-button-background-hover);
}
</style>
