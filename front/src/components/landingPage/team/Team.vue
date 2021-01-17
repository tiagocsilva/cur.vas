<template>
  <b-row class="team-row">
    <b-col>
      <team-item
        name="Tiago Silva"
        acting="Desenvolvedor"
        :image="require('@/assets/images/team/TiagoSilva.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Jéssica Vial"
        acting="Psicóloga"
        :image="require('@/assets/images/team/JessicaVial.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Caroline de Victa"
        acting="UX Designer"
        :image="require('@/assets/images/team/CarolineVicta.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Karina Araújo"
        acting="UX e Desenvolvedora"
        :image="require('@/assets/images/team/KarinaAraujo.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Gabriel Vieira"
        acting="Business"
        :image="require('@/assets/images/team/GabrielVieira.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Joara Paula"
        acting="Marketing"
        :image="require('@/assets/images/team/JoaraPaula.jpg')"
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
};
</script>

<style lang="scss">
.team-row {
    width: 90%;
    margin: auto;
}
</style>