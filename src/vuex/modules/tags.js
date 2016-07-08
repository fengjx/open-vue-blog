import {
  TAG_GET_LIST,
  TAG_GET_TOP
} from '../mutation-types'

// initial state
const state = {
  topList: [],
  list:[]
};

// mutations
const mutations = {
  [TAG_GET_LIST] (state, list) {
    state.list = list;
  },

  [TAG_GET_TOP] (state, topList) {
    state.topList = topList;
  }

};

export default {
  state,
  mutations
}
