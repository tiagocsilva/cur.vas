<template>
  <section class="like-proposal">

    <b-container class="text-left pt-5 pb-5 flex-center">

      <div class="mr-auto">
        <h1>Curtiu nossa proposta?</h1>

        <p>Registre-se agora e tenha acesso a conteúdos e oportunidades exclusivas!</p>
      </div>

      <div>
        <like-proposal-dialog text="Empresa" bg-color="#BBD5BA" class="like-proposal-dialog" />
        <br>
        <like-proposal-dialog text="Estudante" bg-color="#FF683B" class="like-proposal-dialog" />
      </div>

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

@media only screen and (max-width: 600px) {
  .like-proposal div {
    flex-direction: column;

    .like-proposal-dialog {
      margin-top: 20px;
    }
  }
}
</style>