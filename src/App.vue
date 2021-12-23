<template>
  <div id="app">
      <nav class="container flex justify-around py-3 mx-auto bg-black	text-white			">
        <div class="flex items-center">
          <router-link to ="/" class="text-l font-medium">MoShop</router-link>
        </div>

        <!-- right header section -->
        <div class="flex items-center space-x-2">
          <router-link v-if="!user" to="/login" class="px-2 py-1 text-blue-100 bg-blue-800 rounded-md">
            Login
          </router-link>
          <router-link v-if="!user" to="/register" class="px-2 py-1 text-gray-200 bg-blue-400 rounded-md">
            Register
          </router-link>
          <router-link v-if="user" to="/profil" class="px-2 py-1 text-white-200 bg-red-400 rounded-md">
            Profil
          </router-link>
          <button @click="logout" v-if="user"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg></button>
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
  }  ,
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  },
// 

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
