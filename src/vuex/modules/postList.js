import {
  GET_POST_LIST
} from '../mutation-types'

// initial state
const state = {
  pageData: {}
};

// mutations
const mutations = {
  [GET_POST_LIST] (state, pageData) {
    state.pageData = pageData
  }
};

export default {
  state,
  mutations
}
