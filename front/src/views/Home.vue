<template>
  <div>
    <top-menu />
    
    <transition name="fade">
      <router-view />
    </transition>
    
    <landing-footer />
  </div>
</template>

<script>
import TopMenu from "@/components/landingPage/topMenu/TopMenu.vue";
import LandingFooter from "@/components/landingPage/LandingFooter.vue";

export default {
  components: {
    TopMenu,
    LandingFooter
  },
};
</script>