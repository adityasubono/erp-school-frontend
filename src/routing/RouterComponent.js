import React from 'react';
import {Route} from "react-router-dom";

import MainDashboard from "../pages/MainDashboard";
import Profile from "../pages/Profile";
import BoardPlayerFootball from "../components/BoardPlayerFootball";
import BoardUser from "../components/BoardUser";
import BoardModerator from "../components/BoardModerator";
import BoardAdmin from "../components/BoardAdmin";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

function RouterComponent() {
    return (
        <div>
            <Route exact path="/dashboard" component={MainDashboard}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/football-player" component={BoardPlayerFootball}/>
            <Route path="/user" component={BoardUser}/>
            <Route path="/mod" component={BoardModerator}/>
            <Route path="/admin" component={BoardAdmin}/>
            {/*<Route path="*" component={PageNotFound}/>*/}
        </div>

    );

}

export default RouterComponent;
