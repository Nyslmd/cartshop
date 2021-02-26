import Vue from "vue";
import "./plugins/bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";


library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.filter("currency", function(value) {
  return "৳ " + parseFloat(value).toFixed(2);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
