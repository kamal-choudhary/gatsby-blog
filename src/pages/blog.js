import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { card } from "./blog.module.css";

const BlogPage = ({ data }) => {
  console.log("data from blog===>", data);
  return (
    <>
      <Layout pageTitle="Blog Page">
        <div>
          <h2>Here are all the blog posts</h2>
          {data.allMdx.edges.map((edge) => (
            <div key={edge.node.frontmatter.title} className={card}>
              <Link
                to={`${edge.node.frontmatter.slug}`}
                style={{
                  textDecoration: "none",
                  fontSize: "3rem",
                  marginTop: "50px",
                }}
              >
                {edge.node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
