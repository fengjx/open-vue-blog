import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import common from './modules/common'
import post from './modules/post'
import category from './modules/category'
import tags from './modules/tags'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

Vue.config.debug = debug;

export default new Vuex.Store({
  modules: {
    common,
    post,
    category,
    tags
  },
  strict: debug,
  middlewares
})
