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
                    <Navbar.Brand className="fs-2 fw-bold text-warning" to="/home">FOOD <span className="text-danger">DELIVERY</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className="ms-4 text-decoration-none nav-item text-danger fw-bold header-section" to="/home">Home</NavLink>
                            {
                                !user.displayName ? (<> <NavLink className="ms-4 text-decoration-none nav-item text-danger fw-bold" to="/login">Log In</NavLink>
                                    <NavLink className="ms-4 text-decoration-none nav-item text-danger fw-bold header-section" to="/signup">Sign Up</NavLink>
                                </>) : (<>
                                    <NavLink className="ms-4 text-decoration-none nav-item text-danger fw-bold header-section" to="/manage-orders">Manage Orders</NavLink>
                                    <NavLink className="ms-4 text-decoration-none nav-item text-danger fw-bold header-section" to="/add-services">Add Services</NavLink>
                                    <NavLink className="ms-4 me-4 text-decoration-none nav-item text-danger fw-bold header-section" to="/my-orders">My Orders</NavLink>
                                    <NavDropdown title={<img className="user-photo" src={user.photoURL} alt="user" />} id="basic-nav-dropdown">
                                        <NavDropdown.Item to="">{user.displayName}</NavDropdown.Item>
                                        <NavDropdown.Item to=""><Button className="text-white" variant="danger" onClick={logOut}>Log Out</Button> </NavDropdown.Item>
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