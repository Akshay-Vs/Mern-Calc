import React from 'react'

function OpBtn(props) {
    return (
        <div onClick={props.onClick} className="op-button" id={props.children}>{props.children}</div>
    )
}

export default OpBtn