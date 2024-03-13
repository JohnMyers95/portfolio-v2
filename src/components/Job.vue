<script setup>
const props = defineProps({
  job: Object,
});
</script>

<template>
  <div class="job is-flex">
    <div class="job-timeline">
      <p>{{ props.job.year_started }} - {{ props.job.year_ended }}</p>
    </div>
    <div class="job-details">
      <div class="job-title">
        <a href="https://icabbi.com" target="_blank">{{ props.job.title }} - {{ props.job.company }}</a>
      </div>
      <div class="job-info">
        {{ props.job.info }}
      </div>
      <div class="job-tech-stack">
        <ul>
          <li v-for="tech in props.job.tech_stack">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 25px;
  padding: 15px;
  transition: all 0.3s;
}

.job:hover {
  background: #5252ff4a;
  border-radius: 15px;
  cursor: pointer;
}

.job a {
  text-decoration: none;
  color: var(--color-heading);
}

.job-timeline {
  color: var(--color-text);
}

.job-details {
  text-align: justify;
}

.job-info {
  color: var(--color-text);
}

.job-tech-stack {
  padding: 10px 0px;
}

.job-tech-stack ul {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.job-tech-stack ul li {
  padding: 2px 10px;
  display: flex;
  border-radius: 15px;
  background: #4a4aff87;
  font-size: 0.9em;
  color: var(--color-tile-text);
}

@media only screen and (max-width: 900px) {
  .job {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>
