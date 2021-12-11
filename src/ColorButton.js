import { useState } from 'react';

function ColorButton() {

    const [labelState, setLabelState] = useState("Stop");
    const [classState, setClassState] = useState("btn btn-dark");
    

    function changeColor() {
        // If the label says "Blue"
        if( labelState === "Stop" ) {
            // change the label to "Red"
            setLabelState("Record")
            // change the class to "btn btn-danger"
            setClassState("btn btn-danger")
        }
        // Else, if the label "Red"
        else if (labelState === "Record") {
            // change the label to "Blue"
            setLabelState("Stop");
            // change the class to "btn btn-primary"
            setClassState("btn btn-dark")
        }
    }

    return(
        <button onClick={changeColor} className={classState}>
            {labelState}
        </button>
    )
}

export default ColorButton;