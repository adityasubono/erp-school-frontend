import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";
import {greeting} from "../../utils/greeting";
import MenuComponent from "../Menu/MenuComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFireExtinguisher} from "@fortawesome/free-solid-svg-icons/faFireExtinguisher";
import {faDoorClosed, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {faMailchimp} from "@fortawesome/free-brands-svg-icons";

function NavbarComponent({roles, name}) {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);


    if ((roles == "ROLE_STUDENT") || (roles == "ROLE_TEACHER") || (roles == "ROLE_ADMIN")
        || (roles == "ROLE_FINANCIAL") || (roles == "ROLE_OPERATIONAL") || (roles == "ROLE_LIBRARY")
        || (roles == "ROLE_HEADMASTER")) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient py-0">
                    <div className="container">
                        <div className="navbar-brand text-white font-weight-light">{roles}</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll scroll-navbar">
                            <MenuComponent roles={roles}/>
                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto navbar-nav-scroll scroll-navbar">
                                    <li className="nav-item dropdown">
                                        <div className="nav-link dropdown-toggle fs-6 text-white font-weight-light text-capitalize"
                                             href="#" id="navbarScrollingDropdown"
                                             role="button"
                                             data-bs-toggle="dropdown"
                                             aria-expanded="false">
                                            {greeting()}, {currentUser.username}
                                        </div>
                                        <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                                            <li><a className="dropdown-item text-dark font-weight-light" href="/profile">
                                                <FontAwesomeIcon icon={faUser}/> My Info Profile</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item text-dark font-weight-light" href="/profile">
                                                <FontAwesomeIcon icon={faEnvelope}/> My Message</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item text-dark font-weight-light" href="/login" onClick={logOut}>
                                                <FontAwesomeIcon icon={faDoorClosed}/> Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavbarComponent;
