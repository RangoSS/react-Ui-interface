import React from 'react';
import blackIcon from '../assets/arrowB.png'
import whiteIcon from '../assets/arrow.png'
const Service = () => {
    return (
        <div>
            <div className="sect-1">
                <div className="row">
                    <div className="col-md-6">
                        <div className="features float-start mb-5">
                            <h5>Featured Plans</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="see-all float-end mb-5">
                            <h5>Explore All</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12 s-service justify-content-center">
                        <div className="card card-green border-0 mb-5" style={{ width: '18rem' }}>

                            <div className="card-body">
                                <div className="hed">
                                    <h6>STRATEGY</h6>
                                </div>
                                <h5 className="card-title">Money Momentum</h5>
                                <p className="card-text">Trust Premium helps
                                    you start some investments insists covering </p>
                                <hr></hr>
                                <h6 className="hed">3 yrs CAGR </h6>
                                <div className="card-icon d-flex justify-content-between">
                                    <p className='cents'>7.20%</p>

                                    <a href="/">
                                        <img src={blackIcon} alt="" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 s-service">
                        <div className="card card-dark bg-dark border-0 mb-5" style={{ width: '18rem' }}>

                            <div className="card-body">
                                <div className="hed">
                                    <h6>PLANS</h6>
                                </div>
                                <h5 className="card-title">long-Term</h5>
                                <p className="card-text text-card">Create a vision.To get started,imagine
                                    your dream life.</p>
                                <hr></hr>
                                <h6 className="hed">25 yrs CAGR </h6>
                                <div className="card-icon d-flex justify-content-between">
                                    <p className='cents-dark'>14.20%</p>
                                    <a href="/">
                                        <img src={whiteIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 s-service">
                        <div className="card card-purple border-0 mb-5" style={{ width: '18rem' }}>

                            <div className="card-body">
                                <div className="hed">
                                    <h6>STRATEGY</h6>
                                </div>
                                <h5 className="card-title">Focused</h5>
                                <p className="card-text">Be focused life planning,however,can serve
                                </p>
                                <hr></hr>
                                <h6 className="hed">1 yr returns </h6>
                                <div className="card-icon d-flex justify-content-between">
                                    <p className='cents'>11.20%</p>

                                    <a href="/">
                                        <img src={blackIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 s-service">
                        <div className="card card-yellow border-0 mb-5" style={{ width: '18rem' }}>

                            <div className="card-body">
                                <div className="hed">
                                    <h6>PLANS</h6>
                                </div>
                                <h5 className="card-title">Fixed income</h5>
                                <p className="card-text">Get multiple benefits,and
                                    lumpsum option $ Guaranteed Returns
                                </p>
                                <hr></hr>
                                <h6 className="hed">5 yrs CAGR </h6>
                                <div className="card-icon d-flex justify-content-between">
                                    <p className='cents'>8.20%</p>

                                    <a href="/">
                                        <img src={blackIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                </div>
                <div className="row ">
                    <div className="col align-items-start foot">
                        <p> Terms Policy  <span>.</span>   Customer Story</p>
                    </div>
                    <div className="col align-items-end float-end foo-right">

                        <a href="/">
                            <img className='next-page' src={whiteIcon} alt="" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
