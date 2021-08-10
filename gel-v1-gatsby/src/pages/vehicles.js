import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Vehicles = ({ data }) => (
  <Layout>
    <Seo title="Vehicles" />
    <h1>Vehicles</h1>
    <div className="inventory">
        {data.allStrapiVehicles.edges.map(machine => (
          <div className="inventory_individual" key={machine.id}>
            <Img 
            className="inventory_individual-image" 
            fluid={machine.node.image[0].localFile.childImageSharp.fluid}  
            alt={''}
            />
            <h2 className="inventory_individual-title">{machine.node.Make} - {machine.node.Model}</h2>
            <ul className="inventory_individual-details">
              <li>{machine.node.Description}</li>
              {machine.node.Sold === 'No' ? <h2>£ {machine.node.Price}</h2> : <h2>Sold</h2>}
              <li>Added: {machine.node.published_at}</li>
            </ul>
          </div>
        ))}
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Vehicles

export const query = graphql`
query VehicleQuery {
  allStrapiVehicles {
    edges {
      node {
        id
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Description
        Make
        Model
        Price
        Registration
        Sold
        created_at(formatString: "MM/YYYY")
        Year
        published_at(formatString: "MM/YYYY")
      }
    }
  }
}`;
