import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Table = ({ data }) => {

    const miles = parseInt(data.Mileage) * 0.621371;
    const mi = Math.floor(miles)

   //console.log(data)


        for(let property in data){
            const props = [];
            if (data.hasOwnProperty(property)){
                return property
            }
            props.push(property);
            console.log(props);
        }
 

    // const output = newData.map(d => (
    //     <div className="table_cell"><span className="table_cell-title">{d}</span><span className="table_cell-data">{`data.${d}`}</span></div>
    // ))

    return(
        <div className="table">
            {/* {output} */}
        </div>
    )
}

export default Table