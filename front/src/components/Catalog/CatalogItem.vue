<template>
  <b-card
    class="catalog-item"
    ref="catalogItem"
  >
    <b-card-title>{{title}}</b-card-title>

    <b-card-text>
      {{description}}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ["title", "description"],
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        triggerElement: this.$refs.catalogItem,
        triggerHook: 1,
        duration: 1,
      })
      .setTween(this.$refs.catalogItem, {
        css: {
          opacity: 1,
          rotation: 360,
          scale: 1,
        },
      });

    this.$scrollmagic.addScene(scene);
  },
};
</script>

<style lang="scss">
.catalog-item {
  min-width: 200px;
  margin: 10px 0px;
  border-bottom-right-radius: 30px;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  transform: scale(0.3);
}
</style>