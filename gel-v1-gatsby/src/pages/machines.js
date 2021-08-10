import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Machines = ({ data }) => (
  <Layout>
    <Seo title="Machines" />
    <h1>Machines</h1>
    <div className="inventory">
        {data.allStrapiMachines.edges.map((machine,i) => (
          <div className="inventory_individual" key={machine.id}>
            <Img fluid={machine.node.Image[0].localFile.childImageSharp.fluid} alt={''}/>
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

export default Machines

export const query = graphql`
query MachineQuery {
  allStrapiMachines {
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
