import React from 'react'
import brands from '../assets/icon_name2.png'

const NavBar = () => {


    return (
        <>
            <div className="sect-1">
                <div className="row d-flex">
                    <div className="col-md-8 col-sm-12">
                        <a className="navbar-brand mt-5" href="#"><img src={brands} alt="" /></a>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="searme d-flex mt-4 float-end">

                            <button class="btns-white" type="submit">Log In</button>
                            <button class="btns-dark" type="submit">Get Started</button>
                            {/* navbar started */}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar
