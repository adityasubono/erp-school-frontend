import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import './login.css'


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";

import {login} from "../../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    props.history.push("/dashboard");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <div className="body">
            {message && (
                <div className="modal fade"
                     id="staticBackdrop"
                     data-bs-backdrop="static"
                     data-bs-keyboard="false"
                     tabIndex="-1"
                     aria-labelledby="staticBackdropLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info py-0">
                                <h5 className="modal-title font-weight-light text-white fs-4" id="staticBackdropLabel">Information System</h5>
                                <button type="button" className="btn-close bg-danger my-1" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body font-weight-bold text-danger">
                                {message}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                // <div className="form-group">
                //     <div className="alert alert-danger" role="alert">
                //         {message}
                //     </div>
                // </div>
            )}

            <div className="row  row-cols-sm-12 d-flex justify-content-center">
                <div className="col col-sm-12">
                    <div className="card login">
                        <div className="card-header">
                            <h5 className="card-title font-weight-light fs-4 text-white text-center">CBIS LOGIN</h5>
                        </div>
                        <div className="card-body login">
                            <Form onSubmit={handleLogin} ref={form}>
                                <div className="form-group mt-3">
                                    <label htmlFor="username" className="text-white font-weight-light fs-4">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control py-3"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="password" className="text-white font-weight-light fs-4">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control py-3"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required]}
                                    />
                                </div>


                                <div className="form-group mt-4">
                                    <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"/>
                                        )}
                                        <span className="text-white font-weight-light fs-4">Login</span>
                                    </button>

                                    <a href="/register" className="btn btn-outline-info ml-3" disabled={loading}>
                                        <span className="text-white font-weight-light fs-4">Register</span>
                                    </a>
                                </div>


                                <CheckButton style={{display: "none"}} ref={checkBtn}/>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;
