import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogIndex from "../components/BlogIndex/blogIndex"

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
    <Layout renderMenu={false}/>
      <h1>Blog posts</h1>
      <BlogIndex posts={posts} />
    </>
  );
};

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
