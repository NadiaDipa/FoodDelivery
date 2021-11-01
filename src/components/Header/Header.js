// import React from 'react';
// import logo from "./../../logo.png";
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';


// const Header = () => {
//     return (
//         <div>
//             <Navbar bg="light" expand="lg">
//                 <Container>
//                     {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
                    
//                     <NavLink
//                         className="hoverStyle text-decoration-none sm-mb-3"
//                         to="home"
//                     >
//                     <Navbar.Brand className="navBarBrand">
//                     <img width="80px" src={logo} alt="" />{" "}
//                     <span className="fw-bold text-danger"  style={{fontSize: 30}}>Food Delivery</span>
//                     </Navbar.Brand>
//                     </NavLink>

//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link className="text-danger fw-bold" href="#home">Home</Nav.Link>
//                         <Nav.Link className="text-danger fw-bold" href="#link">About</Nav.Link>

//                        <NavDropdown
//                             title={
//                                 <span className="text-danger fw-bold my-auto">Order Section</span>
//                             }
//                             id="nav-dropdown"
//                             >
//                             <NavDropdown.Item className="text-danger fw-bold">Manage All Orders</NavDropdown.Item>
//                             <NavDropdown.Item className="text-danger fw-bold">Add A New Order</NavDropdown.Item>
//                             <NavDropdown.Item className="text-danger fw-bold">My Orders</NavDropdown.Item>
//                         </NavDropdown>

//                         <Nav.Link className="text-danger fw-bold" href="#link">Contact</Nav.Link>
//                         <Nav.Link className="text-danger fw-bold" href="#link">Logout</Nav.Link>
                       
//                     </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };

// export default Header;



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
{/*                            
                            <li class="nav-item">
                                <NavLink className = "link nav-link text-danger"
                                    to="/login"
                                >
                                    Login
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