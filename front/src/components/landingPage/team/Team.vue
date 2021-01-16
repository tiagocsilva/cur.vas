<template>
  <b-row class="team-row">
    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/1.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/2.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/3.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/4.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/5.jpg')"
      />
    </b-col>

    <b-col>
      <team-item
        name="Nome Lindo"
        :image="require('@/assets/images/team/6.jpg')"
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