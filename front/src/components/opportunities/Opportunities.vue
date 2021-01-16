<template>
  <section class="opportunities pl-4">

    <b-container
      fluid
      class="text-right"
    >
      <h1 class="pt-5 text-left">As Oportunidades</h1>

      <p class="text-space ml-auto">eu queria colocar um texto bem legal explicando sobre as oportunidades mas eu to sem criatividade nesse momento hihi</p>
 
      <b-row class="mt-4">
        <b-col class="mb-3">
          <opportunities-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <opportunities-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <opportunities-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <opportunities-item
            title="Card Title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </b-col>

        <b-col class="mb-3">
          <opportunities-item
            description="Conheça todas as nossas oportunidades"
            class="last-opportunities-card"
          />
        </b-col>

      </b-row>

      <div class="mt-5 text-left text-space font-italic">
        e explicar um pouco sobre a orientação : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

    </b-container>

  </section>
</template>

<script>
import OpportunitiesItem from "./OpportunitiesItem.vue";
export default {
  components: {
    OpportunitiesItem,
  },
};
</script>

<style lang="scss">
.opportunities {
  min-height: 300px;
  text-align: left;
  padding-bottom: 50px;
}

.last-opportunities-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.text-space {
    width: 700px;
    max-width: 90%;
}
</style>