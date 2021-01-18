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
          <b-input v-model="register.email" />
        </div>
      </div>

      <div class="mb-4 flex-center">
        <div class="form-label">
          Senha
        </div>
        <div class="w-100">
          <b-input
            type="password"
            v-model="register.senha"
          />
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

      <button
        class="btn-alert float-right"
        @click="doRegister"
        :disabled="loading"
      >

        <font-awesome-icon
          v-if="loading"
          :icon="['fas', 'spinner']"
          spin
        />

        <span v-else>Próxima</span>
      </button>

    </b-container>

  </div>
</template>

<script>
import * as registerService from "@/api/register";
import { ArrowLeftCircleIcon } from "vue-feather-icons";

export default {
  components: {
    ArrowLeftCircleIcon,
  },
  data() {
    return {
      register: {},
      loading: false,
    };
  },
  methods: {
    doRegister() {
      this.loading = true;
      registerService
        .register(this.register)
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/pretest",
          });
        })
        .finally(() => (this.loading = false));
    },
  },
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