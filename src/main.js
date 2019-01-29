import Vue from 'vue'
import VueRou from 'vue-router'
import App from './App.vue'
import Celebrating from './components/Celebrating'
import Chapter from './components/Chapter'
import Home from './components/Home'
import Programs from './components/Programs'

Vue.use(VueRou)

const routes = [
  { path: '/chapter', component: Chapter },
  { path: '/programs', component: Programs },
  { path: '/celebrating', component: Celebrating },
  { path: '/', component: Home }
]

const router = new VueRou({ routes, mode: 'history' })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
