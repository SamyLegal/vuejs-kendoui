<template>
  <div id="app">

    <h1>{{msg}}</h1>

    <router-link to="/form-view">Formulaire</router-link>
    <router-link to="/grid">Grid</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
  // Composants
  import FormView from './FormView.vue';
  import Grid from './Grid.vue';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      FormView,
      Grid
    }
  }

</script>

