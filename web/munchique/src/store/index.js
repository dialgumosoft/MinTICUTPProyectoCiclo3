import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const jwtToken = new Vuex.Store({
  state: {
    token: ""
  }
  
})

export default jwtToken