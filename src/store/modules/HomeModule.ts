import link from '@/api/Link'
import apiUrl from '@/api/url'

const HomeModule: Object = {
  state: {
    mainMenuState: false,
    dialogState: false,
    updateData: {},
    listData: []
  },
  getters: {},
  mutations: {
    aaaa(state: any) {
      state.mainMenuState = !state.mainMenuState
    },
    bbbb(state: any, data: any) {
      state.dialogState = !state.dialogState
      state.updateData = data
    },
    listUpdate(state: any, data: any) {
      state.listData = data
    }
  },
  actions: {
    updateList(context: any) {
      link(apiUrl.userData).then((ok: any) => {
        context.commit('listUpdate', ok.data)
      })
    }
  }
}

export default HomeModule
