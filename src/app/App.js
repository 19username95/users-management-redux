import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.scss';
import { Navigation } from "../components";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "../store";
import { About, UsersList, Registration } from "../pages";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#8B0000' },
        secondary: { main: '#282c3477' }
    },
});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route path='/users-list'>
                                <UsersList />
                            </Route>
                            <Route path='/add-user'>
                                <Registration />
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
