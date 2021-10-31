import React, { useEffect, useState } from 'react';

const Services = () => {
     const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5">Travel Packages</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                services.map(myservice => <div

                    key={myservice._id}>
                    <div className="shadow my-5 text-center rounded">
                        <div>
                            <h5>{myservice.price}</h5>
                            <h4>{myservice.desc}</h4>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Services;