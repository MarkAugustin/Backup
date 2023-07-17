import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router.js";
import VueCarousel from "vue-carousel";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
