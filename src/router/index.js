import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const RouterConfig = {
  // mode: 'history',
  routes: routes
}
const router = new Router(RouterConfig)
export default router
