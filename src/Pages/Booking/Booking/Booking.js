import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5000/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = data => {
        data.productName = service.name;
        data.productimg = service.img;
        data.productStatus = "Pending";
        console.log("opor theke", data);
        console.log("This is order sumbit info", data);
        axios.post('http://localhost:5000/orderItems', data)
            .then(res => {
                console.log("this is res", res);
                if (res.data.insertedId) {
                    alert("Ordered Submitted successfully");
                    reset();

                }
            })
    };



    return (

        <div id="booking" className=" item-space" >
            <div className="container-fluid full-body">
                <h1 className="pb-4">Place your order Now</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={service.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="price-bg" >
                                <h5  >Price Starts at: <span className="text-white" >&yen;{service.price}</span> </h5>
                            </div>
                            <div className="price-bg" >
                                <h5  >Travel Duration: <span className="text-white" >{service.time}</span> Hours </h5>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="border border-1 info-bg border border-danger">
                            <h5>User Name: {user.displayName}</h5>
                            <h5>User Email: {user.email}</h5>
                        </div>
                        <div className="card">
                            <form className="shipping-form  form-class " onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Service Name" />
                                {errors.name?.type === 'required' && <span className="text-danger"> User name is required</span>}

                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">Email is required</span>}

                                <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                                {errors.address && <span className="text-danger">Address is required</span>}

                                <input type="number" placeholder="Bank Account Number"  {...register("bankAccount", { required: true })} />
                                {errors.bankAccount && <span className="text-danger">Bank Account Number is  required</span>}

                                <input placeholder="Phone number"  {...register("phone", { required: true })} />
                                {errors.phone && <span className="text-danger">Phone Number is  required</span>}
                                <input className="submit-btn" type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Booking;