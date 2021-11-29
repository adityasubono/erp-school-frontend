import React, {useCallback, useState} from 'react';
import {logout} from "../../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Clock} from "../../utils/clock";
import {formatDate} from "../../utils/date";

function HeaderComponent() {
    const today = new Date();
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient py-0">
                <div className="container">
                    <a className="navbar-brand font-weight-light fs-2" href="#">SMA Negeri 1 Padang
                        <br/>
                        <p className="fs-6 p-0 text-white">
                            Computer Base Information System
                        </p>
                    </a>
                    <div>
                        <div className="d-flex justify-content-end text-white">
                            <div className="font-weight-light fs-1">
                                {Clock()}
                            </div>
                        </div>
                        <div className="d-flex justify-content-end text-white">
                            <div className="font-weight-light fs-5">
                                <span>{formatDate(today, "dd mm yy")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default HeaderComponent;
