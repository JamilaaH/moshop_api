<template>
  <div id="app">
      <nav class="container flex justify-around py-3 mx-auto bg-purple-600	text-white			">
        <div class="flex items-center">
          <router-link to ="/" class="text-l font-medium">MoShop</router-link>
        </div>
        <!-- left header section -->
        <div class="items-center hidden space-x-8 lg:flex">
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link>
        </div>
        <!-- right header section -->
        <div class="flex items-center space-x-2">
          <router-link to="/login" class="px-2 py-1 text-blue-100 bg-blue-800 rounded-md">
            Login
          </router-link>
          <router-link to="/register" class="px-2 py-1 text-gray-200 bg-gray-400 rounded-md">
            Register
          </router-link>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    token() {
      return this.$store.state.token
    }
  }  


}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

  a
    text-transform: uppercase
    font-size: 14px

</style>
