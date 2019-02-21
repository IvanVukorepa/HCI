import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogIndex from "../components/BlogIndex/blogIndex"

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
      let props = this.props.location.state;
      this.setState({
        cart: props.cart,
        username: props.username
      });
    }catch{}
  }

  render(){
    return (
      <>
      <Layout cart={this.state.cart} username={this.state.username} renderMenu={false}/>
        <h1>Blog posts</h1>
        <BlogIndex posts={this.props.data.allMarkdownRemark.edges} />
      </>
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
