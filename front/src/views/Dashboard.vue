<template>
  <div>
    <menu-dashboard />

    <!-- <logged-user /> -->

    <div style="margin-left: 80px; margin-right: 10px; margin-top: 150px; position: relative">
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