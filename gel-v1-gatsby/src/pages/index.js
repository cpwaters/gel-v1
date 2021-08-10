import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Truck Services LTD</h1>
    <p>Welcome to Truck Services LTD.</p>
    <p>Seach our stock.</p>
  
      <Link to="/vehicles/">Go to Vehicles</Link> <br />
      <Link to="/machines/">Go to Machines</Link> <br />
  </Layout>
)

export default IndexPage



