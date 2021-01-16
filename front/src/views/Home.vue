<template>
  <div class="home">
    <top-menu />

    <div class="home-background">

      <div class="home-content">
        <h2 class="p-3 shadow">
          Seja Bem Vindo ao
          <br>
          Cur.Vas
        </h2>
      </div>

    </div>

    <quick-start-dialog class="dialog" />

    <catalog class="catalog" />
    
    <opportunities />

    <about-curvas />

    <br>
    <br>

  </div>
</template>

<script>
import TopMenu from "@/components/topMenu/TopMenu.vue";
import QuickStartDialog from "@/components/QuickStartDialog.vue";
import Catalog from "@/components/catalog/Catalog.vue";
import Opportunities from '@/components/opportunities/Opportunities.vue';
import AboutCurvas from '@/components/AboutCurvas.vue';

export default {
  components: {
    TopMenu,
    Catalog,
    AboutCurvas,
    Opportunities,
    QuickStartDialog,
  },
};
</script>

<style lang="scss">
.home-background {
  background: url("../assets/images/home_background2.jpg");
  background-size: cover;
  height: 90vh;
  width: 100%;
  z-index: 2;
  position: relative;
  background-attachment: fixed;
}

.home-content {
  padding-top: 23vh;
  color: #fff;

  h2 {
    background: #fff;
    width: 500px;
    max-width: 90%;
    margin: auto;
    border-radius: 20px 5px 20px 5px;
    color: #333;
    background-image: url("https://www.transparenttextures.com/patterns/60-lines.png");
  }
}

.dialog {
  margin-top: -180px !important;
  z-index: 3;
  position: relative;
}

.catalog {
  margin-top: -100px;
  padding-top: 120px;
}
</style>