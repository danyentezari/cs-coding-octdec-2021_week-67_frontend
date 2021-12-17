import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutScreen from "./AboutScreen.js";
import LayoutRoute from "./LayoutRoute.js";
import MainScreen from './MainScreen.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import ContactScreen from './ContactScreen.js';
import ProfileScreen from './ProfileScreen.js';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;