import React from 'react';

import AddPost from 'containers/Posts/AddPost';
import Posts from 'containers/Posts/Posts';
import OnePost from 'containers/Posts/OnePost';

import { Switch, Route } from 'react-router-dom';

export default function(props) {
  return (
    <>
      <div className="container">
        <div className="row flex-column align-items-center">
          <Switch>
            <Route path="/post/:id" component={OnePost} />
            <Route path="/">
              <h1 className="header">Posts</h1>
              <AddPost />
              <Posts />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
