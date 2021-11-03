import React from 'react';
import imageBurger from './../../assets/burger.jpg';
import imageFoodDelivery from './../../assets/food-delivery.jpg';
import imageFish from './../../assets/fish.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="img-fluid" height="550px" width="100%" src ={imageFoodDelivery}
                  class = "d-block w-100"
                alt="..." />
                  <form className="d-flex w-75 mx-auto">
                    <input className="form-control me-2 mx-auto" type="search" placeholder="Discover restuarants that deliver near you..." aria-label="Search" />
                    <button className="btn btn-dark text-warning fw-bold" type="submit">Search</button>
                  </form>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" height="580px" width="100%" src ={imageBurger}
                    class = "d-block w-100"
                    alt = "..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="text-white fs-2">Feel The Taste</h5>
                      <p className="text-warning fs-5">We are Delivering Delicious Premium Food</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" height="330px" width="100%" src={imageFish} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="text-white fs-2">We Are Enthusiasts of Japanese Cuisine</h5>
                      <p className="text-warning fs-5">Experience the fastest food delivery with healthy food.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
    );
};

export default Banner;