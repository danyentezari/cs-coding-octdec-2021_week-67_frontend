import React, { useState } from 'react'

function CounterButton() {

    const [labelState, setLabelState] = useState(9)

    function incrementState() {
        // Increment the state by 1 
        // Note: 
        // 1 - Use a number
        // 2 - DO NOT USE = to reassign labelState

        // Your solution below...
        setLabelState(labelState + 1)
    }

    return (
        <>
            {/*put the comment here*/}
            <button 
                onClick={incrementState}
                style={{"width": "100px", "margin": "20px"}} 
                className="btn btn-dark"
            >
                {labelState}
            </button>

            {
                labelState === 10 &&
                <div className="alert alert-success">Well done!</div>
            }
        </>
    )
    

}

export default CounterButton;