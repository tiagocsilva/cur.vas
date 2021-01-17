<template>
  <section class="catalog">

    <b-container>
      <h1 class="pt-4">Conheça nossos cursos</h1>

      <div class="mb-4">
        Autonomia na hora de estudar e preparação para o mercado de trabalho em um só lugar!
        Conquieste seu futuro!
      </div>

      <b-row class="cards-row">
        <b-col
          cols="2"
          class="mb-3 mx-3"
        >
          <card-box
            title="WEB"
            description="Desenvolva ‌sistemas‌ ‌para‌ ‌web,‌ ‌‌utilizando‌ ‌linguagem‌ ‌CSS,‌ ‌HTML‌ ‌e‌ ‌Javascript‌.‌ Aprenda a criar sites, lojas virtuais e aplicativos para internet!"
          />
        </b-col>

        <b-col
          cols="2"
          class="mb-3 mx-3"
        >
          <card-box
            title="IOT"
            description="Aprenda ‌a integrar ‌dispositivos‌ ‌moveis a ‌máquinas‌ ‌e‌ ‌equipamentos, ‌‌aplicando‌ ‌os‌ ‌princípios‌ ‌da‌ ‌programação!"
          />
        </b-col>

        <b-col
          cols="2"
          class="mb-3 mx-3"
        >
          <card-box
            title="DATA MANAGEMENT"
            description="Seja um Cientista de Dados!  Por meio de aplicações práticas, você poderá executar as principais tarefas de um ambiente de Business Intelligence: Extração, Transformação e Carga de Dados."
          />
        </b-col>

        <b-col
          cols="2"
          class="mb-3 mx-3"
        >
          <card-box
            title="MARKETING DIGITAL"
            description="Melhore a performece e resultados, aprendendo a cmo analisar campanhas. O curso contempla módulos sobre Google Ads, Facebook e Instagram Ads, SEO e Email Marketing."
          />
        </b-col>

        <b-col
          cols="2"
          class="mb-3 mx-3"
        >
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
  background: $primary;
  min-height: 300px;
  text-align: left;
  padding-bottom: 50px;
  color: #fff;
}
</style>

<style lang="scss">
.cards-row {
  color: #000;
  .card {
    background: $details1;
  }

  .card-title {
    font-size: 1.2em;
  }

  .card-text {
    font-size: 12px !important;
  }

  .col-2 {
    min-width: 190px !important;
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