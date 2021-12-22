import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: null,
    token:null,
    user:null,

  },
  mutations: {
    getShop(state) {
      axios
      .get('https://api-moshop.molengeek.pro/api/v1/mg/shop')
      .then(response => state.shop = response.data.data)
    },
    setToken:function (state, value) {
      state.token = value
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

  },
  
  actions: {
    login: function ({commit }, value) {
      // console.log(value);
      axios
      .post('https://api-moshop.molengeek.pro/api/v1/login', value)
      .then((res) => {
          commit('setToken', res.data.data.token)
          // state.token = res.data.data.token;
          // console.log(state.token);
          // dispatch('getUser');
          // console.log(state.token);
          })
      .catch(error => console.log(error))
  },

    async getUser(state) {
        console.log(state.token)
      //    axios.get('https://api-moshop.molengeek.pro/api/v1/user', {
      //     headers: {
      //     Authorization: "Bearer " + state.token
      //     }
      // }).then((response) => {
      //     state.user = response.data;
      //     console.log(state.user)
      // }) 
      },

  },
  modules: {
  },

})
