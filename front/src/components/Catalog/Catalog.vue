<template>
  <section class="catalog pl-4">

    <b-container fluid>
      <h1 class="pt-2">Nosso catálogo</h1>

      talvez aqui podemos colocar uma frase de motivação pra fazer o curso.

      <b-row class="mt-4">
        <b-col class="mb-3">
          <catalog-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <catalog-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <catalog-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <catalog-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <catalog-item
            description="Conheça nosso catálogo completo"
            class="last-catalog-card"
          />
        </b-col>

      </b-row>
    </b-container>

  </section>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  components: {
    CatalogItem,
  },
};
</script>

<style lang="scss">
.catalog {
  background: #c4c4c4;
  min-height: 300px;
  text-align: left;
  padding-bottom: 100px;
}

.last-catalog-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>