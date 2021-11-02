import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://obscure-harbor-04873.herokuapp.com//services', data)
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
               
                
                <input {...register("img", { required: true, maxLength: 5000 })} placeholder="Enter Your img url" />
                <input {...register("desc", { required: true, maxLength: 1000 })} placeholder="Enter Your Details" />
                
                <input className="submit bg-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;