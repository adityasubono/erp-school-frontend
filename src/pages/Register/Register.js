import React, {useState, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";
import {isEmail} from "validator";
import {register} from "../../actions/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import "./register.css"


library.add(
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faExclamation
);


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    <FontAwesomeIcon icon={faExclamationTriangle}/> This field is required!
                </div>
            </div>

        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle}/> This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle}/> The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle}/> The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState("");

    const [successful, setSuccessful] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeSelectRole = (e) => {
        const selectRole = e.target.value;
        setRoles(selectRole);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRedirect(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, [message, redirect]);


    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password, roles))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="row row-cols-sm-6 d-flex justify-content-center">
            <div className="col col-sm-12 col-md-4">
                {message && redirect && (
                    <div className="form-group" style={{marginTop: "25%"}}>
                        {
                            successful && (
                                <div className="alert alert-success" role="alert">
                                    <div className="font-weight-bold">{message}</div>
                                    <a href="/login" class="alert-link text-primary"> Direct To Login</a>

                                </div>

                            )
                        }

                        {
                            !successful && (
                                <div className="alert alert-danger" role="alert">
                                    <div className="font-weight-bold">{message}</div>
                                </div>
                            )
                        }

                    </div>
                )}

                {!successful && (
                    <div className="card" style={{marginTop: "5%"}}>
                        <div className="card-header bg-light">
                            <h5 className="card-title font-weight-light fs-4 text-info text-center">REGISTER</h5>
                        </div>
                        <Form onSubmit={handleRegister} ref={form}
                              className="needs-validation bg-light bg-gradient p-4 rounded">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="username"
                                           className="form-label font-weight-light text-info fs-4">Username</label>
                                    <Input type="text"
                                           className="form-control py-3"
                                           id="username"
                                           value={username}
                                           onChange={onChangeUsername}
                                           validations={[required, vusername]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email"
                                           className="form-label font-weight-light text-info fs-4">Email</label>
                                    <Input type="email"
                                           className="form-control py-3"
                                           id="email"
                                           value={email}
                                           onChange={onChangeEmail}
                                           validations={[required, validEmail]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password"
                                           className="form-label font-weight-light text-info fs-4">Password</label>
                                    <Input type="password"
                                           className="form-control py-3"
                                           id="password"
                                           value={password}
                                           onChange={onChangePassword}
                                           validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="roles"
                                           className="form-label font-weight-light text-info fs-4">Select Role</label>
                                    <Select
                                        class="form-select"
                                        id="roles"
                                        name="roles"
                                        value={roles}
                                        onChange={onChangeSelectRole}
                                        validations={[required]}
                                        style={{height: "4rem"}}
                                    >
                                        <option selected value="">Select Role ...</option>
                                        <option value="admin">Admin</option>
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="headmaster">Headmaster</option>
                                        <option value="financial">Financial</option>
                                        <option value="operational">Operational</option>
                                        <option value="library">Library</option>
                                    </Select>
                                </div>
                                <button type="submit" className="btn btn-info font-weight-light fs-4">Sing Up</button>
                                <a href="/login" className="btn btn-outline-danger m-sm-3 font-weight-light fs-4">Cancel</a>
                            </div>
                            <CheckButton style={{display: "none"}} ref={checkBtn}/>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
