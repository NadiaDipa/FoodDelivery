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
                <h1 className="text-center text-danger mb-5 mt-5">Popular Food Item</h1>
            </div>
            <div class = "container mx-auto row row-cols-1 row-cols-md-3 g-4" >
                {
                services.map(myservice => <div

                    key={myservice._id}>
                   <div>
                    <div class="col">
                        <div class="card h-100 food-item">
                        <img className="img-fluid" src={myservice.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{myservice.title}</h5>
                            <p class="card-text">{myservice.desc}</p>
                        </div>
                        <div className="mb-3">
                           <Link to={`/booking/${myservice._id}`}><button className="btn btn-danger">Order Now</button></Link>
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