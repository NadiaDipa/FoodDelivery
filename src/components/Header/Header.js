import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from "./../../logo.png";
import './Header.css';


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container className="d-flex justify-content-center align-items-center">
                     <img width="80px" src={logo} alt="" />{" "}
                    <Navbar.Brand className="fs-2 fw-bold text-white" to="/home">Food <span className="danger">Delivery</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className="ms-3 text-decoration-none nav-item" to="/home">Home</NavLink>
                            {
                                !user.displayName ? (<> <NavLink className="ms-3 text-decoration-none nav-item" to="/login">Log In</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/signup">Sign Up</NavLink>
                                </>) : (<>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/manage-orders">Manage Orders</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/add-service">Add Service</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/my-orders">My Orders</NavLink>
                                    <NavDropdown title={<img className="user-photo" src={user.photoURL} alt="user" />} id="basic-nav-dropdown">
                                        <NavDropdown.Item to="">{user.displayName}</NavDropdown.Item>
                                        <NavDropdown.Item to=""><Button variant="success" onClick={logOut}>log Out</Button> </NavDropdown.Item>
                                    </NavDropdown>
                                </>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;