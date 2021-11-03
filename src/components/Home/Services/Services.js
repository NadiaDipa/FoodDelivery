import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
     const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://obscure-harbor-04873.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div>
                <h1 className="text-center mx-auto text-danger headline mt-5 fs-1">Popular Food Item</h1>
                <p className="text-dark fs-5 fw-bold">Good Quality Food With Great Service To Our Customer</p>
            </div>
            <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-2">
                {
                services.map(myservice => <div

                    key={myservice._id}>
                   <div>
                    <div className="col shadow shadow-4">
                        <div className="card h-100 food-item">
                        <img src={myservice.img} className="img-fluid card-img-top" alt="..." />
                        <div className="bg-dark">
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold fs-5">{myservice.title}</h5>
                                <p className="card-text text-light">{myservice.desc}</p>
                            </div>
                            <div className = "mb-3">
                                <Link to={`/booking/${myservice._id}`}><button className="btn btn-danger text-white">Order Now</button></Link>
                            </div>
                        </div>
                        </div>
                    </div>
 
  
                </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Services;