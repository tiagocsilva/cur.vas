<template>
  <div class="catalog">

    <div class="catalog-background top-background">

      <div class="catalog-content">
        <h1 class="text-center">
          Nosso Catálogo
        </h1>
      </div>

    </div>

    <team class="team" />

    <b-container class="text-left">

      <h2 class="mt-5">Programação</h2>
      <catalog-list :list="programmingCourses" />

      <h2>Marketing</h2>
      <catalog-list :list="marketingCourses" />

      <h2>Soft Skills</h2>
      <catalog-list :list="softSkillsCourses" />

    </b-container>

  </div>
</template>

<script>
import CatalogList from "@/components/landingPage/catalogList/CatalogList.vue";
import programmingCourses from "@/params/programmingCourses.js";
import marketingCourses from "@/params/marketingCourses.js";
import softSkillsCourses from "@/params/softSkillsCourses.js";

export default {
  components: {
    CatalogList,
  },
  computed: {
    programmingCourses: () => programmingCourses,
    marketingCourses: () => marketingCourses,
    softSkillsCourses: () => softSkillsCourses,
  },
};
</script>

<style lang="scss">
.catalog-background {
  background: url("../../assets/images/catalog_background.jpg");
  background-position-y: bottom !important;
  height: 50vh !important;
  max-height: 400px;
}

.catalog-content {
  padding-top: 25vh;
  color: #fff;
}
</style>