import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from "./../../logo.png";

const Header = () => {
    const { user, logOut } = useFirebase();
     return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fs-6 fw-bold">
                <div class="container-fluid">
                    <img width="80px" src={logo} alt="" />{" "}
                    <a class="navbar-brand nav-bar fs-3" href="/home">Food <span className="text-danger">Delivery</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/manage-orders"
                                >
                                    Manage Orders
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/add-services"
                                >
                                    Add Service
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/my-orders"
                                >
                                    My Orders
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/my-orders"
                                >
                                    About
                                </NavLink>
                            </li>
{/*                            
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/login"
                                >
                                    About
                                </NavLink>
                            </li> */}
                        </ul>
                        <form class="d-flex">
                            <span className=" me-3 mt-2 text-light">{user?.displayName}</span>
                            {/* <img className="photo-url" src={user.photoURL} alt="" /> */}
                            {user?.displayName ?
                                <button onClick={logOut} className="btn btn-outline-danger btn-sm fw-bold me-2">Logout</button> :
                                <NavLink to="/login"><button className="btn btn-dark btn-sm fw-bold me-2">Login</button></NavLink>}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;