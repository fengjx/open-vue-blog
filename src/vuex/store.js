import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import postList from './modules/postList'

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    postList
  },
  strict: debug,
  middlewares
})
