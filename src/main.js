import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

const moment = require("moment-timezone");
moment.locale("pt-BR");
moment.tz("America/Sao_Paulo");

//import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/pt";
import Select2 from "v-select2-component";

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;

var g = require("./global");

g.axiosNode(axios, process.env.VUE_APP_URL_API_NODE);
g.axiosNet(axios, process.env.VUE_APP_URL_API_NET);

Vue.component("Select2", Select2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
