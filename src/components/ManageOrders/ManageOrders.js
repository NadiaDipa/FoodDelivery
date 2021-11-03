import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://obscure-harbor-04873.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const handleDelete = id => {
        const confirmation = window.confirm('Are You Sure To Delete?')
        if (confirmation) {
             const url = `https://obscure-harbor-04873.herokuapp.com/users/${id}/`
             fetch(url, {
                     method: 'DELETE'
                 })
                 .then(res => res.json())
                 .then(data => {
                     console.log(data)
                     if (data.deletedCount) {
                         alert('Deleted Successfully!')
                         const remaining = orders.filter(service => service._id !== id);
                         setOrders(remaining)
                     }
                 })
        }
       
    }

    const handleUpdate = id => {

        // console.log('button clicked');
        const updatedOrder = {...orders};
        console.log(updatedOrder)
        updatedOrder.status = "Approved";

        fetch(`https://obscure-harbor-04873.herokuapp.com/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated!');
                   
                }
            })
    }



    // function confirmHandler(id) {
    //     const updatedOrder = orders;
    //     updatedOrder.status = 'Approved';

    //     const confirmation = window.confirm('Confirmed!!')
    //     if (confirmation) {
    //         fetch(`http://localhost:5000/confirmation/${id}`, {
    //             method: "put"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
                
    //         })
    //     }
    // }


    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5 text-danger headline mx-auto">Manage All Orders</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                    orders.map(order => <div 
                        
                        key={order._id}>
                        <div style = {{backgroundColor:"#212529"}}
                        className = "shadow rounded my-5 text-center rounded" >
                            <div className="text-danger">
                                <img className="img-fluid" src={order.img} alt="" />
                                <h4 className="text-warning">{order.title}</h4>
                                <p>{ order.status}</p>
                                <h5>Name: <span className="text-warning">{order.name}</span></h5>
                                <h6>Email: <span className="text-warning">{order.email}</span></h6>
                                <p>{order.location}</p>
                                <p>{order.date}</p>
                            </div>


                            <div className="row mx-auto text-center mb-4 mt-4">
                                    <div className="col-6">
                                        <button className="btn btn-danger text-white fs-6 fw-bold border border-2 mb-5" onClick={() => handleDelete(order._id)}>Delete</button>
                                    </div>
                                    <div className = "col-6" >
                                        <button className="btn btn-success fw-bold fs-6 border border-2 mb-4" onClick={() => handleUpdate(order._id)}>Confirm</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    )
                    
                }
            </div>
        </div>
    );
};
export default ManageOrders;