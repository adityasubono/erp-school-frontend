import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import HomeAdmin from "./DashboardAdmin/HomeAdmin";
import HomeStudent from "./DashboardStudent/HomeStudent";
import HomeTeacher from "./DashboardTeacher/HomeTeacher";
import {clearMessage} from "../actions/message";
import {history} from "../helpers/history";
import HomeFinancial from "./DashboardFinancial/HomeFinancial";
import HomeLibrary from "./DashboardLibrary/HomeLibrary";
import HomeHeadmaster from "./DashboardHeadmaster/HomeHeadmaster";
import HomeOperational from "./DashboardOperational/HomeOperational";
import HeaderComponent from "../components/Header/HeaderComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RouterComponent from "../routing/RouterComponent";

function MainDashboard() {
    const [pageAdmin, setPageAdmin] = useState(false);
    const [pageStudent, setPageStudent] = useState(false);
    const [pageTeacher, setPageTeacher] = useState(false);
    const [pageHeadmaster, setPageHeadmaster] = useState(false);
    const [pageLibrary, setPageLibrary] = useState(false);
    const [pageOperational, setPageOperational] = useState(false);
    const [pageFinancial, setPageFinancial] = useState(false);

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setPageAdmin(currentUser.roles.includes("ROLE_ADMIN"));
            setPageTeacher(currentUser.roles.includes("ROLE_TEACHER"));
            setPageStudent(currentUser.roles.includes("ROLE_STUDENT"));
            setPageOperational(currentUser.roles.includes("ROLE_OPERATIONAL"));
            setPageHeadmaster(currentUser.roles.includes("ROLE_HEADMASTER"));
            setPageLibrary(currentUser.roles.includes("ROLE_LIBRARY"));
            setPageFinancial(currentUser.roles.includes("ROLE_FINANCIAL"));
        } else {
            setPageStudent(false);
            setPageAdmin(false);
            setPageTeacher(false);
            setPageOperational(false);
            setPageHeadmaster(false);
            setPageLibrary(false);
            setPageFinancial(false);
        }

    }, [currentUser]);

    if (!currentUser) {
        return <Redirect to="/login"/>;
    }

    return (
        <div className="">

            {currentUser && (
                <div>
                    <HeaderComponent/>
                    <NavbarComponent roles={currentUser.roles} name={currentUser.username}/>
                </div>
            )}

            {
                pageAdmin && (
                    <div className="container">
                        <HomeAdmin />
                    </div>
                )
            }

            {
                pageStudent && (
                    <div className="container">
                        <HomeStudent />
                    </div>
                )
            }


            {
                pageTeacher && (
                    <div className="container">
                        <HomeTeacher />
                    </div>
                )
            }

            {
                pageFinancial && (
                    <div className="container">
                        <HomeFinancial />
                    </div>
                )
            }

            {
                pageLibrary && (
                    <div className="container">
                        <HomeLibrary />
                    </div>
                )
            }

            {
                pageHeadmaster && (
                    <div className="container">
                        <HomeHeadmaster />
                    </div>
                )
            }

            {
                pageOperational && (
                    <div className="container">
                        <HomeOperational />
                    </div>
                )
            }
            {/*<main role="main" className="container">*/}
            {/*    <div className="mt-3">*/}
            {/*        <Switch>*/}
            {/*            /!*<Route component={RouterComponent}/>*!/*/}
            {/*        </Switch>*/}
            {/*    </div>*/}

            {/*    /!* <AuthVerify logOut={logOut}/> *!/*/}

            {/*</main>*/}
            <div>
                <FooterComponent/>
            </div>
        </div>
    );
}

export default MainDashboard;
