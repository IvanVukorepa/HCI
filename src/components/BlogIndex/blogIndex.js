import React from "react";
import { Link } from "gatsby";
import '../../style/blog.css'


class BlogIndex extends React.Component{
  /*const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug } = post.node.frontmatter;*/
   /* constructor(props){
      super(props);
      this.state = {postList: props.posts.map(post => {
        const { id, excerpt } = post.node;
        const { title, date, slug } = post.node.frontmatter;
        return (
          <section key={id} /*className={styles.Post}>
            <h2 /*className={styles.Title}>
              <Link to={`blog/${slug}`}>{title}</Link>
            </h2>
            <p /*className={styles.Excerpt}>{excerpt}</p>
            <span /*className={styles.Date}>{date}</span>
          </section>
        )}
      )}
    }*/

    render(){
    return (
      this.props.posts.map(post => {
        const { id, excerpt } = post.node;
        const { title, date, slug } = post.node.frontmatter;
        return (
          <Link to={`blog/${slug}`} key={id} className="Post">
          <div className="blogPost">
            <h2 className="blogPostTitle">
              <p>{title}</p>
            </h2>
            <p className="Excerpt">{excerpt}</p>
            <p className="Date">{date}</p>
          </div>
          </Link>
        )}
      )
    )};

  //return postsList;
}


export default BlogIndex;

/*
export default ({ posts }) => {
  console.log("Tu sam");
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug } = post.node.frontmatter;
    return (
      <section key={id} className={styles.Post}>
        <h2 className={styles.Title}>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h2>
        <p className={styles.Excerpt}>{excerpt}</p>
        <span className={styles.Date}>{date}</span>
      </section>
    );
  });

  return postsList;
};
*/