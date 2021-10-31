import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                
                if(res.data.insertedId){
                    alert('Added Successfully!');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <img className="mt-5" height="390px" src="https://www.goteso.com/products/assets/images/food-delivery-software.png" alt="" />
            <h2 className="text-danger fw-bold text-center">Catering Order Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 50 })} placeholder="Enter Full Name" />
                <input {...register("price", { required: true, maxLength: 50 })} placeholder="Enter Food Price" />
                {/* <input {...register("Email", { required: true, maxLength: 50 })} placeholder="Email" /> */}
                {/* <input {...register("Today's Date", { required: true, maxLength: 100 })} placeholder="Today's Date" /> */}
                {/* <input {...register("Order Due Date", { required: true, maxLength: 100 })} placeholder="Order Due Date" /> */}
                <input {...register("desc", { required: true, maxLength: 100 })} placeholder="Enter Your Location" />
                <input {...register("desc", { required: true, maxLength: 100 })} placeholder="Enter Your Mobile Number" />
                {/* <input type="price" {...register("price")} placeholder="Total Cost" /> */}
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;