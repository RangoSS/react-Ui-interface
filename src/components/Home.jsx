import React from 'react'
//import bana from '../assets/architect.jpg'
import searchme from '../assets/searchArrow.png'
const Home = () => {
    return (
        <div>
            <div className='sect-1'>
                <div className="banner">
                    <div className="banner-text">
                        <h1>Life Planning,Making Easy to Turn Dreams
                            a Reality.
                        </h1>
                        <p> Get Exclusive offers on purchase of any plans</p>

                        <div className="d-flex justify-content-center">
                            <form className="d-flex search" role="search">
                                <input className="form-control me-2 rounded-pill search-input" type="search" placeholder="Your Email" aria-label="Search" />

                                <button class="btns-white-home" type="submit">Sign In</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
