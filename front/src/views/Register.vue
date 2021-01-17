<template>
  <div>

    <router-link
      to="/login"
      class="back-button color-alert"
    >
      <arrow-left-circle-icon size="2x"></arrow-left-circle-icon>
    </router-link>

    <img
      class="logo mt-5 mb-5"
      src="../assets/images/logo.svg"
    />

    <b-container class="register-container mb-3 shadow">

      <div class="mb-4 flex-center">
        <div class="form-label">
          Nome
        </div>
        <div class="w-100">
          <b-input />
        </div>
      </div>

      <div class="mb-4 flex-center">
        <div class="form-label">
          E-mail
        </div>
        <div class="w-100">
          <b-input />
        </div>
      </div>

      <div class="mb-4 flex-center">
        <div class="form-label">
          Senha
        </div>
        <div class="w-100">
          <b-input type="password" />
        </div>
      </div>

      <div class="mb-4 flex-center">
        <div class="form-label">
          Confirme a senha
        </div>
        <div class="w-100">
          <b-input type="password" />
        </div>
      </div>

      <button class="btn-alert float-right">Próxima</button>

    </b-container>

  </div>
</template>

<script>
import { ArrowLeftCircleIcon } from "vue-feather-icons";

export default {
  components: {
    ArrowLeftCircleIcon
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 130px;
}

.register-container {
  background: $primary;
  border-radius: 20px;
  padding: 50px;
  color: #fff;
  max-width: 700px;
}

.form-label {
  width: 150px;
  text-align: left;
}

.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>