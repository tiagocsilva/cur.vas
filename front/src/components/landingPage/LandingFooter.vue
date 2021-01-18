<template>
  <section class="landing-footer">
    <p class="mb-3">Feito com carinho e atenção pelo

      <router-link
        to="about"
        class="footer-link"
      >
        <b>time 196 <span
            style="font-size: 20px"
            class="color-alert"
          >♡</span></b>
      </router-link>

      - todos os direitos reservados (c) 2021
    </p>

    <div class="small">
      Home | Nosso Catálogo | Trilha de Carreiras | Politica de Privacidade | Trabalhe Conosco | Contato
    </div>
  </section>
</template>

<style lang="scss">
.landing-footer {
  background: #f0f0f0;
  padding: 30px;
}

.footer-link {
  color: $alert;
  &:hover,
  &:active {
    text-decoration: none;
    color: $alert;
    opacity: 0.8;
  }
}
</style>