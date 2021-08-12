import React from "react"
import { graphql } from "gatsby"

const PagesQuery = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
        }
      }
    }
  }
`;

export default PagesQuery
