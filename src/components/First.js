import React from 'react'
import './First.css'

const para = {
    color: 'green',
    backgroundColor: 'black'
}


export default function First() {
    return (
        <div>
            <h1 className="heading">Hello World</h1>
            <p style={para}>This is my name</p>
        </div>
    )
}

