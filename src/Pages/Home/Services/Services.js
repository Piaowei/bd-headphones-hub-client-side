import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    const [isFound, setIsFound] = useState(true);
    useEffect(() => {
        setIsFound(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsFound(false));

    }, [])

    if (isFound) {
        return <Spinner animation="border" variant="danger" />
    }


    return (
        <div className="container-fluid">
            <h1 className="text-primary mt-5 pb-2 title ">Our services</h1>


            <div className=" service-container ">
                {
                    (services.slice(0, 3)).map(service => <Service
                        key={service._id}
                        service={service}
                        short={service.description.slice(0.15)}
                        isFound={isFound}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;