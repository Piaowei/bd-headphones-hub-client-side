import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import discount from '../../../images/discount.jpg'

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});



    useEffect(() => {
        fetch(`https://fierce-woodland-16592.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = data => {
        data.productName = service.name;
        data.productimg = service.img;
        data.productStatus = "Pending";

        axios.post('https://fierce-woodland-16592.herokuapp.com/orderItems', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Ordered Submitted successfully");
                    reset();

                }
            })
    };



    return (
        <div>
            <Header></Header>
            <div id="booking" className=" item-space" >
                <div className="container-fluid full-body">
                    <h1 className="pb-4">Place your order Now</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <div>
                                    <img src={service.img} style={{ height: "280px", width: "230px" }} className="card-img-top img-fluid my-4 " alt="..." />
                                </div>


                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <small className="card-text"><span className="fw-bold text-danger" >Product Details: </span> {service.description}</small>
                                </div>
                                <div className="price-bg" >
                                    <h5  >Price : <span className="text-white" >&yen;{service.price}</span> </h5>
                                </div>
                                <div className="price-bg" >
                                    <h5  >Total Reviewed by: <span className="text-white" >{service.time}</span> People </h5>
                                </div>
                            </div>
                        </div>


                        <div className="col ">
                            <div className="border border-1 info-bg border border-danger">
                                <h5 className="text-secondary" >User Name: <span className="text-white">{user.displayName}</span> </h5>
                                <h5 className="text-secondary">User Email: <span className="text-white">{user.email}</span> </h5>
                            </div>
                            <div className="card border-0 purchase-bg pb-3 d-flex justify-content-center align-items-center ">
                                <form className="shipping-form  form-class  " onSubmit={handleSubmit(onSubmit)}>

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
                            <div className="mt-2">
                                <img className="img-fluid" src={discount} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>



    );
};

export default Booking;