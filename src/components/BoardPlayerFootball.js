import React, {Component, useRef, useState} from 'react';
import {register} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";

const BoardPlayerFootball = () => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleCreatePlayerFooball = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div>
            <div className='card bg-light rounded p-3'>
                <h3>Form Pendataan Data Pemain Bola</h3>
                <form onSubmit={handleCreatePlayerFooball} ref={form}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-floating">
                                <input type="text"
                                       name="firstName"
                                       className="form-control"
                                       placeholder="name@example.com"
                                       id="floatingInput"/>
                                <label htmlFor="floatingInput">First Name</label>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="form-floating">
                                <input type="text"
                                       name="lastName"
                                       className="form-control"
                                       placeholder="name@example.com"
                                       id="floatingInput"/>
                                <label htmlFor="floatingInput">Last Name</label>
                            </div>
                        </div>

                        <div className='col-md-4 mt-3'>
                            <div className="form-floating">
                                <input type="text"
                                       name="datePlace"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Tempat Lahir</label>
                            </div>
                        </div>

                        <div className='col-md-4 mt-3'>
                            <div className="form-floating">
                                <input type="date"
                                       name="dateBirth"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Tanggal Lahir</label>
                            </div>
                        </div>

                        <div className='col-md-4 mt-3'>
                            <div className="form-floating">
                                <input type="text"
                                       name="nasionality"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Kebangsaan</label>
                            </div>
                        </div>

                        <div className='col-md-4 mt-3'>
                            <div className="form-floating">
                                <input type="text"
                                       name="club"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Klub</label>
                            </div>
                        </div>

                        <div className='col-md-4 mt-3'>
                            <div className="form-floating">
                                <select className="form-select"
                                        id="floatingSelect"
                                        name="position"
                                        aria-label="Floating label select example">
                                    <option selected>Pilih Posisi Pemain</option>
                                    <option value="GK">Goal Keeper (GK )</option>
                                    <option value="CB">Center Back (CB)</option>
                                    <option value="LB">Left Back (LB)</option>
                                    <option value="RB">Right Back (RB)</option>
                                    <option value="DM">Difender Middle (DM)</option>
                                    <option value="CMF">Center Middle Foward (CMF)</option>
                                    <option value="LMF">Left Middle Foward (LMF)</option>
                                    <option value="RMF">Right Middle Foward (RMF)</option>
                                    <option value="AMF">Attack Middle Foward (AMF)</option>
                                    <option value="CF">Center Attack (CF)</option>

                                </select>
                                <label htmlFor="floatingSelect">Posisi</label>
                            </div>
                        </div>

                        <div className='col-md-2 mt-3'>
                            <div className="form-floating input-group">
                                <input type="number"
                                       name="weight"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <span className="input-group-text">cm</span>
                                <label htmlFor="floatingInput">Tinggi Badan</label>
                            </div>
                        </div>

                        <div className='col-md-2 mt-3'>
                            <div className="form-floating">
                                <input type="number"
                                       name="number"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Nomer Punggung</label>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-2'>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>

            <h3 className='mt-3'>Tabel Data Pemain</h3>
            <table className="table mt-3">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Kebangsaan</th>
                    <th scope="col">Tinggi Badan</th>
                    <th scope="col">Posisi</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button type="button" className="btn btn-outline-warning btn-sm mr-3">Update</button>
                        <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BoardPlayerFootball;
