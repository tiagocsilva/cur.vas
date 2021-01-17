<template>
  <section class="like-proposal">

    <b-container class="text-left pt-5 pb-5 flex-center">

      <div>
        <h1>Curtiu nossa proposta?</h1>

        <p>Registre-se agora e tenha acesso a conteúdos e oportunidades exclusivas!</p>
      </div>

      <like-proposal-dialog />

    </b-container>

  </section>
</template>

<script>
import LikeProposalDialog from "./LikeProposalDialog.vue";
export default {
  components: {
    LikeProposalDialog,
  },
};
</script>

<style lang="scss">
.like-proposal {
  background: $secondary;
  color: #fff;
}
</style>