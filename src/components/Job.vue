<script setup>
const props = defineProps({
  job: Object,
});
</script>

<template>
  <div class="job is-flex">
    <div class="job-timeline">
      <p>{{ props.job.year_started }} – {{ props.job.year_ended }}</p>
    </div>
    <div class="job-details">
      <div class="job-title">
        <component :is="props.job.url ? 'a' : 'span'" :href="props.job.url || undefined" target="_blank">
          {{ props.job.title }} · {{ props.job.company }}
          <span v-if="props.job.location" class="job-location">{{ props.job.location }}</span>
        </component>
      </div>
      <div class="job-info">
        <ul v-if="props.job.bullets && props.job.bullets.length">
          <li v-for="(bullet, i) in props.job.bullets" :key="i">{{ bullet }}</li>
        </ul>
        <p v-else>{{ props.job.info }}</p>
      </div>
      <div class="job-tech-stack">
        <ul>
          <li v-for="tech in props.job.tech_stack" :key="tech">{{ tech }}</li>
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
  font-size: 0.85em;
  padding-top: 3px;
}

.job-title {
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 8px;
}

.job-location {
  font-weight: 400;
  font-size: 0.85em;
  color: var(--color-text);
  margin-left: 6px;
}

.job-details {
  text-align: left;
}

.job-info {
  color: var(--color-text);
  font-size: 0.9em;
  line-height: 1.6;
}

.job-info ul {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 1.2em;
  list-style: disc;
}

.job-info ul li {
  padding: 0;
  background: none;
  border-radius: 0;
  font-size: 1em;
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
  font-size: 0.85em;
  color: var(--color-tile-text);
}

@media only screen and (max-width: 900px) {
  .job {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>