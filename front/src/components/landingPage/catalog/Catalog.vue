<template>
  <section class="catalog">

    <b-container>
      <h1 class="pt-4">Conheça nossos cursos</h1>

      <div class="mb-4">
        Autonomia na hora de estudar e preparação para o mercado de trabalho em um só lugar!
        Conquieste seu futuro!
      </div>

      <div class="cards flex-wrap">
        <div class="mb-3">
          <card-box
            class="mx-3"
            title="WEB"
            description="Desenvolva ‌sistemas‌ ‌para‌ ‌web,‌ ‌‌utilizando‌ ‌linguagem‌ ‌CSS,‌ ‌HTML‌ ‌e‌ ‌Javascript‌.‌ Aprenda a criar sites, lojas virtuais e aplicativos para internet!"
          />
        </div>

        <div class="mb-3">
          <card-box
            class="mx-3"
            title="IOT"
            description="Aprenda ‌a integrar ‌dispositivos‌ ‌moveis a ‌máquinas‌ ‌e‌ ‌equipamentos, ‌‌aplicando‌ ‌os‌ ‌princípios‌ ‌da‌ ‌programação!"
          />
        </div>

        <div class="mb-3">
          <card-box
            class="mx-3"
            title="DATA MANAGEMENT"
            description="Seja um Cientista de Dados!  Por meio de aplicações práticas, você poderá executar as principais tarefas de um ambiente de Business Intelligence: Extração, Transformação e Carga de Dados."
          />
        </div>

        <div class="mb-3">
          <card-box
            class="mx-3"
            title="MARKETING DIGITAL"
            description="Melhore a performece e resultados, aprendendo a cmo analisar campanhas. O curso contempla módulos sobre Google Ads, Facebook e Instagram Ads, SEO e Email Marketing."
          />
        </div>

        <div class="mb-3">
          <card-box
            description="Conheça nosso catálogo completo"
            class="last-catalog-card mb-3 mx-3"
          />
        </div>

      </div>

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
  background: $primary;
  min-height: 300px;
  text-align: left;
  padding-bottom: 50px;
  color: #fff;
}
</style>

<style lang="scss">
.cards {
  color: #000;
  height: 100%;

  margin: 0 -10px;

  .card {
    background: $details1;
    width: 150px !important;
    max-width: 180px !important;
    min-width: 180px !important;
    display: flex;
    align-self: stretch;
    margin: 0 10px;
  }

  .card-title {
    font-size: 1.2em;
  }

  .card-text {
    font-size: 12px !important;
  }
}

@media only screen and (max-width: 600px) {
  .cards > div, .cards .card {
    flex-grow: 1;
    max-width: 100% !important;
    width: calc(100% - 30px) !important;
    margin: auto;
  }
}

.last-catalog-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>


<style lang="scss">
.cards {
  display: flex;
  // margin: 0 -10px;
}

.card {
  width: 200px;
  //  margin: 0 10px;
}

img {
  max-width: 100%;
}
</style>