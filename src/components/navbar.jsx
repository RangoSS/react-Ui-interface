import React from 'react'
import brands from '../assets/icon_name2.png'

const NavBar = () => {


    return (
        <>
            <div className="sect-1">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <a class="navbar-brand" href="#"><img src={brands} alt="" /> Navbar</a>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="searme d-flex">

                            <button class="btns-white" type="submit">Log In</button>
                            <button class="btns-dark" type="submit">Get Started</button>
                            {/* navbar started */}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Service</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <div class="searme d-flex">

                                    <button class="btns-white" type="submit">Log In</button>
                                    <button class="btns-dark" type="submit">Get Started</button>
                                    {/* navbar started */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar
