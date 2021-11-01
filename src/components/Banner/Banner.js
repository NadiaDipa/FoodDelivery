import React from 'react';
import imageBurger from './../../assets/burger.jpg';
import imageFoodDelivery from './../../assets/food-delivery.jpg';
import imageFish from './../../assets/fish.jpg';
import { FloatingLabel, Form } from 'react-bootstrap';
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="img-fluid" height="630px" width="100%" src ={imageFoodDelivery}
      class = "d-block w-100"
      alt = "..." />
       {/* <div class="carousel-caption d-none d-md-block">
         <h5 className="text-light fw-bold fs-2">Safe Food Delivery</h5> 
        <FloatingLabel FloatingLabel controlId = "floatingSelect" className="bg-danger fs-5"
        label = "Choose Your Current Location" >
            <Form.Select>
                <option className="text-danger">find out</option>
                <option className="text-danger" value="1">Gulshan</option>
                <option className="text-danger" value="2">Banani</option>
                <option className="text-danger" value="3">Dhanmondi</option>
                <option className="text-danger" value="3">Basundhara</option>
                <option className="text-danger" value="3">Khilgaon</option>
                <option className="text-danger" value="3">Mirpur</option>
            </Form.Select>
            </FloatingLabel>
        <p className="text-dark fs-3">Set exact location to find the right restuarant near you.</p>
      </div>  */}
    </div>
    <div class="carousel-item">
      <img className="img-fluid" height="630px" width="100%" src ={imageBurger}
      class = "d-block w-100"
      alt = "..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="img-fluid" height="550px" width="100%" src={imageFish} alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;