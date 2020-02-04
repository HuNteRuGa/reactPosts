import { connect } from 'react-redux';

import AddPost from 'components/Posts/AddPost';

import { addPost } from 'actions/posts/asyncActions';

const mapStateToProps = state => ({
  ...state.posts,
});

const mapDispatchToProps = dispatch => ({
  onAddPost: data => {
    addPost(dispatch, data);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
