import React, { useState } from 'react'
import Display from './Display'
import SpecialBtn from './Buttons/SpecialBtn'
import CalcBtn from './Buttons/CalcBtn'
import OpBtn from './Buttons/OpBtn'
import NumBtn from './Buttons/NumBtn'
import EqBtn from './Buttons/EqBtn'

function Iphone() {

  const [operation, setOperation] = useState([])
  const [result, setResult] = useState("")


  return (
    <div className="iphonex">
      <div className="notch"></div>

      <Display operation={operation.slice(-13)} result={result}/>

      <div className="grid-container">
        <SpecialBtn>sin</SpecialBtn>
        <SpecialBtn>cos</SpecialBtn>
        <SpecialBtn>sin</SpecialBtn>
        <SpecialBtn>log</SpecialBtn>

        <CalcBtn onClick={()=> setOperation([0])}>AC</CalcBtn>
        <CalcBtn onClick={() => setOperation(operation.slice(0, -1))}>&#x232b;</CalcBtn>
        <OpBtn onClick={() => setOperation([...operation, '/'])}>/</OpBtn>
        <OpBtn onClick={() => setOperation([...operation, '×'])}>×</OpBtn>

        <NumBtn onClick={() => setOperation([...operation, 7])}>7</NumBtn>

        <NumBtn onClick={() => setOperation([...operation, 8])}>8</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 9])}>9</NumBtn>
        <OpBtn onClick={() => setOperation([...operation, '-'])}>-</OpBtn>

        <NumBtn onClick={() => setOperation([...operation, 4])}>4</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 5])}>5</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 6])}>6</NumBtn>
        <OpBtn onClick={() => setOperation([...operation, '+'])}>+</OpBtn>

        <NumBtn onClick={() => setOperation([...operation, 1])}>1</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 2])}>2</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 3])}>3</NumBtn>
        <EqBtn>=</EqBtn>
        <br />
        <NumBtn onClick={() => setOperation([...operation, ','])}>,</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, 0])}>0</NumBtn>
        <NumBtn onClick={() => setOperation([...operation, '.'])}>.</NumBtn>
      </div>
    </div >
  )
}

export default Iphone
