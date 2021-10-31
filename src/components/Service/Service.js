import React from 'react';
import { Link } from 'react-router-dom';


    
const Service = (service) => {
    const { title, img, desc,price, rating } = service;
    return (
        <div>
            <div>
                <div class="col">
                    <div class="card h-100">
                        <img className="img-fluid service-img" src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                          
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{desc}</p>
                        </div>
                        <div class="card-footer">
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-5 fw-bold price">From $ {price}</span>
                                </div>
                                <div>
                                    <span className="fs-5 fw-bold ">From $ {rating}</span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;