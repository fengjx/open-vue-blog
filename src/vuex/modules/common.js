import {
  ALERT,
  LOADING,
  HIDE_LOADING
} from '../mutation-types'

// initial state
const state = {
  alert: {
    show: false,
    msg: ''
  },
  easeMusic: {
    url: 'http://music.163.com/outchain/player?type=0&id=365546314&auto=1&height=430',
    width: 308,
    height: 450
  },
  loading: {
    show: false,
    showText: ''
  }
};

// mutations
const mutations = {
  [ALERT] (state, msg) {
    state.alert = {
      show: true,
      msg: msg
    }
  },

  [LOADING] (state, text) {
    state.loading = {
      show: true,
      showText: text
    }
  },

  [HIDE_LOADING] (state) {
    state.loading = {
      show: false,
      showText: ''
    }
  }

};

export default {
  state,
  mutations
}
