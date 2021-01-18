import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueScrollmagic from 'vue-scrollmagic';
// import VueToastr from "@deveodk/vue-toastr";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import "@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css";
import '@/assets/scss/custom.scss';

Vue.config.productionTip = false

// library.add(fas);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueScrollmagic);
// Vue.use(VueToastr);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
