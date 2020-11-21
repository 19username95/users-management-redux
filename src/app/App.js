import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.scss';
import Navigation from "../components/Navigation/Navigation";
import About from "../pages/About/About";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {Provider} from "react-redux";
import {store} from "../store";
import UsersListPage from "../pages/UsersListPage/UsersListPage";
import {addUser} from "../actions/actions";
import RegistrationPage from "../pages/RegistrationPage";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#8B0000' },
        secondary: { main: '#282c3477' }
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = { users: [] }
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty("users")) {
            // get users from local storage
            const users = JSON.parse(localStorage.getItem("users"));
            this.setState({ users })
        }
    }


    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route path='/users-list'>
                                <UsersListPage users={this.state.users} />
                            </Route>
                            <Route path='/add-user'>
                                <RegistrationPage addUser={addUser} />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/'>
                                <Redirect to='users-list'/>
                            </Route>
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
