import React from 'react';
import './Service.css';
import { Nav } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Service = (props) => {
    const { _id, name, price, description, img } = props.service;


    return (
        <div>
            <div className="card mb-3 container-fluid no-margin carts" >
                <div className="row g-0">
                    <div className="col-md-4  ">
                        <img style={{ height: "200px", width: "120px" }} src={img} className="img-fluid rounded-start my-2 " alt="..." />
                    </div>
                    <div className="col-md-8 no-margin">
                        <div className="card-body ">
                            <h5 className="card-title">{name}</h5>
                            <p className="px-3 text-start fs-6">
                                {
                                    description.slice(0, 250)
                                }.......
                            </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="price" >Price : <span className="text-black" >$ {price}</span> </h5>
                                <Nav.Link as={HashLink} to={`/booking/${_id}#booking`}>
                                    <button className="btn btn-danger button buy-btn-color ">Buy Now </button>
                                </Nav.Link>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;