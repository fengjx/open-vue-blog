
// common部分 start
export const alertMsg = state => {
  return state.common.alert;
};

export const easeMusic = state => {
  return state.common.easeMusic;
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


// category部分 start
export const headMenu = state => {
  return state.category.tree;
};

// category部分 end


// tags部分 start
export const tagsList = state => {
  return state.tags.list;
};


export const tagsTopList = state => {
  return state.tags.topList;
};

// tags部分 end
