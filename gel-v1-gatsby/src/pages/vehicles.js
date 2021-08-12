import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Vehicles = () => {

  const { allStrapiVehicles } = useStaticQuery(graphql`
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
          Slug
          Registration
          Sold
          created_at(formatString: "MM/YYYY")
          Year
          published_at(formatString: "MM/YYYY")
        }
      }
    }
    }`);
    console.log(allStrapiVehicles);
  return(
    <Layout>
      <Seo title="Vehicles" />
      <h1>Vehicles</h1>
      <div className="inventory">
          {allStrapiVehicles.edges.map(res => (
            <Link className="inventory_individual" key={res.id} to={`${res.node.id}`}>
              <Img 
              className="inventory_individual-image" 
              fluid={res.node.image[0].localFile.childImageSharp.fluid}  
              alt={''}
              />
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
}

export default Vehicles

// export const query = graphql`
// query VehicleQuery {
//   allStrapiVehicles {
//     edges {
//       node {
//         id
//         image {
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 500){
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         Description
//         Make
//         Model
//         Price
//         Registration
//         Sold
//         created_at(formatString: "MM/YYYY")
//         Year
//         published_at(formatString: "MM/YYYY")
//       }
//     }
//   }
// }`;
