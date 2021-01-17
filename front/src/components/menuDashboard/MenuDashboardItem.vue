<template>
  <div class="position-relative">
    <router-link
      :to="to"
      class="menu-dashboard-item"
    >
      <slot></slot>

      <div :style="style" class="menu-name">{{name}}</div>

    </router-link>
  </div>
</template>

<script>
export default {
  props: ["to", "name", "hoverPosition"],
  computed: {
    style() {
      console.log(this.hoverPosition)
      return {
        left: this.hoverPosition ? this.hoverPosition.left : '60px',
        top: this.hoverPosition ? this.hoverPosition.top : '15px'
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.menu-name {
  position: absolute;
  background-color: #ffb800;
  padding: 5px 20px;
  border-radius: 20px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  color: #000;
}

.menu-dashboard-item:hover .menu-name {
  visibility: visible;
  opacity: 1;
}
</style>