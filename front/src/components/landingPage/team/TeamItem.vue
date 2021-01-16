<template>
  <div class="team-item">
    <div
      :style="style"
      class="team-item-image"
    ></div>
    <br>
    <b>{{name}}</b>
  </div>
</template>

<script>
export default {
  props: ["name", "image"],
  computed: {
    style() {
      return {
        background: `url(${this.image})`,
        backgroundSize: "cover",
      };
    },
  },
};
</script>

<style lang="scss">
.team-item-image {
  width: 100%;
  height: 25vh;
  background-position-x: center !important;
  border-radius: 20px;
  max-height: 200px;
}

.team-item {
  min-width: 120px;
  max-width: 190px;
  
}
</style>
