import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-dark">
                <div className="footer-link">
                    <div>
                        <h4 className="text-danger">Popular Cuisines</h4>
                       <ul>
                            <li className="text-warning">American</li>
                            <li className="text-warning">Burger</li>
                            <li className="text-warning">Chinese</li>
                            <li className="text-warning">Korean</li>
                            <li className="text-warning">Dessert</li>
                        </ul>

                    </div>
                    <div>
                        <h5 className="ms-4 mb-4 text-danger">Get In Touch</h5>
                        <ul>
                            <li className="text-warning">7/B, Road No-12,Tb Gate, Mohakhali, Dhaka, Bangladesh.</li>
                            <li className="text-warning">01488599033 & +09895472</li>
                          
                            <li className="text-warning">food_delivery@gmail.com</li>
                            <li className="text-warning">09.00 AM - 17.00 PM</li>
                        </ul>

                    </div>
                    <div className="text-danger">
                        <h5 className="ms-4 mb-3">Follow Us</h5>
                         <ul>
                            <li className="text-warning">FACEBOOk</li>
                            <li className="text-warning">INSTAGRAM</li>
                            <li className="text-warning">Whatsapp</li>
                            <li className="text-warning">TWITTER</li>
                            <li className="text-warning">YOUTUBE</li>
                        </ul>
                    </div>
                    
                    <div className="text-danger">
                        <h5 className="ms-4 mb-3">Quick Links</h5>
                        <ul>
                            <Link className="footer-ancor-link text-warning" to="/home"><li>Home</li></Link>
                            <Link className="footer-ancor-link text-warning" to="/about"><li>About</li></Link>
                            <Link className="footer-ancor-link text-warning" to="/manage-orders"><li>Manage Orders</li></Link>
                            <Link className="footer-ancor-link text-warning" to="/my-orders"><li>My Orders</li></Link>
                            <Link className="footer-ancor-link text-warning" to="/add-service"><li>Add Service</li></Link>
                            <Link className="footer-ancor-link text-warning" to="/"><li>Terms and Conditions</li></Link>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="text-center text-danger fs-6 mt-4">&copy; All right reserved | 2021 <span className="text-warning">foodDelivery</span></p>
            </footer>
        </div>
    );
};

export default Footer;