<template>
  <router-link to="/login" class="link-proposal">
    <dialog-box
      class="like-proposal-dialog flex-center shadow"
      style="width: 350px"
    >
      Vamos lá!!
    </dialog-box>
  </router-link>
</template>

<script>
import DialogBox from "@/components/DialogBox";

export default {
  components: {
    DialogBox,
  },
};
</script>

<style lang="scss">
.like-proposal-dialog {
  background: $alert;
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