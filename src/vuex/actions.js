import * as types from './mutation-types'


const pageData = {
  page: 1,
  total: 100,
  pageSize: 10,
  list: [
    {
      id: '123dfsdf21312',
      title: 'title1',
      anthor: 'FengJianxin',
      desc: 'ssssss',
      img: 'http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg',
      createDate: '2016-06-20'
    },
    {
      id: '123dfsasdadf21312',
      title: 'title2',
      anthor: 'FengJianxin',
      desc: 'ssssssasdsdasd',
      img: 'http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg',
      createDate: '2016-06-21'
    }
  ]
};

export const loadPostList = ({ dispatch }, categoryId) => {
  dispatch(types.GET_POST_LIST, pageData)
};


