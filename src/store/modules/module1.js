const state = {
  // 查询条件
  searchKey: '',
    // 查询结果
  searchResultList: []
}
const getters = {
  count: state => 3
}
const actions = {}
const mutations = {
  'SET_SEARCH_LIST' (state, list) {
    state.searchResultList = list
  },
  'UPDATE_SEARCH_VAL' (state, key) {
    state.searchKey = key
  },
  'CLEAR_SEARCH_VAL' (state) {
    state.searchKey = ''
    state.searchResultList = []
  }
}

const module1 = {
  state,
  getters,
  actions,
  mutations
}

export default module1
