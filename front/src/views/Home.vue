<template>
  <div class="home">
    <top-menu />

    <div class="home-background">

      <div class="home-content">
        <h1 class="pt-5">
          Seja Bem Vindo ao
          <br>
          CUR.VAS
        </h1>
      </div>

    </div>

    <quick-start-dialog class="dialog" />

    <catalog class="catalog" />

  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu/TopMenu.vue";
import QuickStartDialog from "@/components/QuickStartDialog.vue";
import Catalog from "@/components/Catalog.vue";

export default {
  components: {
    TopMenu,
    Catalog,
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
}

.home-content {
  padding-top: 12%;
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