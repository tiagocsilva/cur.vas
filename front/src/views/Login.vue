<template>
  <div class="login flex-center">
    <div class="login-background"></div>

    <b-container class="login-container">

      <router-link to="/" class="back-button color-alert">
        <arrow-left-circle-icon size="2x"></arrow-left-circle-icon>
      </router-link>

      <img
        class="logo"
        src="../assets/images/logo.svg"
      />

      <div class="login-form-container mt-4">
        <div>
          <b-input
            type="text"
            placeholder="e-mail"
            class="login-input"
          />
        </div>

        <div class="mt-3">
          <b-input
            type="password"
            placeholder="senha"
            class="login-input"
          />
        </div>

        <div class="mt-2 text-right small font-italic">
          esqueceu a senha?
        </div>

        <button class="mt-4 px-5 no-border btn-alert shadow">acesse já!</button>

        <div class="mt-5 text-left">
          ...ou acesse utilizando:
        </div>

        <div class="flex-center mt-2">
          <div class="social-icon-space color-alert">
            <linkedin-icon size='2x'></linkedin-icon>
          </div>
          <div class="social-icon-space">
            <github-icon size="2x"></github-icon>
          </div>
          <div class="social-icon-space">
            <facebook-icon size='2x'></facebook-icon>
          </div>
          <div class="social-icon-space">
            <twitter-icon size='2x'></twitter-icon>
          </div>
        </div>

      </div>

      <div class="mt-5 text-right">
        Ainda não faz parte?

        <router-link
          to="/register"
          class="color-alert"
        >
          <b>Cadastre-se</b>
        </router-link>
        :)
      </div>

    </b-container>
  </div>
</template>

<script>
import {
  ArrowLeftCircleIcon,
  LinkedinIcon,
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
} from "vue-feather-icons";

export default {
  components: {
    ArrowLeftCircleIcon,
    LinkedinIcon,
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
  },
};
</script>

<style lang="scss" scoped>
.login > div {
  width: 50%;
  height: 100vh;
}

.login-background {
  background-image: url("../assets/images/login_background.jpg");
  background-size: cover;
  // position: fixed;
}

.login-container {
  width: calc(50% + 50px) !important;
  background-color: #fff;
  padding: 80px;
  padding-top: 8%;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  margin-left: -50px;
}

.logo {
  height: 110px;
}

.social-icon-space {
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

.login-input {
  background: $background2;
  // color: #000;
}

.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
}

@media only screen and (max-width: 900px) {
  .login-background {
    display: none;
  }

  .login-container {
    width: 100% !important;
    margin-left: 0px;
    margin: auto;
  }
}
</style>