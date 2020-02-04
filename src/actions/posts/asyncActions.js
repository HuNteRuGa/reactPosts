import db from 'db';

import { LOAD_POSTS } from './types';

export const addPost = async (dispatch, data) => {
  const { title, body } = data;

  const posts = [...data.posts, { id: Date.now(), title: title, body: body }];

  db.collection('posts')
    .doc('posts')
    .set({ posts })
    .then(() => {
      console.log('ok');
    })
    .catch(() => {
      console.log('bad');
    });
};

export const observePosts = dispatch => {
  db.collection('posts')
    .doc('posts')
    .onSnapshot(doc => {
      dispatch({
        type: LOAD_POSTS,
        payload: doc.data().posts,
      });
    });
};
