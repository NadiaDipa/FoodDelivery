import React from 'react';
import logo from "./../../logo.png";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
                    
                    <NavLink
                        className="hoverStyle text-decoration-none sm-mb-3"
                        to="home"
                    >
                    <Navbar.Brand className="navBarBrand">
                    <img width="80px" src={logo} alt="" />{" "}
                    <span className="fw-bold text-danger"  style={{fontSize: 30}}>Food Delivery</span>
                    </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-danger fw-bold" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-danger fw-bold" href="#link">About</Nav.Link>

                       <NavDropdown
                            title={
                                <span className="text-danger fw-bold my-auto">Order Section</span>
                            }
                            id="nav-dropdown"
                            >
                            <NavDropdown.Item className="text-danger fw-bold">Manage All Orders</NavDropdown.Item>
                            <NavDropdown.Item className="text-danger fw-bold">Add A New Order</NavDropdown.Item>
                            <NavDropdown.Item className="text-danger fw-bold">My Orders</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link className="text-danger fw-bold" href="#link">Contact</Nav.Link>
                        <Nav.Link className="text-danger fw-bold" href="#link">Logout</Nav.Link>
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;