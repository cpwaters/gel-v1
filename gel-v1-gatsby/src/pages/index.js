import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const query = graphql`
    query {
      allStrapiVehicles {
        edges {
          node {
            strapiId
            Truck {
              Make
              Model
              Price
              Sold
              id
              Description
              Added(difference: "")
              Image {
                width
                height
                id
                size
              }
            }
          }
        }
      }
    }
    `;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Truck Services LTD</h1>
    <p>Welcome to Truck Services LTD.</p>
    <p>Seach our stock.</p>
    <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiVehicles.edges.map(vehicle => (
          <li key={vehicle.node.strapiId}>
            <img src={vehicle.node.Truck.Image} width="300" height="200" />
            {vehicle.node.Truck.Make} - {vehicle.node.Truck.Model}
            {vehicle.node.Truck.Description}
            {vehicle.node.Truck.Price}
            {vehicle.node.Truck.Sold}
            {vehicle.node.Truck.Added}
          </li>
        ))}
      </ul>
    )}
    />
      <Link to="/vehicles/">Go to Vehicles</Link> <br />
  </Layout>
)

export default IndexPage
