import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogIndex from "../components/BlogIndex/blogIndex"

import '../style/blog.css'

class Blog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cart: [],
      username: ""
    }
  }

  componentDidMount(){
    try{
      let props = this.props.location.state.props;
      this.setState({
        cart: props.cart,
        username: props.username
      });
    }catch{}
  }

  render(){
    return (
      <div className="blog">
      <Layout cart={this.state.cart} username={this.state.username} renderMenu={false}/>
      <div className="blogContent">
        <h1 className="blogsTitle">News</h1>
        <div className="posts">
          <BlogIndex posts={this.props.data.allMarkdownRemark.edges} />
        </div>
      </div>
      </div>
    );
  }
}

export default Blog;
/*
export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
    <Layout cart={props.location.state.cart} username={props.location.state.username} renderMenu={false}/>
      <h1>Blog posts</h1>
      <BlogIndex posts={posts} />
    </>
  );
};*/

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
