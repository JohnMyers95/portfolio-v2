<script setup>
import Job from "./components/Job.vue";
import config from "./../config/experiences.json";

components: {
  Job;
}
</script>

<template>
  <div class="wrap">
    <div class="noise-overlay"></div>
    <main>
      <div class="main-wrapper">

        <!-- LEFT SIDEBAR -->
        <aside class="left-bar">
          <div class="dev-details">

            <div class="avatar-wrap">
              <div class="dev-image">
                <img src="./assets/headshot.png" alt="John Myers" />
              </div>
              <div class="avatar-ring"></div>
            </div>

            <h1 class="dev-name">{{ config.developer_info.name }}</h1>
            <p class="dev-title">{{ config.developer_info.self_title }}</p>
            <p class="dev-location">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Sheffield, UK &mdash; Remote friendly
            </p>

            <div class="divider"></div>

            <!-- Contact -->
            <nav class="contact-links">
              <a :href="'mailto:' + config.developer_info.email" class="contact-item">
                <span class="contact-label">Email</span>
                <span class="contact-value">{{ config.developer_info.email }}</span>
              </a>
              <a :href="'tel:' + config.developer_info.phone" class="contact-item">
                <span class="contact-label">Phone</span>
                <span class="contact-value">{{ config.developer_info.phone }}</span>
              </a>
              <a :href="'https://' + config.developer_info.website" target="_blank" class="contact-item">
                <span class="contact-label">Web</span>
                <span class="contact-value">{{ config.developer_info.website }}</span>
              </a>
              <a :href="config.developer_info.linkedin" target="_blank" class="contact-item">
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">john-myers-984465165</span>
              </a>
              <a :href="config.developer_info.github_personal" target="_blank" class="contact-item">
                <span class="contact-label">GitHub</span>
                <span class="contact-value">JohnMyers95</span>
              </a>
            </nav>

            <div class="divider"></div>

            <!-- Education -->
            <div class="education-section">
              <p class="sidebar-section-label">Education</p>
              <div v-for="edu in config.education" :key="edu.degree" class="edu-item">
                <span class="edu-year">{{ edu.year }}</span>
                <div>
                  <div class="edu-degree">{{ edu.degree }}</div>
                  <div class="edu-institution">{{ edu.institution }}</div>
                </div>
              </div>
            </div>

          </div>
        </aside>

        <!-- RIGHT CONTENT -->
        <div class="right-bar">

          <section class="profile-section">
            <h2 class="section-heading">Profile</h2>
            <p class="profile-text">{{ config.developer_info.background }}</p>
          </section>

          <section id="experience">
            <h2 class="section-heading">Experience</h2>
            <div class="jobs-list">
              <div v-for="foundJob in config.jobs" :key="foundJob.title + '-' + foundJob.company">
                <job :job="foundJob"></job>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>

    <footer>
      <p class="footer-text">{{ config.developer_info.name }} &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap");

:root {
  --bg: #0f0f11;
  --bg-card: #16161a;
  --bg-hover: #1e1e24;
  --border: #2a2a32;
  --accent: #e8b84b;
  --accent-dim: #a07c28;
  --text: #a8a8b8;
  --text-bright: #e8e8f0;
  --text-muted: #5a5a6e;
  --font-display: "DM Serif Display", Georgia, serif;
  --font-body: "Outfit", sans-serif;
  --font-mono: "DM Mono", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text-bright);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.button {
  padding: 12px 32px;
  border-radius: 4px;
  border: 1px solid var(--accent);
  cursor: pointer;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.25s;
}

.button:hover {
  background: var(--accent);
  color: var(--bg);
}
</style>

<style scoped>
/* Subtle noise texture */
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 100;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 64px 24px;
}

.main-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 72px;
  max-width: 1080px;
  width: 100%;
}

/* ── LEFT SIDEBAR ── */
.left-bar {
  position: relative;
}

.dev-details {
  position: sticky;
  top: 64px;
}

/* Avatar */
.avatar-wrap {
  position: relative;
  width: 108px;
  height: 108px;
  margin-bottom: 28px;
}

.dev-image {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.dev-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%) contrast(1.05);
}

.avatar-ring {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1.5px solid var(--accent);
  opacity: 0.45;
  z-index: 0;
}

/* Name & title */
.dev-name {
  font-family: var(--font-display);
  font-size: 2.2em;
  font-weight: 400;
  color: var(--text-bright);
  line-height: 1.1;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.dev-title {
  font-family: var(--font-mono);
  font-size: 0.72em;
  color: var(--accent);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-bottom: 10px;
  line-height: 1.6;
}

.dev-location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78em;
  color: var(--text-muted);
}

.icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  opacity: 0.7;
}

/* Divider */
.divider {
  height: 1px;
  background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
  margin: 22px 0;
}

/* Contact */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.contact-item {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 7px 8px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.18s;
  margin: 0 -8px;
}

.contact-item:hover {
  background: var(--bg-hover);
}

.contact-item:hover .contact-value {
  color: var(--accent);
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 0.65em;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.09em;
  width: 46px;
  flex-shrink: 0;
}

.contact-value {
  font-size: 0.78em;
  color: var(--text);
  transition: color 0.18s;
  word-break: break-all;
}

/* Education */
.sidebar-section-label {
  font-family: var(--font-mono);
  font-size: 0.65em;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.edu-item {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 10px;
  margin-bottom: 16px;
  align-items: start;
}

.edu-year {
  font-family: var(--font-mono);
  font-size: 0.7em;
  color: var(--accent-dim);
  padding-top: 2px;
}

.edu-degree {
  font-size: 0.8em;
  color: var(--text-bright);
  font-weight: 400;
  line-height: 1.45;
  margin-bottom: 3px;
}

.edu-institution {
  font-size: 0.72em;
  color: var(--text-muted);
}

/* ── RIGHT CONTENT ── */
.right-bar {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 2px;
}

.section-heading {
  font-family: var(--font-display);
  font-size: 1.75em;
  font-weight: 400;
  color: var(--text-bright);
  margin-bottom: 28px;
  position: relative;
  padding-bottom: 16px;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 36px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.profile-text {
  font-size: 0.93em;
  line-height: 1.85;
  color: var(--text);
  max-width: 62ch;
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Footer */
footer {
  border-top: 1px solid var(--border);
  padding: 20px 24px;
  display: flex;
  justify-content: center;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.7em;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .main-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .dev-details {
    position: static;
  }

  main {
    padding: 36px 20px;
  }
}
</style>