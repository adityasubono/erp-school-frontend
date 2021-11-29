import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router, Switch, Route, Link} from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import {login, logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import RouterComponent from "./routing/RouterComponent";

const App = () => {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <Router history={history}>
            <div>
                <main role="main">
                        <Switch>
                            <Route exact path={["/", "/login"]} component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route component={RouterComponent}/>
                        </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
