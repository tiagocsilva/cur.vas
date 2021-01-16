<template>
  <div class="login flex-center">
    <div class="login-background"></div>
    <b-container class="login-container">
      <img
        class="logo"
        src="../assets/images/logo.svg"
      />

      <div class="login-form-container mt-4">
        <div>
          <b-input
            type="text"
            placeholder="e-mail"
          />
        </div>

        <div class="mt-3">
          <b-input
            type="password"
            placeholder="senha"
          />
        </div>

        <div class="mt-2 text-right small font-italic">
          esqueceu a senha?
        </div>

        <button class="mt-4 no-border">acesse já!</button>

        <div class="mt-5 text-left">
          ...ou acesse utilizando:
        </div>

        <div class="flex-center mt-2">
          <div class="blank-space"></div>
          <div class="blank-space"></div>
          <div class="blank-space"></div>
          <div class="blank-space"></div>
        </div>

      </div>

      <div class="mt-5 text-right">
        Ainda não faz parte? <b>Cadastre-se</b> :)
      </div>

    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.login > div {
  width: 50%;
  height: 100vh;
}

.login-background {
  background-image: url("../assets/images/login_background.jpg");
  background-size: cover;
}

.login-container {
  width: calc(50% + 50px) !important;
  background-color: #cacaca;
  padding: 80px;
  padding-top: 8%;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  margin-left: -50px;
}

.logo {
  height: 110px;
}

.blank-space {
  background-color: #fff;
  width: 40px;
  height: 40px;
  margin: 5px;
}

.login-form-container {
  width: 350px;
  max-width: 100%;
  margin: auto;
}
</style>