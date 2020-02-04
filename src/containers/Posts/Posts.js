import { connect } from 'react-redux';

import Posts from 'components/Posts/Posts';

const mapStateToProps = state => ({
  ...state.posts,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
