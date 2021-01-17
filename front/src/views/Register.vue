<template>
  <div>

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

<style lang="scss" scoped>
.logo {
  height: 130px;
}

.register-container {
  background: $primary;
  border-radius: 20px;
  padding: 50px;
  color: #FFF;
  max-width: 700px;
}

.form-label {
  width: 150px;
  text-align: left;
}
</style>