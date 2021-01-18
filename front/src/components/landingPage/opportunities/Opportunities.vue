<template>
  <section class="opportunities">

    <b-container class="text-right">
      <h1 class="pt-5 text-left">Oportunidades e Parcerias</h1>

      <p class="text-space ml-auto">
        Trabalhe nas melhores empresas do Brasil!<br>
        Confira <span class="color-alert">vagas e oportunidades de emprego</span> na sua áres em apenas alguns minutos
      </p>

      <div class="d-flex justify-content-end flex-wrap">

        <card-box
          :image="require('@/assets/images/companies/google.svg')"
          class="m-1"
        />

        <card-box
          :image="require('@/assets/images/companies/nubank.svg')"
          class="m-1"
        />

        <card-box
          :image="require('@/assets/images/companies/picpay.svg')"
          class="m-1"
        />

        <card-box
          description="E muito mais!"
          class="last-opportunities-card m-1"
        />

        <card-box
          description="Seja nossa parceira também!"
          class="m-1 call-partner"
        />

      </div>

      <div class="text-space ml-auto mt-5 text-right">
        E você, <span class="color-alert">empresa</span>, achou que iria ficar de fora? Nada disso. Aqui nós temos uma proposta de parceria, com pacotes de contratação, imperdíveis!
        Aqui nós iremos <span class="color-alert">facilitar a contratação de novos talentos e processo seletivo</span>, além, é claro, de proporcionar a melhor <span class="color-alert">divulgação e mentoria</span> que só a Cur.Vas sabe preparar. <span class="color-alert">Venha fazer parte desse parceria!</span>
      </div>

      <div class="mt-5 text-left text-space mb-4">
        Você conhece o nosso programa de Mentoria?<br>
        Aqui, você conta com a <span class="color-alert">assistencia de um time de especialistas</span> para te auxiliar e orientar nessa jordada.
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

<style lang="scss">
.opportunities {
  min-height: 300px;
  text-align: left;
  padding-bottom: 100px;
  background: $primary;
  color: #fff;
  margin-top: -100px;
  padding-top: 100px;

  .card {
    width: 200px;
    height: 140px;
  }
}

.last-opportunities-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-text {
    color: #333 !important;
  }
}

.text-space {
  width: 600px;
  max-width: 90%;
}

.call-partner {
  background: $alert;
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  .opportunities .card {
    flex-grow: 1;
  }
}
</style>