import React, {Component} from 'react';

function HomeStudent() {

    return (
        <div className="mt-3">

            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src="https://source.unsplash.com/random/300x300" className="img-fluid" alt="..." style={{
                            maxHeight: '300px',
                            maxWidth: '100%',
                            width: '100%',
                            backgroundSize: 'cover',
                            display: 'grid'
                        }}/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-header text-white bg-secondary bg-gradient font-weight-light fs-4">
                            <div className="d-flex">
                                <div className="flex-grow-1"> Aprilia Migita Putri</div>
                                <div className="mr-3">Class : XII IPA A </div>
                                <div className="">Periode: Semester 2</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <figure>
                                <blockquote className="blockquote">
                                    <p>Terkadang kita diuji bukan untuk menunjukkan kelemahan kita,
                                        tetapi untuk menemukan kekuatan kita</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Arron Mause <cite title="Source Title">Mahakarya Yang Terbelakang</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <img src="https://source.unsplash.com/random/900x300" className="img-fluid" alt="..." style={{
                    maxHeight: '300px',
                    maxWidth: '100%',
                    width: '100%',
                    backgroundSize: 'cover',
                    display: 'grid'
                }}/>
                <div className="card-body">
                    <div className="card-text">
                        <h5 className="card-title"></h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col col-md-6">
                    <table className="table">
                        <thead className="text-white bg-info bg-gradient">
                        <tr>
                            <th scope="col" className="font-weight-light">#</th>
                            <th scope="col" className="font-weight-light">Login</th>
                            <th scope="col" className="font-weight-light">Logout</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="font-weight-light">
                            <th scope="row">1</th>
                            <td>12 November 2021 07:30:45</td>
                            <td>12 November 2021 10:20:35</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );

}

export default HomeStudent;
