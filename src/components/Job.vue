<script setup>
const props = defineProps({
  job: Object,
});
</script>

<template>
  <div class="job">
    <div class="job-timeline">
      <span class="job-year">{{ props.job.year_started }}</span>
      <span class="job-dash">—</span>
      <span class="job-year">{{ props.job.year_ended }}</span>
    </div>
    <div class="job-details">
      <div class="job-header">
        <component :is="props.job.url ? 'a' : 'span'" :href="props.job.url || undefined" target="_blank"
          class="job-title-link">
          {{ props.job.title }}
        </component>
        <span class="job-company">
          {{ props.job.company }}
          <span v-if="props.job.location" class="job-location">· {{ props.job.location }}</span>
        </span>
      </div>

      <ul v-if="props.job.bullets && props.job.bullets.length" class="job-bullets">
        <li v-for="(bullet, i) in props.job.bullets" :key="i">{{ bullet }}</li>
      </ul>
      <p v-else class="job-info">{{ props.job.info }}</p>

      <div class="job-tech-stack">
        <span v-for="tech in props.job.tech_stack" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 24px;
  padding: 20px 16px;
  border-radius: 10px;
  transition: background 0.2s;
  cursor: default;
  margin: 0 -16px;
}

.job:hover {
  background: var(--bg-hover, #1e1e24);
}

/* Timeline column */
.job-timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3px;
  gap: 0;
}

.job-year {
  font-family: var(--font-mono, monospace);
  font-size: 0.72em;
  color: var(--text-muted, #5a5a6e);
  line-height: 1.4;
}

.job-dash {
  font-family: var(--font-mono, monospace);
  font-size: 0.72em;
  color: var(--text-muted, #5a5a6e);
}

/* Job content */
.job-header {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 12px;
}

.job-title-link {
  font-family: var(--font-body, sans-serif);
  font-size: 0.95em;
  font-weight: 500;
  color: var(--text-bright, #e8e8f0);
  text-decoration: none;
  transition: color 0.18s;
}

.job:hover .job-title-link {
  color: var(--accent, #e8b84b);
}

.job-company {
  font-size: 0.82em;
  color: var(--text-muted, #5a5a6e);
  font-weight: 300;
}

.job-location {
  color: var(--text-muted, #5a5a6e);
}

/* Bullets */
.job-bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 0;
  margin-bottom: 14px;
  list-style: none;
}

.job-bullets li {
  font-size: 0.85em;
  color: var(--text, #a8a8b8);
  line-height: 1.65;
  padding-left: 16px;
  position: relative;
}

.job-bullets li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--accent-dim, #a07c28);
}

.job-info {
  font-size: 0.85em;
  color: var(--text, #a8a8b8);
  line-height: 1.7;
  margin-bottom: 14px;
}

/* Tech tags */
.job-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  padding: 3px 10px;
  border-radius: 4px;
  font-family: var(--font-mono, monospace);
  font-size: 0.68em;
  color: var(--accent, #e8b84b);
  background: rgba(232, 184, 75, 0.08);
  border: 1px solid rgba(232, 184, 75, 0.18);
  letter-spacing: 0.03em;
  transition: background 0.18s, border-color 0.18s;
}

.job:hover .tech-tag {
  background: rgba(232, 184, 75, 0.12);
  border-color: rgba(232, 184, 75, 0.3);
}

@media (max-width: 600px) {
  .job {
    grid-template-columns: 1fr;
    gap: 8px;
    margin: 0;
  }

  .job-timeline {
    flex-direction: row;
    gap: 4px;
  }
}
</style>