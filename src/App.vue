<template>
  <div id="app">
    <search>
      <user></user>
    </search>
  </div>
</template>

<script>
  import Search from './components/SearchContent.vue'
  import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    Search,
    User
  },
}
</script>