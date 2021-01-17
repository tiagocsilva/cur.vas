<template>
  <div class="home">
    <div class="home-background top-background">

      <div class="home-content">
        <h2 class="p-3 shadow">
          Boas-vindas à Cur.Vas
        </h2>
      </div>

    </div>

    <quick-start-dialog class="quick-start-dialog" />

    <catalog class="catalog-section" />

    <opportunities />

    <about-dialog class="about-dialog" />

    <about-curvas />

    <like-proposal />
  </div>
</template>

<script>
import QuickStartDialog from "@/components/landingPage/QuickStartDialog.vue";
import Catalog from "@/components/landingPage/catalog/Catalog.vue";
import Opportunities from "@/components/landingPage/opportunities/Opportunities.vue";
import AboutCurvas from "@/components/landingPage/AboutCurvas.vue";
import AboutDialog from "@/components/landingPage/AboutDialog.vue";
import LikeProposal from "@/components/landingPage/likeProposal/LikeProposal.vue";

export default {
  components: {
    Catalog,
    AboutDialog,
    LikeProposal,
    AboutCurvas,
    Opportunities,
    QuickStartDialog,
  },
};
</script>

<style lang="scss">
.home-background {
  background: url("../../assets/images/home_background.jpg");
}

.home-content {
  padding-top: calc(95vh - 320px);
  color: #fff;

  h2 {
    background: #fff;
    width: 550px;
    max-width: 90%;
    margin: auto;
    border-radius: 20px 5px 20px 5px;
    color: #333;
  }
}

.quick-start-dialog {
  margin-top: -180px !important;
  z-index: 3;
  position: relative;
}

.catalog-section {
  margin-top: -100px;
  padding-top: 120px;
}

.about-dialog {
  position: absolute;
  margin-top: -100px;
  right: 7vw;
}
</style>