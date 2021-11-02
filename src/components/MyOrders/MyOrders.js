import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useFirebase();
    const { email } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                const uniqueUserOrder = data.filter(order => order.email === email)
                setOrders(uniqueUserOrder);
            });
    }, [email, orders])
console.log(orders)
    //Remove
    const handleRemove = (id) => {
        const deleteWarning = window.confirm('Are You sure Delete This Service');
        if (deleteWarning) {
            fetch(`https://obscure-harbor-04873.herokuapp.com/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                        //  window.location.reload()
                    }
                })
        }



    }
    return (
        <Container className="my-4">

            <h1 className="text-success text-center" style={{ fontFamily: "cursive" }}>My All Orders {orders.length}</h1>

            {
                orders.map(order => <Row xs={1} md={1} className="g-4 my-4">
                    <Col md={4}>
                        <div>
                            <img height="150px" src={order?.order?.img} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2 className="text-success">{order?.title} </h2>
                        <p className="text-muted mt-2">Ordered By: {order?.name}</p>
                        <Button onClick={() => handleRemove(order._id)} variant="danger">Remove</Button>
                    </Col>
                </Row>)
            }

        </Container>
    );
};

export default MyOrders;