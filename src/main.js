import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false


axios.get('/api/')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
