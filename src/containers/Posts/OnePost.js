import { connect } from 'react-redux';

import OnePost from 'components/Posts/OnePost';

const mapStateToProps = state => ({
  ...state.posts,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OnePost);
