<template>
    <div>
<!-- component -->
<!-- Profile Card -->
        <div>
        <div class="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
                <div class="md:col-span-1 h-48 shadow-xl ">
                        <div class="flex w-full h-full relative">
                            <img :src="'https://api-moshop.molengeek.pro'+user.profile.picture_path" class="w-44 h-44 m-auto" alt="">

                        </div>
                </div>
                <div class="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
                    <router-link to="/edit" class="absolute right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </router-link>
                        <div class="flex ">
                            <span
                                class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Name:</span>
                            <input 
                                class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                type="text" :value="user.profile.lastname+' '+user.profile.firstname"  readonly/>
                        </div>
                        <div class="flex ">
                            <span
                                class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Email:</span>
                            <input 
                                class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                type="text" :value="user.email"  readonly/>
                        </div>
                        <div class="flex ">
                            <span
                                class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Role:</span>
                            <input 
                                class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                type="text" value="Admin"  readonly/>
                        </div>
                </div>
                <div class="md:col-span-3 h-48 shadow-xl p-4 space-y-2 hidden md:block">
                    <h3 class="font-bold uppercase"> {{myShop.name}}</h3>
                        {{myProduct}}
                    <p class=""> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget laoreet diam, id luctus lectus. Ut consectetur nisl ipsum, et faucibus sem finibus vitae. Maecenas aliquam dolor at dignissim commodo. Etiam a aliquam tellus, et suscipit dolor. Proin auctor nisi velit, quis aliquet sapien viverra a. 
                    </p>
                </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.state.user.data
            },
            myShop() {
                return this.$store.state.myShop.data
            },
            token() {
                return this.$store.state.token
            },
            myProduct() {
                return this.$store.state.myShop.data.products
            }
        },
        mounted() {
            this.$store.commit('myShop')
        }
    }
</script>

<style lang="sass" scoped>

</style>