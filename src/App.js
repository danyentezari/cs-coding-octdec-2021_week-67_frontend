import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import MainScreen from './MainScreen.js';
import RegistrationScreen from './RegistrationScreen.js';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;