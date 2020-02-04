import React, { useState } from 'react';

export default function(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (title.trim() !== '' && body.trim() !== '') {
          props.onAddPost({ title, body, posts: props.posts });
          setTitle('');
          setBody('');
        }
      }}
    >
      <section className="add-post">
        <div className="container">
          <div className="row flex-column align-items-center">
            <input
              className="add-post__title"
              type="text"
              placeholder="Заголовок"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              className="add-post__body"
              placeholder="Текст публикации..."
              onChange={e => setBody(e.target.value)}
              value={body}
            />
            <button className="add-post__button">Добавить пост</button>
          </div>
        </div>
      </section>
    </form>
  );
}
