<template>
    <section class="max-w-4xl p-8 mx-auto my-5 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700  dark:text-white">Modifier votre compte</h2>
        
        <form @submit.prevent="submit(form)" enctype="multipart/form-data">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="lastname">Nom</label>
                    <input id="lastname" :placeholder="user.lastname" v-model="form.lastname" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="firstname">Prenom</label>
                    <input id="nom" :placeholder="user.firstname" v-model="form.firstname" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>


            </div>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user.data.profile 
        }
    },
    data() {
        return {
            erreur:false,
            form: {
                lastname:null,
                firstname:null,
            }
        }
    },
    methods: {
        submit(form) {
            this.$store.dispatch('editProfil', form)
            this.$router.push('/profil')    
        },

    }

}
</script>

<style>

</style>