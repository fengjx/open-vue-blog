import Vue from 'vue';
import VueResource from 'vue-resource';
import {API_URL_ROOT} from '../config';
import * as types from './mutation-types';


Vue.use(VueResource);

// HTTP相关
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {

  // modify request
  // request.method = 'POST';
  request.headers = request.headers || {};
  request.headers["Request-Flag"] = 'ajax';

  // continue to next interceptor
  next();
});

// post相关 start

export const loadPostList = ({dispatch}, categoryId, page = 1) => {
  let url = `${API_URL_ROOT}/pageList?page=${page}`;
  if (categoryId) {
    url += `&categoryId=${categoryId}`;
  }
  Vue.http.get(url).then((response) => {
    if (response.ok) {
      dispatch(types.POST_GET_LIST, response.data);
    } else {
      dispatch(types.ALERT, "获取文章列表失败!");
    }
  }, (e) => {
    dispatch(types.ALERT, e);
  });
};


export const loadPost = ({dispatch}, id) => {
  if (!id) {
    return;
  }
  let url = `${API_URL_ROOT}/post?id=${id}`;
  Vue.http.get(url).then((response) => {
    if (response.ok) {
      dispatch(types.POST_GET, response.data);
    } else {
      dispatch(types.ALERT, "load post error!");
    }
  }, (e) => {
    dispatch(types.ALERT, e);
  });
};

// post相关 end


export const loadTagList = ({dispatch}) => {
  let url = `${API_URL_ROOT}/tagList?top=0`;
  Vue.http.get(url).then((response) => {
    if (response.ok) {
      dispatch(types.TAG_GET_LIST, response.data);
    } else {
      dispatch(types.ALERT, "load tag list error...");
    }
  }, (e) => {
    dispatch(types.ALERT, e);
  });
};

export const loadTagTopList = ({dispatch}, top = 10) => {
  let url = `${API_URL_ROOT}/tagList?top=${top}`;
  Vue.http.get(url).then((response) => {
    if (response.ok) {
      dispatch(types.TAG_GET_TOP, response.data);
    } else {
      dispatch(types.ALERT, "load top tag error...");
    }
  }, (e) => {
    dispatch(types.ALERT, e);
  });
};


