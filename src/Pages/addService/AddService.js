import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import { Spinner } from 'react-bootstrap';
import hotel from '../../images/hotel.jpg'



const AddService = () => {
	const [isFound, setIsFound] = useState(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = data => {
		setIsFound(true);
		console.log("This is  data", data);
		axios.post('http://localhost:5000/products', data)
			.then(res => {
				if (res.data.insertedId) {
					setIsFound(false);
					alert("added successfully");
					reset();
				}
			})

	};


	return (
		<div id="nav-bar" className="add-sevice" >
			<div className="service-container" >
				<div className="card mb-3 container-fluid no-margin carts">
					<div className="row g-0 ">
						<div className="col col-12 ">
							<div className="card h-100 carts-item">
								<img src={hotel} className="img-fluid  card-img-top" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* -------------------------------------------------
                   ADD NEW SERVICE
-----------------------------------------------------*/}
			{
				isFound && <Spinner animation="border" variant="danger" />
			}

			<h1>Add a service</h1>
			<form onSubmit={handleSubmit(onSubmit)}>

				<input {...register("name", { required: true })} placeholder="Product name" />
				{errors.name?.type === 'required' && <span className="text-danger">Product name is required</span>}

				<textarea {...register("description", { required: true })} placeholder="Description" />
				{errors.description && <span className="text-danger">Description is required</span>}

				<input type="number" {...register("price", { required: true })} placeholder="Price" />
				{errors.price && <span className="text-danger">price is required </span>}

				<input type="number" {...register("time", { required: true })} placeholder="Total Ratings" />
				{errors.time && <span className="text-danger">Total Ratings required</span>}

				<input {...register("img")} placeholder="Image URL" />
				<input className="submit-order-btn" type="submit" />
			</form>
		</div>
	);
};

export default AddService;