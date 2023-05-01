import React from 'react'

function Display({ operation, result }) {

    // set default values
    operation = operation.length === 0 ? '0' : operation;
    result === "" ? result = "" : result = `= ${result}`
    return (
        <div>
            <div className="calc-screen-primary" onselectstart="return true" id="display-primary">
                {operation}
            </div>
            <div className="calc-screen-secondary" onselectstart="return true" id="display-secondary">
                {result}
            </div>
        </div>
    )
}

export default Display