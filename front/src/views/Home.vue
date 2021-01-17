<template>
  <div>

    <top-menu class="top-menu" />
    <top-menu-mobile class="top-menu-mobile" />
    
    <transition name="fade">
      <router-view />
    </transition>
    
    <landing-footer />
  </div>
</template>

<script>
import TopMenu from "@/components/landingPage/topMenu/TopMenu.vue";
import TopMenuMobile from "@/components/landingPage/topMenu/TopMenuMobile.vue";
import LandingFooter from "@/components/landingPage/LandingFooter.vue";

export default {
  components: {
    TopMenu,
    TopMenuMobile,
    LandingFooter
  },
};
</script>

<style lang="scss" scoped>
.top-menu-mobile {
  display: none;
}

@media only screen and (max-width: 1000px) {
  .top-menu-mobile {
    display: flex;
  }
}
</style>