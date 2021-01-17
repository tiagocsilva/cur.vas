<template>
  <b-container class="pretest-container text-left">
    <h2>
      Descubra qual curso é mais adequado aos seus <br>interesses e pontos fortes pessoais.
    </h2>

    <div class="text-start">
      Você encontrará situações comuns do cotidiano, e deverá escolher uma das duas respostas que lhe são apresentadas. Sua escolha deverá refletir o que você efetivamente faria e não o que gostaria de fazer nestas situações. Caso fique em dúvida, marque aquela com a qual você mais se identifica.
    </div>

    <button class="btn-alert no-border shadow mt-4" @click="$emit('start')">vamos lá?</button>
  </b-container>
</template>

<style lang="scss">
.text-start {
  width: 500px;
  max-width: 90%;
}
</style>
