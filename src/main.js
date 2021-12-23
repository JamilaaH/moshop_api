import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && store.state.user == null) {   
    next('/login');}
     else {
        next();}
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
