import {
  POST_GET_LIST,
  POST_GET
} from '../mutation-types'

// initial state
const state = {
  pageData: {},
  detail:{}
};

// mutations
const mutations = {
  [POST_GET_LIST] (state, pageData) {
    state.pageData = pageData
  },

  [POST_GET] (state, detail) {
    state.detail = detail
  }

};

export default {
  state,
  mutations
}
