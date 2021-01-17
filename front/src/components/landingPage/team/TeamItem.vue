<template>
  <a
    :href="link"
    class="team-item-link"
    target="_blank"
  >
    <div class="team-item mb-5">
      <div
        :style="style"
        class="team-item-image"
      ></div>
      <br>
      <b>{{name}}</b>
      <div class="color-alert">{{acting}}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["name", "image", "acting", "link"],
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
.team-item-link {
  color: #222;

  transition: all 0.2s;

  &:hover {
    text-decoration: none;
    color: #222;
  }
}

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
