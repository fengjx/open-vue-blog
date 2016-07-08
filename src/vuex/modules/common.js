import {
  ALERT
} from '../mutation-types'

// initial state
const state = {
  alert: {
    show: false,
    msg: ''
  },
  easeMusic: {
    url: 'http://music.163.com/outchain/player?type=0&id=365546314&auto=1&height=430',
    width:308,
    height:450
  }
};

// mutations
const mutations = {
  [ALERT] (state, msg) {
    alert(msg);
    state.alert = {
      show: true,
      msg: msg
    }
  }
};

export default {
  state,
  mutations
}
