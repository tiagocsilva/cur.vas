<template>
  <b-row class="team-row">
    <b-col>
      <team-item
        name="Tiago Silva"
        acting="Desenvolvedor"
        :image="require('@/assets/images/team/TiagoSilva.jpg')"
        :link="`${linkedinBaseUrl}/tiagocs`"
      />
    </b-col>

    <b-col>
      <team-item
        name="Jéssica Vial"
        acting="Psicóloga"
        :image="require('@/assets/images/team/JessicaVial.jpg')"
        :link="`${linkedinBaseUrl}/jessica-vial`"
      />
    </b-col>

    <b-col>
      <team-item
        name="Caroline de Victa"
        acting="UX Designer"
        :image="require('@/assets/images/team/CarolineVicta.jpg')"
        :link="`${linkedinBaseUrl}/caroline-de-victa-27866498`"
      />
    </b-col>

    <b-col>
      <team-item
        name="Karina Araújo"
        acting="UX e Desenvolvedora"
        :image="require('@/assets/images/team/KarinaAraujo.jpg')"
        :link="`${linkedinBaseUrl}/karinadsaraujo`"
      />
    </b-col>

    <b-col>
      <team-item
        name="Gabriel Vieira"
        acting="Business"
        :image="require('@/assets/images/team/GabrielVieira.jpg')"
        :link="`${linkedinBaseUrl}/gvieiraf`"
      />
    </b-col>

    <b-col>
      <team-item
        name="Joara Paula"
        acting="Marketing"
        :image="require('@/assets/images/team/JoaraPaula.jpg')"
        :link="`${linkedinBaseUrl}/joara-p-de-gouveia-aa4038168`"
      />
    </b-col>

  </b-row>
</template>

<script>
import TeamItem from "./TeamItem";

export default {
  components: {
    TeamItem,
  },
  computed: {
    linkedinBaseUrl() {
      return "https://linkedin.com/in"
    }
  }
};
</script>

<style lang="scss">
.team-row {
    width: 90%;
    margin: auto;
}
</style>