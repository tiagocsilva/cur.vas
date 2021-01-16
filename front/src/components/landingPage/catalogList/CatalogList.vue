<template>
  <section class="catalog-list">

    <b-container
      class="text-right"
    >
      <b-row class="mt-4">
        <b-col class="mb-3" v-for="(course, i) in list" :key="i">
          <catalog-list-item
            :title="course.title"
            :description="course.description"
          />
        </b-col>

        <b-col class="mb-3 flex-center">
          <button>Ver todos</button>
        </b-col>

      </b-row>

    </b-container>

  </section>
</template>

<script>
import CatalogListItem from "./CatalogListItem.vue";
export default {
  props: ['list'],
  components: {
    CatalogListItem,
  },
};
</script>

<style lang="scss">
.catalog-list {
  min-height: 300px;
  text-align: left;
  margin-bottom: 50px;
}
</style>