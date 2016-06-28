import {
  ALERT
} from '../mutation-types'

// initial state
const state = {
  alert: {
    show: false,
    msg: ''
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
