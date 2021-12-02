import React, {useState, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {retrieveRoles} from "../../actions/role";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
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
import {faArrowAltCircleRight, faExclamation} from "@fortawesome/free-solid-svg-icons";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import "./register.css"
import CheckButton from "react-validation/build/button";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";


library.add(
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faExclamation,
    faArrowAltCircleRight
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

    const getRoles = useSelector(state => state.roles);
    const {message} = useSelector(state => state.message);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrieveRoles());
    }, []);

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
        <div className="body">
            <div className="row row-cols-sm-12  justify-content-center">
                <div className="col col-md-6 col-sm-12 ">
                    {message && (
                        <div className="form-group">
                            {
                                successful && (
                                    <div className="card">
                                        <h5 className="card-header text-white bg-info font-weight-light fs-4">System Information</h5>
                                        <div className="card-body">
                                            <h5 className="card-title text-info fs-4 font-weight-light">{message}</h5>
                                            <p className="card-text fs-6 font-weight-light">Press on the blue button to proceed to the login page</p>
                                            <a href="/login" className="btn btn-primary">Next
                                                <FontAwesomeIcon icon={faDoorOpen} className="ml-3"/>
                                            </a>
                                        </div>
                                    </div>

                                )
                            }

                            {
                                !successful && (
                                    <div className="card">
                                        <h5 className="card-header text-white bg-danger font-weight-light fs-4">System Information</h5>
                                        <div className="card-body">
                                            <h5 className="card-title text-info fs-4 font-weight-light">{message}</h5>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    )}

                    {!successful && (
                        <div className="card register" style={{marginTop: "5%"}}>
                            <div className="card-header">
                                <h5 className="card-title font-weight-light fs-4 text-white text-center">REGISTER</h5>
                            </div>
                            <Form onSubmit={handleRegister} ref={form}
                                  className="needs-validation p-4 rounded">
                                <div>
                                    <div className="row row-cols-md-6 row-cols-sm-6">
                                        <div className="col col-md-6 col-sm-12">
                                            <div className="mb-3">
                                                <label htmlFor="username"
                                                       className="form-label font-weight-light text-white fs-4">Username</label>
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
                                                       className="form-label font-weight-light text-white fs-4">Email</label>
                                                <Input type="email"
                                                       className="form-control py-3"
                                                       id="email"
                                                       value={email}
                                                       onChange={onChangeEmail}
                                                       validations={[required, validEmail]}
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-md-6 col-sm-12">
                                            <div className="mb-3">
                                                <label htmlFor="password"
                                                       className="form-label font-weight-light text-white fs-4">Password</label>
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
                                                       className="form-label font-weight-light text-white fs-4">Select Role</label>
                                                <Select
                                                    className="form-select"
                                                    id="roles"
                                                    name="roles"
                                                    value={roles}
                                                    onChange={onChangeSelectRole}
                                                    validations={[required]}
                                                    style={{height: "60px"}}
                                                >
                                                    <option selected value="">Select Role ...</option>
                                                    {
                                                        getRoles.map((data, index) => (
                                                            <>
                                                                <option value={data.name}>{data.name}</option>
                                                            </>

                                                        ))}
                                                    }
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-info font-weight-light fs-4 mr-3">Sing Up</button>
                                            <a href="/login"
                                               className="btn btn-outline-danger m-sm-3 font-weight-light fs-4">Cancel</a>
                                            <CheckButton style={{display: "none"}} ref={checkBtn}/>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Register;
