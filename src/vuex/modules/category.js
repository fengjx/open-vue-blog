import {
  GET_CATEGORY_TREE
} from '../mutation-types'

// initial state
const state = {
  tree: [
    {
      id:'1',
      name:'首页'
    },
    {
      id:'2',
      name:'首页'
    },
    {
      id:'1',
      name:'首页'
    },
    {
      id:'1',
      name:'首页'
    },
    {
      id:'1',
      name:'首页'
    },
    {
      id:'1',
      name:'首页'
    }
  ],
  curShow: ''
};

// mutations
const mutations = {
  [GET_CATEGORY_TREE] (state, category) {
    state.tree = category
  }
};

export default {
  state,
  mutations
}
