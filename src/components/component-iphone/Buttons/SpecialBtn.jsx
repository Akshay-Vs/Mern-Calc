import React from 'react'

function SpecialBtn(props) {
    return (
        <div className="special-button" id={props.children}>{props.children}</div>
    )
}

export default SpecialBtn