<template>
  <div class="menu-dashboard">

    <div>
      <menu-dashboard-item
        to="/dashboard"
        name="Pagina Inicial"
        :hoverPosition="{
          left: '40px',
          top: '0px'
         }"
      >
        <home-icon size="2x"></home-icon>
      </menu-dashboard-item>
    </div>

    <div
      class="flex-center"
      style="flex-direction: column"
    >
      <menu-dashboard-item
        to="/dashboard/courses"
        name="Meus Cursos"
      >
        <book-icon
          size="2x"
          class="m-3"
        ></book-icon>
      </menu-dashboard-item>

      <menu-dashboard-item
        to="/dashboard/jobs"
        name="Vagas Inscritas"
      >
        <user-check-icon
          size="2x"
          class="m-3"
          style="margin-left: 24px !important"
        ></user-check-icon>
      </menu-dashboard-item>

      <menu-dashboard-item
        to="/dashboard/personal"
        name="Informações Pessoais"
      >
        <user-icon
          size="2x"
          class="m-3"
        ></user-icon>
      </menu-dashboard-item>

      <menu-dashboard-item
        to="/dashboard/community"
        name="Informações Pessoais"
      >
        <globe-icon
          size="2x"
          class="m-3"
        ></globe-icon>
      </menu-dashboard-item>
    </div>

    <div>
      <menu-dashboard-item
        to="/"
        name="Sair"
        :hoverPosition="{
          left: '40px',
          top: '0px'
         }"
      >
        <log-out-icon size="2x"></log-out-icon>
      </menu-dashboard-item>
    </div>

  </div>
</template>

<script>
import {
  HomeIcon,
  LogOutIcon,
  BookIcon,
  UserIcon,
  UserCheckIcon,
  GlobeIcon,
} from "vue-feather-icons";

import MenuDashboardItem from "./MenuDashboardItem";

export default {
  components: {
    HomeIcon,
    LogOutIcon,
    BookIcon,
    UserIcon,
    GlobeIcon,
    UserCheckIcon,
    MenuDashboardItem,
  },
};
</script>

<style lang="scss">
.menu-dashboard {
  width: 70px;
  position: fixed;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  background: #030720;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0px;
}
</style>