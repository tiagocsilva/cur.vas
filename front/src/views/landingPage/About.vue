<template>
  <div class="about">

    <div class="about-background top-background">

      <div class="about-content">
        <h1>
          Quem é o <span class="color-alert">time 196</span>?
        </h1>
      </div>

    </div>

    <team class="team" />

    <b-container class="text-left about-text-container">

      <p>Somos um time participante da <span class="color-alert">2ª Hackathon CCR!</span></p>

      <p>O <span class="color-alert">time 196</span> é um grupo de amigos que se juntou para participar da maratona de tecnologia e inovação da CCR. Buscamos formar uma equipe com diversas skills e culturas a fim de desenvolver uma solução para o desafio proposto pela organização do evento.</p>

      <p>Temos a <span class="color-alert">visão</span> de ser referência no ramo da tecnologia e inovação,
        a fim de agregar valor ao nosso currículo para atrair as empresas que estão em busca de novos talentos.
        Nossa <span class="color-alert">missão</span> é desenvolver uma solução que ajude os jovens desempregados, que não possuem condições sociais e financeiras para se especializar,
        a se capacitar e entrar no mercado de trabalho, desde junior até níveis maiores. Além disso, que esta solução proporcione parcerias com as empresas que
        estão contratando para que elas tenham todo o suporte necessário para a captação de novos, e antigos, funcionários em troca de investir nos jovens que estão
        em busca de uma oportunidade. Os <span class="color-alert">valores</span> que prezamos são:</p>

      <ul class="about-topics">
        <li>Igualdade, inclusão e diversidade racial, social, cultural e de gênero;</li>
        <li>Tranparência;</li>
        <li>Trabalho em equipe;</li>
        <li>Incentivo aos jovens talentos, inovação e tecnologia;</li>
        <li>Experiência do usuário e;</li>
        <li>Responsabilidade sócioambiental.</li>
      </ul>

    </b-container>

  </div>
</template>

<script>
import Team from "@/components/landingPage/team/Team.vue";
import Question from "../../components/preTest/Question.vue";

export default {
  components: {
    Team,
  },
};
</script>

<style lang="scss">
.about-background {
  background: $primary;
  height: 50vh !important;
  max-height: 400px;
}

.about-content {
  padding-top: 25vh;
  color: #fff;
}

.about-topics {
  list-style: none; /* Remove default bullets */
}

.about-topics li::before {
  content: "\2022";
  color: $alert;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.team {
  margin-top: -50px;
  position: relative;
  z-index: 2;
}

.about-text-container {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>