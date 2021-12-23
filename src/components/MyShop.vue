<template>
    <div class="md:col-span-3  shadow-xl p-4 space-y-2 md:block">
        <h3 class="font-bold uppercase"> {{myShop.name}}             <button @click="add"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
        </svg></button></h3>
        <p v-if="myProduct == null">Vous n'avez pas de produits en vente</p>
            <div class="grid grid-cols-4 gap-2 w-5/6 mx-auto">
      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" v-for="article in myProduct" :key="article.id">
        <img class="object-cover w-full h-56" :src="url+article.cover_path" alt="item">
        
          <div class="py-5">
              <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white">{{article.name}}</a>
              <p class="text-sm text-gray-700 dark:text-gray-200">{{article.description.slice(0, 150)}}..</p>
              <div class="flex space-x-3 absolute right-0 bottom-0 mt-3">
                <span>€{{article.price}}</span>
                <span class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
                </svg>                  
                </span>
              </div>
          </div>
        </div>
    </div>

    </div>                    

</template>

<script>
    export default {
        data() {
        return {
        url: 'https://api-moshop.molengeek.pro'
    }
    },
        computed: {
            myShop() {
                return this.$store.state.myShop.data
            },

            myProduct() {
                return this.$store.state.myShop.data.products
            }
        },
        mounted() {
            this.$store.commit('myShop')
        },
        methods: {
            add() {
                this.$emit('ajout')
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>