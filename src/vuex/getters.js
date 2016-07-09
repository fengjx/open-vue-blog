// common部分 start
export const alertMsg = state => {
  return state.common.alert;
};

export const easeMusic = state => {
  return state.common.easeMusic;
};


export const loading = state => {
  return state.common.loading;
};

// common部分 end

// post部分 start

export const postPageList = state => {
  return state.post.pageData;
};


export const postDetail = state => {
  return state.post.detail;
};

// post部分 end


// tags部分 start
export const tagsList = state => {
  return state.tags.list;
};


export const tagsTopList = state => {
  return state.tags.topList;
};

// category部分 start

export const categoryTree = state => {
  return state.category.tree;
};

export const categoryCurMenu = state => {
  return state.category.curMenu;
};


// category部分 end
