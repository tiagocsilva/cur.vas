<template>
  <b-navbar
    fixed="top"
    class="top-menu-mobile shadow py-0"
  >
    <div
      class="flex-center w-100"
      style="justify-content: space-between"
    >
      <top-menu-item
        :logo="true"
        to="/"
        style="width: 80px"
        @click.native="opened = false"
      />

      <a
        href="#"
        class="menu-toggle"
        @click="opened = !opened"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <x-icon
            key="opened"
            v-if="opened"
            size="2x"
            class="m-3"
          ></x-icon>

          <menu-icon
            key="dontOpened"
            v-if="!opened"
            size="2x"
            class="m-3"
          ></menu-icon>
        </transition>

      </a>
    </div>

    <transition
      name="fade"
      mode="out-in"
    >

      <div
        class="flex-center flex-column w-100 top-menu-content"
        v-if="opened"
        @click="opened = false"
      >
        <top-menu-item
          title="Nosso Catálogo"
          to="/catalog"
          class="m-3 mt-4"
        />
        <top-menu-item
          title="Para Empresas"
          to="/companies"
          class="m-3"
        />
        <top-menu-item
          title="Sobre Nós"
          to="/about"
          class="m-3"
        />
        <top-menu-item
          title="Vagas"
          to="/opportunities"
          class="m-3"
        />
        <top-menu-item
          button="Entrar"
          to="/login"
          class="mt-2 mb-4"
        />
      </div>
    </transition>

  </b-navbar>
</template>

<script>
import TopMenuItem from "./TopMenuItem.vue";

import { MenuIcon, XIcon } from "vue-feather-icons";

export default {
  data() {
    return {
      opened: false,
    };
  },
  components: {
    TopMenuItem,
    MenuIcon,
    XIcon,
  },
};
</script>

<style lang="scss" scoped>
.top-menu-mobile {
  width: 100%;
  background: #fff;
  text-align: center;
  margin: auto;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  flex-direction: column;
}

.top-menu-content {
  border-top: solid 1px #dbdbdb;
}

.menu-toggle {
  color: $secondary;
  transition: all 0.2s;

  &:hover,
  &:active {
    opacity: 0.5;
  }
}
</style>