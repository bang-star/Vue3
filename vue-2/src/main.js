import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from "@/components/GlobalComponent.vue";

Vue.config.productionTip = false

Vue.component('global-component', GlobalComponent); // 전역

new Vue({
  render: h => h(App),
}).$mount('#app')
