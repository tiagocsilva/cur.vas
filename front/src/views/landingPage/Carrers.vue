<template>
  <div class="carrers">

    <div class="carrers-background top-background">

      <div class="carrers-content">
        <h1>
          Nossa trilha de carreira é muito legal!
        </h1>
      </div>

    </div>

    <b-container class="text-left text-right mt-5 mb-5">

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

    </b-container>

  </div>
</template>

<script>
import Team from "@/components/landingPage/team/Team.vue";

export default {
  components: {
    Team,
  },
};
</script>

<style lang="scss">
.carrers-background {
  background: url("../../assets/images/carrers_background.jpg");
  height: 45vh !important;
  max-height: 400px;
}

.carrers-content {
  padding-top: 25vh;
  color: #fff;
}
</style>