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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
