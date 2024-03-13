<script setup>

const props = defineProps({
  title: String,
  description: String,
  stack: String,
  codeLinks: Array,
})

function getImageUrl(codeLink) {
  // This path must be correct for your file
  return new URL(`../assets/${codeLink.logo}`, import.meta.url)
}
</script>

<template>
  <div class="project">
    <h1 class="title">{{ props.title }}</h1>
    <p class="description">{{ props.description }}</p>
    <div class="bottom-wrap">
      <h3 class="stack"><strong>Stack: </strong>{{ props.stack }}</h3>
      <div class="code-links">
        <a v-for="codeLink in props.codeLinks" :href="codeLink.url" target="_blank"><img class="logo" :src="getImageUrl(codeLink)" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  width: 100%;
  height: 100%;
}
.bottom-wrap {
    display: grid;
    grid-template-columns: 10fr 1fr;
    align-items: center;
}
a {
    cursor: pointer;
}
.code-links {
  display: flex;
  gap: 10px;
}
.logo {
    width: 25px;
    aspect-ratio: 1;
    margin: auto;
    transition: .2s;
}
</style>
