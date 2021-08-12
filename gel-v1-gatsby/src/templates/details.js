import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout' 
import Table from '../components/Table'

const Details = ({ data }) => {
  console.log(data);

  let response = 0;
  if(data.strapiVehicles !== null) {response = data.strapiVehicles;}
  if(data.strapiParts !== null){response = data.strapiParts;} 
  if(data.strapiMachines !== null){response = data.strapiMachines;}
  if(data.strapiAgriculturals !== null){response = data.strapiAgriculturals;}

  const img = response.Image.map(image => (
    <Img fixed={image.localFile.childImageSharp.fixed} />
  ))

    return(
        <Layout>
          <div className="details">
            <div className="details_left">
              {img}
            </div>
            <div className="details_right">
              <h1>{response.Year} {response.Make} - {response.Model}</h1>
              {response.Sold === 'No' ? <h2>£ {response.Price}</h2> : <h2>Sold</h2>}
              <div className="registration">{response.Registration}</div>
              <p>{response.Description}</p>
            </div>
          </div>
          <Table 
          data={response}
          />
        </Layout>
    )
}
export default Details

export const query = graphql`
query Single($id: String) {
  strapiParts(id: {eq: $id}) {
    Added(formatString: "MM/YYYY")
    Description
    Image {
      localFile {
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
           }
        }
      }
    }
    Make
    Model
    PartNumber
    Price
    Sold
    strapiId
  }
  strapiMachines(id: {eq:$id}) {
    Description
    Make
    Model
    Price
    Sold
    id
    strapiId
    Image {
      localFile {
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
           }
        }
      }
    }
  }
  strapiAgriculturals(id: {eq: $id}) {
    Added(formatString: "MM/YYYY")
    Description
    Make
    Model
    Price
    SerialNo
    Sold
    id
    published_at(formatString: "MM/YYYY")
    strapiId
    Image {
      localFile {
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
           }
        }
      }
    }
  }
  strapiVehicles(id: {eq: $id}) {
    Description
    Make
    Model
    Price
    Registration
    Sold
    Year(formatString: "YYYY")
    strapiId
    Slug
    Colour
    Mileage
    Gearbox
    Axle
    Euro
    Vin
    NetWeight
    GrossWeight
    Suspension
    Added(formatString: "MM/YYYY")
    Image {
      localFile {
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
           }
        }
      }
    }
    created_at
    id
  }
}`;