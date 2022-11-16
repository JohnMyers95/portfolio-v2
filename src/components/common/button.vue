<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "vue-button",
  data: function () {
    return {};
  },
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped>
.button {
  background-color: white;
  padding: 15px 20px;
  border: 1px solid rgb(92, 92, 92);
  border-radius: 3px;
  box-shadow: unset;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  transition: box-shadow 0.2s linear;
}
.button:hover {
  box-shadow: 0px 0px 12px -3px #848282;
}
.button:active {
  box-shadow: inset 0px 0px 2px 0px black;
}
</style>