import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Machines = ({ data }) => (
  <Layout>
    <Seo title="Agriculturals" />
    <h1>Agriculturals</h1>
    <div className="inventory">
        {data.allStrapiAgriculturals.edges.map((res,i) => (
          <Link className="inventory_individual" key={res.id} to={`/stock/${res.node.id}`}>
            <Img fluid={res.node.Image[0].localFile.childImageSharp.fluid} alt={''}/>
            <h2 className="inventory_individual-title">{res.node.Make} - {res.node.Model}</h2>
            <ul className="inventory_individual-details">
              <li>{res.node.Description}</li>
              {res.node.Sold === 'No' ? <h2>£ {res.node.Price}</h2> : <h2>Sold</h2>}
              <li>Added: {res.node.published_at}</li>
            </ul>
          </Link>
        ))}
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Machines

export const query = graphql`
query AgriQuery {
  allStrapiAgriculturals {
    edges {
      node {
        Description
        Make
        Model
        Price
        Sold
        id
        published_at(formatString: "MM/YYYY")
        Image {
          id
          url
          alternativeText
          localFile {
            childImageSharp {
                fluid(maxWidth: 500){
                    ...GatsbyImageSharpFluid
                  }
            }
          }
        }
      }
    }
  }
}`;
