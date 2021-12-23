import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mg: null,
    token:null,
    user:null,
    myShop:null,


  },
  mutations: {
    //shop page d'accueil MG
    getShop(state) {
      axios
      .get('https://api-moshop.molengeek.pro/api/v1/mg/shop')
      .then(response => state.mg = response.data.data)
    },
    register(value) {
      // console.log(value);
      let UserForm = new FormData()
      UserForm.append('firstname', value.firstname)
      UserForm.append('lastname', value.lastname)
      UserForm.append('password', value.password)
      UserForm.append('email', value.email)
      UserForm.append('picture', value.img)
      axios.post('https://api-moshop.molengeek.pro/api/v1/register', UserForm)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  },   
  //connexion
  setToken (state, value) {
    state.token = value
  },
  setUser(state, value) {
    state.user = value
  },
  //logout
  logout(state) {
    state.user = null
    state.token = null
  },
  //mon shop
  myShop(state) {
    // console.log(state.token);
    axios.get('https://api-moshop.molengeek.pro/api/v1/shop', {
      headers: {
        Authorization: "Bearer " + state.token
      }
    }).then((response) => {
      state.myShop = response.data;
      // console.log(response.data);
    }) 
    
  },
  setMyShop(state, value) {
    state.myShop = value
  },

  }, 
  
  actions: {
    login: function ({commit, dispatch }, value) {
      // console.log(value);
      axios
      .post('https://api-moshop.molengeek.pro/api/v1/login', value)
      .then((res) => {
          commit('setToken', res.data.data.token);
          // state.token = res.data.data.token;
          // console.log(state.token);
          dispatch('getUser');
          })
      .catch(error => console.log(error))
  },

    async getUser({state, commit}) {
        // console.log(state.token)
        await axios.get('https://api-moshop.molengeek.pro/api/v1/user', {
          headers: {
          Authorization: "Bearer " + state.token
          }
      }).then((response) => {
          commit('setUser', response.data);
          // console.log(state.user)
      }) 
      },
        //edit profil
  editProfil( {dispatch, state}, value) {
    axios.put('https://api-moshop.molengeek.pro/api/v1/user', value, {
      headers: {
      Authorization: "Bearer " + state.token
      }
  }).then((response) => {
    console.log(response);
    dispatch('getUser')
      // commit('setUser', response.data);
      // console.log(state.user)
  })   
}

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
