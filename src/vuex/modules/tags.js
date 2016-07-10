import {
  TAG_GET_LIST,
  TAG_CHANGE
} from '../mutation-types'

import * as _ from 'lodash';

// initial state
const state = {
  topList: [],
  list: [],
  curTag: {}
};

// mutations
const mutations = {
  [TAG_GET_LIST] (state, list) {
    state.list = list;
    state.topList = list.slice(0, 10) ;
  },

  [TAG_CHANGE] (state, tagId) {
    state.curTag = _.find(state.list, function (chr) {
      return chr.id == tagId;
    })
  }

};

export default {
  state,
  mutations
}
