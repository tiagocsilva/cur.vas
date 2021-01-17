<template>
  <section class="catalog-list">

    <b-container class="text-right">

      <div class="flex-center justify-content-start flex-wrap">
        <div
          v-for="(course, i) in list"
          :key="i"
          class="catalog-list-item shadow flex-center m-3"
        >
          {{course}}
        </div>

        <div class="mb-3 flex-center see-all-button-container m-3">
          <button class="outline-alert see-all-button">Ver todos</button>
        </div>
      </div>

    </b-container>

  </section>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
export default {
  props: ["list"],
  components: {
    CardBox,
  },
};
</script>

<style lang="scss">
.catalog-list {
  margin-bottom: 50px;

  .catalog-list-item {
    width: 150px;
    height: 100px;
    text-align: center;
    border-bottom-right-radius: 30px;
    font-weight: bold;
    color: #555;
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    .catalog-list-item {
      flex-grow: 1;
      max-width: 100% !important;
      width: calc(100% - 30px) !important;
      margin: auto;
    }
    .see-all-button {
      margin: auto;
      text-align: center;
      width: 100% !important;
    }
    .see-all-button-container {
      width: 100%;
    }
  }
}
</style>