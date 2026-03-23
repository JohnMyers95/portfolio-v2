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
            <h2 class="light-gray sub-heading">
              {{ config.developer_info.self_title }}
            </h2>
            <p class="location-line">{{ config.developer_info.info }}</p>

            <!-- Contact Links -->
            <div class="contact-links">
              <a :href="'mailto:' + config.developer_info.email">
                <span class="contact-icon">✉</span> {{ config.developer_info.email }}
              </a>
              <a :href="'tel:' + config.developer_info.phone">
                <span class="contact-icon">📞</span> {{ config.developer_info.phone }}
              </a>
              <a :href="'https://' + config.developer_info.website" target="_blank">
                <span class="contact-icon">🌐</span> {{ config.developer_info.website }}
              </a>
              <a :href="config.developer_info.linkedin" target="_blank">
                <span class="contact-icon">in</span> LinkedIn
              </a>
              <a :href="config.developer_info.github_personal" target="_blank">
                <span class="contact-icon">⌥</span> GitHub
              </a>
            </div>

            <!-- Education -->
            <div class="education-section">
              <h3 class="section-label">Education</h3>
              <div v-for="edu in config.education" :key="edu.degree" class="edu-item">
                <span class="edu-year">{{ edu.year }}</span>
                <div>
                  <strong>{{ edu.degree }}</strong>
                  <div class="edu-institution">{{ edu.institution }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right-bar">
          <section class="profile-section">
            <p>{{ config.developer_info.background }}</p>
          </section>

          <section id="experience">
            <h3 class="section-label">Experience</h3>
            <div v-for="foundJob in config.jobs" :key="foundJob.title + '-' + foundJob.company">
              <job :job="foundJob"></job>
            </div>
          </section>
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

.dev-name {
  font-family: "Patua One", serif;
  font-size: 3em;
  margin-bottom: 4px;
}

.sub-heading {
  font-family: "Patua One", serif;
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 8px;
}

.location-line {
  font-size: 0.85em;
  color: var(--color-text);
  margin-bottom: 16px;
}

/* Contact links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
}

.contact-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85em;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s;
}

.contact-links a:hover {
  color: var(--color-heading);
}

.contact-icon {
  font-style: normal;
  width: 18px;
  text-align: center;
}

/* Education */
.education-section {
  margin-top: 8px;
}

.edu-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.85em;
}

.edu-year {
  color: var(--color-text);
  padding-top: 2px;
}

.edu-institution {
  color: var(--color-text);
  font-size: 0.9em;
}

/* Section labels */
.section-label {
  font-family: "Patua One", serif;
  font-size: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 10px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-border, #ccc);
}

section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.profile-section {
  padding-top: 20px;
  line-height: 1.7;
}

section#experience {
  padding-top: 40px;
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

  .dev-details {
    position: static;
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