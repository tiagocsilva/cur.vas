<template>
  <b-navbar
    fixed="top"
    class="top-menu flex-center shadow-sm"
  >

    <top-menu-item title="Nosso Catálogo" />
    <top-menu-item title="Trilha de Carreiras" />
    <top-menu-item :logo="true" />
    <top-menu-item title="Sobre Nós" />
    <top-menu-item button="Entrar" />

  </b-navbar>
</template>

<script>
import TopMenuItem from "./TopMenuItem.vue";
export default {
  components: {
    TopMenuItem,
  },
};
</script>

<style lang="scss" scoped>
.top-menu {
  width: 80%;
  background: #fff;
  text-align: center;
  margin: auto;

  border-radius: 0px 0px 20px 20px;
}
</style>