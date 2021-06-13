import React from "react";
import Layout from "./layout";
import { graphql, useStaticQuery } from "gatsby";

const DefaultPageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      mdx {
        id
        frontmatter {
          title
        }
      }
    }
  `);
  console.log("frontmatter => ", data);
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default DefaultPageLayout;
