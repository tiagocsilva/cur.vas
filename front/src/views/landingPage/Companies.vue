<template>
  <div class="companies">

    <div class="top-background companies-background">
    </div>

    <b-container class="companies-content text-left text-right">

      <div class="text-container">
        <h1 class="text-right">
          Se você é empresa, venha ser nossa parceira
        </h1>

        <br>

        <p>Queremos proporcionar o melhor para sua empresa e, para isso, criamos alguns pacotes de contratação com carácterísticas diversas. Visamos capacitação de funcionários, mentorias para a empresa, diversidade social, racial e cultural, análises de dados, contratação e mais!</p>

        <div class="flex-center flex-wrap">
          <div class="card-companies shadow mx-5 mb-3">
            <div class="text-center color-alert font-weight-bold mb-3">
              PACOTE BÁSICO
              <br>
              Faça seu próprio recrutamento
            </div>

            <ul class="text-left companies-benefits">
              <li>Curso de capacitação em recrutamento com diversidade</li>
              <li>Curso de capacitação em diversidade social, racial e cultural</li>
              <li>Divulgação do perfil da empresa na comunidade, página de vagas e eventos</li>
              <li>Divulgação de vagas de emprego</li>
              <li>Indicação de candidatos e candidatos com honra</li>
              <li>Espaço para criar o processo seletivo</li>
              <li>Espaço para acompanhar e filtrar o processo seletivo</li>
              <li>Espaço para responder, os resultados do processo seletivo, os candidatos</li>
            </ul>

          </div>

          <div>
            <div
              class="card-companies shadow flex-center mb-3"
              style="width: 200px; height: 150px"
            >
              <div class="text-center">
                Conheça <span class="color-alert pl-1 font-weight-bold">nossos outros pacotes</span> através de um representante
              </div>
            </div>

            <div
              class="card-companies shadow bg-alert text-white flex-center"
              style="width: 200px; height: 150px"
            >
              <div class="text-center">
                <b class="pr-1">Agendar reunião</b> com um representante
              </div>
            </div>
          </div>

        </div>
      </div>

    </b-container>

  </div>
</template>

<script>
import Team from "@/components/landingPage/team/Team.vue";
import CardBox from "@/components/CardBox.vue";

export default {
  components: {
    Team,
    CardBox,
  },
};
</script>

<style lang="scss">
.companies-background {
  background: url("../../assets/images/companies_background.jpg");
  height: 100vh !important;
  position: fixed !important;
  top: 0px;
  z-index: -2;
}

.companies-content {
  padding-top: 25vh;
  color: #fff;
  position: relative;
  z-index: 22;
}

.text-container {
  width: 700px;
  margin-left: auto;
  max-width: 100%;
}

.card-companies {
  background: #fff;
  color: #333;
  border-radius: 30px 10px 30px 10px;
  padding: 20px 10px;
  width: 400px;
  font-size: 12px;
  flex-wrap: wrap;
}

.companies-benefits {
  list-style: none;

  li::before {
    content: "\2022";
    color: $alert;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}

@media only screen and (max-width: 600px) {
  .card-companies {
    flex-grow: 1;
    max-width: 100% !important;
    width: calc(100% - 30px) !important;
    margin: auto;
  }
}
</style>