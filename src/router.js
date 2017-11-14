import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/form-view', component: () => import('./components/FormView.vue') },
      { path: '/grid', component: () => import('./components/Grid.vue') }
    ]
  })
}
