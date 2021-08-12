import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
    const { allFile } = useStaticQuery(graphql`
    query Navbar {
        allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
          edges {
            node {
              name
              sourceInstanceName
            }
          }
        }
      }`);
      //console.log(allFile);
    return(
        <div className="navbar">
        {allFile.edges.map((link,i) => 
            link.node.sourceInstanceName === 'pages' ?
            <Link key={i} to={`/${link.node.name === 'index' ? '' : link.node.name }`} >
                {link.node.name === 'index' ? 'Home' : link.node.name }
            </Link> : null 
            )}
            <Link to={``}>Blank</Link>
        </div>
    )
}

export default Navbar