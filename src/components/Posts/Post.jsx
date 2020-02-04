import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <section className="post">
      <div className="post__title">{props.title}</div>
      <div className="post__body">{props.body}</div>
      <Link to={`./post/${props.number}`} className="post__button">
        Подробнее
      </Link>
    </section>
  );
}
