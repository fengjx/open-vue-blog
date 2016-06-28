import {
  GET_POST_LIST,
  GET
} from '../mutation-types'

// initial state
const state = {
  pageData: {},
  detail:{}
};

// mutations
const mutations = {
  [GET_POST_LIST] (state, pageData) {
    state.pageData = pageData
  },

  [GET] (state, detail) {
    state.detail = detail
  }

};

export default {
  state,
  mutations
}
