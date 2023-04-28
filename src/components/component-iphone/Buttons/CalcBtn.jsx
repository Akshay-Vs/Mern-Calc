import React from 'react'

function CalcBtn(props) {
  return (
    <div className="calc-button" id={props.children}>{props.children}</div>
    )
}

export default CalcBtn