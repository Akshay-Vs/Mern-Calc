import React from 'react'

function NumBtn(props) {
  return (
    <div className="num-button" id={props.children}>{props.children}</div>
    )
}

export default NumBtn