<template>
  <dialog-box>
    <h2>Não sabe por onde começar?</h2>

    Faça o nosso quiz sobre trilha de carreiras, e veja o que combina mais com você!

    <br>
    <br>

    <router-link to="/login">
      <button class="btn-alert no-border">Vamos lá!!</button>
    </router-link>
  </dialog-box>
</template>

<script>
import DialogBox from "@/components/DialogBox";
export default {
  components: {
    DialogBox,
  },
};
</script>