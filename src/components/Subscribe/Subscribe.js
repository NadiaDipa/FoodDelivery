import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="comfort text-danger mx-auto mt-5">
            <div className="p-3">
               <img className = "img-fluid" height="20px" width="50%"
               src = "https://gadnwid.com/wp-content/uploads/2020/09/pathao-food-768x431.jpg.webp"
               alt = "" />
            </div>
            <div className="p-5">
                <h2 className="fs-1">Subscribe To Our Newsletter</h2>
                <div class="input-group mb-3 mt-4">
                    <input type="text" class="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
                    <span class="input-group-text" className="bg-danger text-black fw-bolder fs-5 p-3" id="basic-addon2">Subscribe Now</span>
                   
                </div>
            </div>
        </div>
    );
};

export default Subscribe;