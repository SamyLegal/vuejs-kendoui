import Vue from 'vue';
import App from './components/App.vue';
import {createRouter} from './router';
import {createStore} from './store';
import {sync} from 'vuex-router-sync';

// Kendo UI
import '@progress/kendo-ui/js/kendo.core';
import '@progress/kendo-ui/js/kendo.popup';
import '@progress/kendo-ui/js/kendo.datepicker';
import '@progress/kendo-ui/js/kendo.grid';
import '@progress/kendo-ui/js/cultures/kendo.culture.fr-FR';
import {KendoDatePicker, KendoDateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
Vue.use(KendoDateinputsInstaller);
import {KendoGrid, KendoGridInstaller} from '@progress/kendo-grid-vue-wrapper';
Vue.use(KendoGridInstaller);

// Css
import '@progress/kendo-theme-default/dist/all.css'

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
