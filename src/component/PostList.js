import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../action";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div className='ui container'>Post list</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
