import * as React from 'react'

const Truncate = ({str, len}) => {
    const sstr = str.substring(0,len);
    const count = sstr.length
    const over = sstr+"...";
    const output = count < 40 ? sstr : over ;

    return (
        <li>{output}</li>
    )
}

export default Truncate