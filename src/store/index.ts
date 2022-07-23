import { createStore } from 'vuex'
import HomeModule from './modules/HomeModule'

export default createStore({
  state: {
    currentModuleIndex: 0,
    moduleStateList: [
      {
        owner: '花木',
        state: '1',
        avatarPath:
          'https://prts.wiki/images/4/4f/%E5%A4%B4%E5%83%8F_%E5%A4%9A%E8%90%9D%E8%A5%BF.png'
      },
      {
        owner: 'reaving',
        state: '3',
        avatarPath:
          'https://prts.wiki/images/e/ed/%E5%A4%B4%E5%83%8F_%E5%AE%89%E5%BE%B7%E5%88%87%E5%B0%94_skin1.png'
      },
      {
        owner: 'Kelly',
        state: '3',
        avatarPath:
          'https://prts.wiki/images/4/48/%E5%A4%B4%E5%83%8F_%E6%98%9F%E6%BA%90.png'
      }
    ]
  },
  getters: {},
  mutations: {
    moduleTabChange(state, index) {
      state.currentModuleIndex = index
    }
  },
  actions: {},
  modules: {
    HomeModule
  }
})
