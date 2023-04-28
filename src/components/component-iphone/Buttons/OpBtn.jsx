import React from 'react'

function OpBtn(props) {
    return (
        <div className="op-button" id={props.children}>{props.children}</div>
    )
}

export default OpBtn