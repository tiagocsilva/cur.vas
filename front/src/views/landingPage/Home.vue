<template>
  <div class="home">
    <div class="home-background top-background">

      <div class="home-content">
        <h2 class="p-3 shadow">
          Seja Bem Vindo à
          <br>
          Cur.Vas
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
  background: url("../../assets/images/home_background2.jpg");
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