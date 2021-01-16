<template>
  <section class="catalog">

    <b-container>
      <h1 class="pt-4">Nosso catálogo</h1>

      <div class="mb-4">
        talvez aqui podemos colocar uma frase de motivação pra fazer o curso.
      </div>

      <b-row>
        <b-col class="mb-3">
          <card-box
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <card-box
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <card-box
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <card-box
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <card-box
            description="Conheça nosso catálogo completo"
            class="last-catalog-card"
          />
        </b-col>

      </b-row>
    </b-container>

  </section>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
export default {
  components: {
    CardBox,
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  background: #c4c4c4;
  min-height: 300px;
  text-align: left;
  padding-bottom: 50px;
}

.last-catalog-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>