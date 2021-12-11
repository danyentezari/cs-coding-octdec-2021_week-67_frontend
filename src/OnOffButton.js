import { useState } from 'react';

function OnOffButton() {

    const [state, setState] = useState("Off")

    function toggleSwitch() {
        // Your solution here...
        if ( state === "Off") {
            setState("On")
        } else if (state === "On") {
            setState("Off")
        }
    }

    return (
        <button onClick={toggleSwitch} className="btn btn-dark">
            {state}
        </button>
    )
}

export default OnOffButton;