<template>
  <div>
    <menu-dashboard />

    <logged-user />

    <div style="margin-left: 100px; margin-top: 150px">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import MenuDashboard from "@/components/menuDashboard/MenuDashboard.vue";
import LoggedUser from "@/components/LoggedUser.vue";

export default {
  components: {
    LoggedUser,
    MenuDashboard,
  },
};
</script>