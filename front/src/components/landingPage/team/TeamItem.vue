<template>
  <div class="team-item mb-5">
    <div
      :style="style"
      class="team-item-image"
    ></div>
    <br>
    <b>{{name}}</b>
    <div class="color-alert">{{acting}}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "acting"],
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
  height: 30vh;
  background-position: center !important;
  border-radius: 20px;
  max-height: 200px;
}

.team-item {
  min-width: 120px;
  max-width: 190px;
  
}
</style>
