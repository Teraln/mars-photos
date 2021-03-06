import Vue from 'vue';
import App from './App.vue';
import chooseRover from './routes/chooseRover.vue';
import Viewer from './routes/Viewer.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//Event bus 
Vue.prototype.$eventHub = new Vue();

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: chooseRover, props: true },
    { path: '/viewer', component: Viewer, props: true }
  ],
  mode: 'history'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
