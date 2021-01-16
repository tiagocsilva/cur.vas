<template>
  <div class="top-menu-item">
    <span v-if="logo != null">
      <img src="../../assets/images/logo.png" />
    </span>

    <span v-else-if="button != null">
      <router-link to="/login">
        <button>Entrar</button>
      </router-link>
    </span>

    <span v-else>
      {{title}}
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "logo", "button"],
};
</script>

<style lang="scss">
.top-menu-item {
  width: 100%;
  max-width: 250px;
  padding: 10px;

  img {
    height: 55px;
  }
}
</style>