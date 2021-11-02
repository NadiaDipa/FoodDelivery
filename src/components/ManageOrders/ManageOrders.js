import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://obscure-harbor-04873.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const handleDelete = id => {
        const url = `https://obscure-harbor-04873.herokuapp.com/users/${id}/`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining)
                }
            })
    }

    const handleUpdate = id => {
        const updatedOrder = orders.status;
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
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5 text-danger">Manage All Orders</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                    orders.map(order => <div
                        
                        key={order._id}>
                        <div className="shadow my-5 text-center rounded">
                            <div>
                                <img className="img-fluid" src={order.img} alt="" />
                                <h4>{order.title}</h4>
                                <p>{ order.status}</p>
                                <h5>Name: {order.name}</h5>
                                <p>Email: {order.email}</p>
                                <p>{order.location}</p>
                                <p>{order.date}</p>
                            </div>
                            <div>
                                <button className="btn btn-danger mt-2 mb-5" onClick={() => handleDelete(order._id)}>Delete Service</button>
                            </div>
                            <div>
                                <button className="btn btn-danger mt-2 mb-5" onClick={() => handleUpdate(order._id)}>Confirm</button>
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