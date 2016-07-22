import {
  CATEGORY_GET_TREE,
  CATEGORY_CHANGE
} from '../mutation-types';

import * as _ from 'lodash';


// initial state
const state = {
  tree: [],
  curMenu: {}
};

// mutations
const mutations = {
  [CATEGORY_GET_TREE] (state, tree) {
    state.tree = tree
  },

  [CATEGORY_CHANGE] (state, categoryId) {
    if (!categoryId) {
      state.curMenu = {};
      return;
    }
    _.forEach(state.tree, (obj) => {
      if (obj.id == categoryId) {
        state.curMenu = obj;
      } else if (!obj.isLeaf) {
        _.forEach(obj.children, (child) => {
          if (child.id == categoryId) {
            state.curMenu = child;
          }
        });
      }
    });
  }
};

export default {
  state,
  mutations
}
