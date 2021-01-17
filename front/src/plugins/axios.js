"use strict";

import Vue from 'vue';
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

const vm = new Vue({
  methods: {
    showErr: function (msg, title, type) {
      this.$toastr(type || "error", {
        msg: msg,
        title: title ?? "Erro :(",
        position: 'toast-top-full-width',
        timeout: 10000,
        clickClose: true
      });
    }
  }
});

axios.interceptors.response.use(
  response => response,
  err => {
    if (err.response.status != 401) {
      if (err.response) {
        let errToShow = err.response.data || err;

        if ((errToShow.erro || errToShow.error) && errToShow.message)
          errToShow = errToShow.message;

        const validate = err.response.status == 422;

        vm.showErr(errToShow, validate ? 'Validação' : null, validate ? 'warning' : null);
      } else vm.showErr("Ocorreu um erro, entre em contato com o pessoal da Cur.Vas.");
    }
    return Promise.reject(err);
  }
);


const _axios = axios.create(config);

let config = {}

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
