import Vue from 'vue';
import App from './components/App.vue';
import {createRouter} from './router';
import {createStore} from './store';
import {sync} from 'vuex-router-sync';

// Bootstrap - Less
import './bootstrap.less';

// Kendo UI - Less
import "../node_modules/@progress/kendo-ui/css/web/kendo.common-bootstrap.less";
import "../node_modules/@progress/kendo-ui/css/web/kendo.bootstrap.less";

// Kendo UI - Js
import '@progress/kendo-ui/js/kendo.core';
import '@progress/kendo-ui/js/kendo.popup';
import '@progress/kendo-ui/js/kendo.datepicker';
import '@progress/kendo-ui/js/kendo.grid';
import '@progress/kendo-ui/js/cultures/kendo.culture.fr-FR';
import {KendoDatePicker, KendoDateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
Vue.use(KendoDateinputsInstaller);
import {KendoGrid, KendoGridInstaller} from '@progress/kendo-grid-vue-wrapper';
Vue.use(KendoGridInstaller);

// Création d'une fonction factory "createApp"
// pour créer de nouvelles instances de l'application,
// du routeur et du store.
// Cette factory sera utilisé par le client et le serveur
export function createApp() {

  // Initialisation du routeur et du store
  const router = createRouter();
  const store = createStore();

  // Synchronisation pour que l'état de la route soit disponible en tant que donnée du store
  sync(store, router);

  const app = new Vue({
    // Injection du routeur dans l'instance de Vue
    router,
    // Injection du store dans l'instance de Vue
    store,
    // L'instance racine rend
    // simplement le composant App.
    render: h => h(App),
    created: function () {
      kendo.culture('fr-FR');
    },
    components: {
      App,
      KendoDatePicker,
      KendoGrid
    }
  });

  return { app, store, router }
}
