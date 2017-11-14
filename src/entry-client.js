import Vue from 'vue';
import 'es6-promise/auto';
import {createApp} from './app';

// Logique de démarrage, spécifique à l'application cliente
const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
});

// Initialisation de l'application lorsque
// le routeur est opérationnel
router.onReady(() => {
  // Ajouter le hook du routeur pour gérer `asyncData`
  // Cela étant fait après la résolution de la route initial, évitons une double récupération de données
  // des données que nous avons déjà. Utilisation de `router.beforeResolve()`, ainsi tous
  // les composants asynchrones sont résolues.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    // Nous allons uniquement nous occuper des composants qui n'ont pas déjà été rendu
    // aussi nous allons les comparer jusqu'à ce que deux éléments concordant diffères
    let diffed = false;
    const activated = matched.filter((component, index) => {
      return diffed || (diffed = (prevMatched[index] !== component))
    });

    if (!activated.length) {
      return next()
    }

    Promise
      .all(activated.map(component => {
        if (component.asyncData) {
          return component.asyncData({ store, route: to })
        }
      }))
      .then(() => {
        // arrêt de l'indicateur de chargement
        next()
      })
      .catch(next)
  });

  // Montage de l'application vue au niveau
  // de l'élément "html" ayant l'id "app"
  app.$mount('#app');
});

