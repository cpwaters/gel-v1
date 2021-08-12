import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PagesQuery from "../queries/pagesQuery";

const Card = ({ data, category, capQuery}) => {

     return(
       <>
        <div className="inventory">
          {data.allStrapiParts.edges.map(res => (
              <div className="inventory_individual" key={res.id}>
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
              </div>
            ))}
          </div> 
      </>
    ) 
  };

export default Card

export const query = graphql`
query MyQuery {
  allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
    edges {
      node {
        name
      }
    }
  }
}`;

//export const query = <PagesQuery />