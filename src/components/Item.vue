<!-- Item.vue -->
<template>
  <div>{{ item.title }}</div>
</template>

<script>
  export default {
    asyncData ({ store, route }) {
      // Retourne la Promesse depuis l'action
      return store.dispatch('fetchItem', route.params.id)
    },

    computed: {
      // Récupération de l'élément depuis l'état du store
      item () {
        return this.$store.state.items[this.$route.params.id]
      }
    }
  }
</script>
