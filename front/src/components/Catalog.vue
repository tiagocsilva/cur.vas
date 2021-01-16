<template>
  <div class="catalog pl-4">

    <b-container fluid>
      <h1 class="pt-2">Nosso catálogo</h1>

      talvez aqui podemos colocar uma frase de motivação pra fazer o curso.

      <b-row class="mt-4">
        <b-col>
          <b-card class="catalog-card">
            <b-card-title>Card Title</b-card-title>

            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="catalog-card">
            <b-card-title>Card Title</b-card-title>

            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="catalog-card">
            <b-card-title>Card Title</b-card-title>

            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="catalog-card">
            <b-card-title>Card Title</b-card-title>

            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="catalog-card last-catalog-card">
            <b-card-text class="text-center">
              Conheça nossos catálogo completo
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<style lang="scss">
.catalog {
  background: #c4c4c4;
  min-height: 300px;

  text-align: left;

  padding-bottom: 100px;
}

.catalog-card {
  min-width: 200px;
  margin: 10px 0px;
  border-bottom-right-radius: 30px;
  height: 100%;
}

.last-catalog-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>