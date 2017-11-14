import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/date-picker', component: () => import('./components/DatePicker.vue') },
      { path: '/grid', component: () => import('./components/Grid.vue') },
      { path: '/items/:id', component: () => import('./components/Item.vue') }
    ]
  })
}
