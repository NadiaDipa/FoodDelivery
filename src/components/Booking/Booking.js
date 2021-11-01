import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Booking.css';

const Booking = () => {
    const { user } = useFirebase();
    const [services, setServices] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('Congrats!! booking successfully confirmed');
                    reset();
                }
            })
    };
    return (
       <div>
            <div>
                <div className="text-center mt-5">
                    <div>
                        <img src={services.img} alt="" />
                    </div>
                    <div>
                        <h4>{services.title}</h4>
                        <p className="px-5">{services.desc}</p>
                    </div>
                </div>
                <div className="booking-container">
                    <h2 className="text-center">Book Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 1000 })} value={user.displayName} />
                        <input {...register("email", { required: true, maxLength: 1000 } )} value={user.email} />
                        <input {...register("title", { required: true, maxLength: 1000 })} value={services.name} />
                        <input {...register("img", { required: true, maxLength: 1000 })} value={services.imgURL} />

                        {/* <input {...register("location", { required: true, maxLength: 100 })} placeholder="Where do you live?" /> */}
                        {/* <input {...register("job", { required: true, maxLength: 1000 })}
                            placeholder="What's your job?" /> */}

                        {/* <input {...register("date", { required: true, maxLength: 100 })} placeholder="Date" type="date" /> */}
                        <input className="submit" type="submit" value="Confirm" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;