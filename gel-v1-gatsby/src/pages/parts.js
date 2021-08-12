import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Cards from '../templates/card'

import Layout from "../components/Layout"
import Seo from "../components/Seo"


const Parts = ({ data }) => (
  <Layout>
    <Seo title="Machines" />
    <h1>Parts</h1>
    <div className="inventory">
          {data.allStrapiParts.edges.map(res => (
              <div className="inventory_individual" key={res.id}>
                <Img 
                className="inventory_individual-image" 
                fluid={res.node.Image[0].localFile.childImageSharp.fluid}  
                alt={''}
                />
                <h2 className="inventory_individual-title">{res.node.Make} - {res.node.Model}</h2>
                <ul className="inventory_individual-details">
                  <li>{res.node.Description}</li>
                  {res.node.Sold === 'No' ? <h2>£ {res.node.Price}</h2> : <h2>Sold</h2>}
                  <li>Added: {res.node.published_at}</li>
                </ul>
              </div>
            ))}
          </div> 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Parts

export const query = graphql`
query PartsQuery {
  allStrapiParts {
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
