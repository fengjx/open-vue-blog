import Vue from 'vue';
import VueResource from 'vue-resource';
import {API_URL_ROOT} from '../config';
import * as types from './mutation-types';


Vue.use(VueResource);

// HTTP相关
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {

  // modify request
  request.method = 'POST';
  request.headers = request.headers || {};
  request.headers["Request-Flag"] = 'ajax';

  // continue to next interceptor
  next();
});


export const loadPostList = ({dispatch}, categoryId, page = 1) => {
  let url = `${API_URL_ROOT}/pageList?page=${page}`;
  if (categoryId) {
    url += `&categoryId=${categoryId}`;
  }
  Vue.http.post(url).then((response) => {
    if(response.ok){
      dispatch(types.GET_POST_LIST, response.data);
    }else{
      dispatch(types.ALERT, "获取文章列表失败!");
    }
  }, (e) => {
    dispatch(types.ALERT, e);
  });


};


