import React from 'react'
import { Link } from 'react-router'

export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
)


// Older version maintaned for study purposes only

// import React from 'react'

// export default props => (
//     <li>
//         <a href={props.path}>
//             <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
//         </a>
//     </li>
// )