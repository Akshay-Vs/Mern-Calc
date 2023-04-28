import React from 'react'

function EqBtn(props) {
  return (
    <div className="eq-button" id={props.children}>{props.children}</div>
  )
}

export default EqBtn