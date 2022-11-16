<template>
  <div class="nav-bar">
    <div class="heading"><h1>John.</h1></div>
    <nav class="navigation"></nav>
    <div class="contact-button">
      <vue-button text="Let's Talk"></vue-button>
    </div>
  </div>
</template>

<script>
import vueButton from "./common/button.vue";
export default {
  components: { vueButton },
  name: "nav-bar",
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>

.nav-bar {
  height: 100px;
  background-color: aliceblue;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  padding: 0px 40px;
}
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
}
.contact-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>