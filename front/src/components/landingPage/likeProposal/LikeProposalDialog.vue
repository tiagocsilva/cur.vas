<template>
  <router-link to="/login" class="link-proposal">
    <dialog-box
      class="like-proposal-dialog flex-center shadow"
      :style="style"
    >
      {{text}}
    </dialog-box>
  </router-link>
</template>

<script>
import DialogBox from "@/components/DialogBox";

export default {
  props: ['text', 'bgColor'],
  components: {
    DialogBox,
  },
  computed: {
    style() {
      return {
        background: this.bgColor
      }
    }
  }
};
</script>

<style lang="scss">
.like-proposal-dialog {
  width: 350px;
  font-size: 20px;
  padding: 30px;
  font-weight: bold;
}

.link-proposal {
  background: transparent;
  color: #FFF;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
    text-decoration: none;
    color: #FFF;
  }
}
</style>