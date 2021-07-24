// import React, { Component } from 'react'

// export default class Products extends Component {
//     state = {
//         totalNumber: 0
//     };
    
//     render() {
//         const increment = () => {
//             console.log('click');
        
//         };
//         return (
//             <div>
//                 <p>{this.state.totalNumber}</p>
//                 <button onClick={increment}>Click</button>
//             </div>
//         )
//     }
// }



// import React, {useState} from 'react'

// export default function Products() {
//     // const [count, setCount] = useState(0);


//     // const handleClick = () => {
//     //     setCount(count + 1);

//     // }

//     return (
//         <div>
//             {/* <p>{count}</p> */}
//             {/* <button onClick={handleClick}>Click</button> */}
            
//         </div>
//     );
// }

import React from 'react'

export default function Products(props) {
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}
