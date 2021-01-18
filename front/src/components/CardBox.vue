<template>
  <b-card
    :class="{ 'card-box': true, 'shadow': true, 'flex-center': image  }"
    ref="cardBox"
  >

    <img
      :src="image"
      v-if="image"
    />

    <div v-else>
      <b-card-title v-if="title" class="text-center">{{title}}</b-card-title>

      <b-card-text>
        {{description}}
      </b-card-text>
    </div>

  </b-card>
</template>

<script>
export default {
  props: ["title", "description", "image"],
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        triggerElement: this.$refs.cardBox,
        triggerHook: 1,
        duration: 1,
      })
      .setTween(this.$refs.cardBox, {
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
.card-box {
  min-width: 200px;
  margin: 10px 0px;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  transform: scale(0.3);
  border: none;
  border-bottom-right-radius: 30px;

  img {
    margin-top: 20px;
    width: 180px;
  }
}
</style>