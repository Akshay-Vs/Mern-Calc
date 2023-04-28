import React from 'react'
import SpecialBtn from './Buttons/SpecialBtn'
import CalcBtn from './Buttons/CalcBtn'
import OpBtn from './Buttons/OpBtn'
import NumBtn from './Buttons/NumBtn'
import EqBtn from './Buttons/EqBtn'
import Display from './Display'

function Iphone() {
    return (
        <div className='iphonex'>
            <div className="notch"></div>
            <Display></Display>
            <div className="grid-container">
                <SpecialBtn>sin</SpecialBtn>
                <SpecialBtn>cos</SpecialBtn>
                <SpecialBtn>sin</SpecialBtn>
                <SpecialBtn>log</SpecialBtn>

                <CalcBtn>AC</CalcBtn>
                <CalcBtn>&#x232b;</CalcBtn>
                <OpBtn>/</OpBtn>
                <OpBtn>×</OpBtn>

                <NumBtn>7</NumBtn>
                <NumBtn>8</NumBtn>
                <NumBtn>9</NumBtn>
                <OpBtn>-</OpBtn>

                <NumBtn>4</NumBtn>
                <NumBtn>5</NumBtn>
                <NumBtn>6</NumBtn>
                <OpBtn>+</OpBtn>

                <NumBtn>1</NumBtn>
                <NumBtn>2</NumBtn>
                <NumBtn>3</NumBtn>
                <EqBtn>=</EqBtn>
                <br/>
                <NumBtn>,</NumBtn>
                <NumBtn>0</NumBtn>
                <NumBtn>.</NumBtn>


            </div>
        </div>
    )
}

export default Iphone