import React from 'react'

function Display() {
    return (
        <div>
            <div class="calc-screen-primary" onselectstart="return true" id="display-primary">
                0000000
            </div>
            <div class="calc-screen-secondary" onselectstart="return true" id="display-secondary">
                = 0000000
            </div>
        </div>
    )
}

export default Display