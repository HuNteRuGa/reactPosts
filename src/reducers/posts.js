import { LOAD_POSTS } from 'actions/posts/types';

const initialState = {
  posts: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};
