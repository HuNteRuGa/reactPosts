import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  const { id } = props.match.params;
  const post = props.posts[id] || { title: '', body: '' };
  console.log(post);

  return (
    <>
      <Link to="/" className="back">
        Назад
      </Link>
      <section className="post">
        <h1 className="post__title">{post.title}</h1>
        <div className="post__body">{post.body}</div>
      </section>
    </>
  );
}
