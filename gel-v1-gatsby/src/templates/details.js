import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout' 

const Details = ({ data }) => {

    return(
        <Layout>
            <h1>Make - Model</h1>
            <p></p>
            {/* <Img fluid={data.strapiVehicles.image.localFile.childImageSharp.fluid}/> */}
            <p>Description</p>
        </Layout>
    )
}
export default Details