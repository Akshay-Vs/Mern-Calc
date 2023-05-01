import React from 'react';

function NumBtn(props) {
  return (
    <div onClick={props.onClick} className="num-button" id={props.children}>{props.children}</div>
  )
}


export default NumBtn;
