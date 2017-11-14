<template>
  <div id="app">

    <h1>{{msg}}</h1>

    <router-link to="/date-picker">Date-picker</router-link>
    <router-link to="/grid">Grid</router-link>
    <router-link to="/items/1">Items 1</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
  // Composants
  import DatePicker from './DatePicker.vue';
  import Grid from './Grid.vue';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      DatePicker,
      Grid
    }
  }

</script>

