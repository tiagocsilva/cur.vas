<template>
  <div class="menu-dashboard">

    <div>
      <home-icon size="2x"></home-icon>
    </div>

    <div
      class="flex-center"
      style="flex-direction: column"
    >
      <book-icon
        size="2x"
        class="m-3"
      ></book-icon>

      <user-check-icon
        size="2x"
        class="m-3"
        style="margin-left: 24px !important"
      ></user-check-icon>

      <user-icon
        size="2x"
        class="m-3"
      ></user-icon>

      <globe-icon
        size="2x"
        class="m-3"
      ></globe-icon>
    </div>

    <div>
      <log-out-icon size="2x"></log-out-icon>
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

export default {
  components: {
    HomeIcon,
    LogOutIcon,
    BookIcon,
    UserIcon,
    GlobeIcon,
    UserCheckIcon,
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

  background: #c4c4c4;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>