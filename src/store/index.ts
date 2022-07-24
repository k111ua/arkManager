import { createStore } from 'vuex'
import HomeModule from './modules/HomeModule'

export default createStore({
  state: {
    currentModuleIndex: 0,
    moduleStateList: []
  },
  getters: {},
  mutations: {
    moduleTabChange(state, index) {
      state.currentModuleIndex = index
    },
    handleModuleStateList(state, list) {
      state.moduleStateList = list
    }
  },
  actions: {},
  modules: {
    HomeModule
  }
})
