function SimpleForm() {


    let textField;
    let passwordField;
    let confirmPasswordField;

    function retrieve() {
        console.log(textField.value);
        console.log(passwordField.value);
        console.log(confirmPasswordField.value);
    }

    return(
        <div className="container" style={{"max-width":"400px"}}>

            <label>Email</label>
            <input ref={function(elem){ textField = elem  }}  
            className="form-control" type="text" />

            <label>Password</label>
            <input ref={
                function(elem) {
                    passwordField = elem
                }
            } className="form-control" type="password" />

            <label>Confirm Password</label>
            <input ref={
                function(elem) {
                    confirmPasswordField = elem
                }
            }   
            className="form-control" type="password" />


            <button onClick={retrieve}>Retrieve</button>
        </div>
    )
}

export default SimpleForm