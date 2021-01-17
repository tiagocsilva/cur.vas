<template>
  <div class="carrers">

    <div class="carrers-background top-background">

      <b-container class="carrers-content text-left text-right">

        <div class="text-container">
          <h1 class="text-right">
            Nossa trilha de carreira é muito legal!
          </h1>

          <br>

          <p>Aqui vai um texto bem legal tbm,explicando sobre as trilhas de carreiras Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

      </b-container>

      <card-box
        class="card-box-carrers mt-5"
        description="Orientação Profissional"
      />

    </div>

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
.carrers-background {
  background: url("../../assets/images/carrers_background.jpg");
  height: 100vh !important;
}

.carrers-content {
  padding-top: 25vh;
  color: #fff;
}

.text-container {
  width: 700px;
  margin-left: auto;
  max-width: 100%;
}

.card-box-carrers {
  background: $alert;
  color: #fff;
  width: 250px;
  height: 100px;

  margin-left: 100px !important;

  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .card {
    height: 150px !important;
  }
}

@media only screen and (max-width: 600px) {
  .card-box-carrers {
    margin: auto !important;
    margin-top: 30px !important;
    text-align: center;
  }
}
</style>