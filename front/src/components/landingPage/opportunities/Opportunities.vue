<template>
  <section class="opportunities">

    <b-container class="text-right">
      <h1 class="pt-5 text-left">As Oportunidades</h1>

      <p class="text-space ml-auto">
        Trabalhe nas melhores empresas do Brasil!<br>
        Confira vagas e oportunidades de emprego na sua áres em apenas alguns minutos
      </p>

      <b-row class="mt-4">
        <b-col class="mb-3">
          <card-box :image="require('@/assets/images/companies/google.svg')" />
        </b-col>

        <b-col class="mb-3">
          <card-box :image="require('@/assets/images/companies/nubank.svg')" />
        </b-col>

        <b-col class="mb-3">
          <card-box :image="require('@/assets/images/companies/picpay.svg')" />
        </b-col>

        <b-col>
          <card-box
            description="E muito mais!"
            class="last-catalog-card"
          />
        </b-col>

      </b-row>

      <div class="mt-5 text-left text-space">
        Você conhece o nosso programa de Mentoria?<br>
        Aqui, você conta com a assistencia de um time de especialistas para te auxiliar e orientar nessa jordada.
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
  padding-bottom: 130px;
}

.last-opportunities-card {
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.text-space {
  width: 600px;
  max-width: 90%;
}
</style>