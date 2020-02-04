import React from 'react';

import Post from './Post';

export default function(props) {
  return props.posts.map((value, index) => (
    <Post title={value.title} body={value.body} number={index} key={index} />
  ));
}
