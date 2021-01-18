<template>
  <b-navbar
    fixed="top"
    class="top-menu flex-center shadow py-0"
  >

    <top-menu-item :logo="true" to="/" />
    <top-menu-item title="Nosso Catálogo" to="/catalog" />
    <top-menu-item title="Para Empresas" to="/companies" />
    <top-menu-item title="Vagas" to="/opportunities" />
    <top-menu-item title="Sobre Nós" to="/about" />
    <top-menu-item button="Entrar" to="/login" />

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
  border-radius: 0px 0px 30px 30px;
}
</style>