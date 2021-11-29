import React from 'react';
import './footer.css';


function FooterComponent() {

        return (
            <div>
                <footer>
                    <div className="container-fluid bg-footer py-3 mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row py-0">
                                        <div className="col-sm-1 hidden-md-down">
                                            <a className="bg-circle bg-info" href="#">

                                            </a>
                                        </div>
                                        <div className="col-sm-11 text-white">
                                            <div><h4>SMA Negeri 1 Padang</h4>
                                                <p>
                                                    <span className="header-font">Computer Base Information System
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );

}

export default FooterComponent;
