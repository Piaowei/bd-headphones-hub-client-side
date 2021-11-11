import React, { useState } from 'react';
import './ManageOrderDetails.css'
const ManageOrderDetails = (props) => {
	const { productName, productimg, _id, productStatus, email, name } = props.service;
	const { handleDelete, id } = props;
	const { handleUpdateUser } = props;




	return (
		<div>
			<div className="card mb-3 container-fluid no-margin carts-pub " >
				<div className="row g-0">
					<div className="col-md-4 col-12 ">
						<img style={{ height: "250px", width: "200px" }} src={productimg} className="img-fluid rounded-start my-1 " alt="Product Image" />
					</div>
					<div className="col-md-8 col-12 ">
						<div className="card-body ">
							<h5 className="card-title">{productName}</h5>
							<br />
							<div className="d-flex justify-content-between justify-content-center">
								<p>Order Status: <span className="text-danger fw-bold" >{productStatus}</span> </p>
								<div>
									<p>User Email: <span className="text-primary fw-bold" >{email}</span> </p>
									<p>User Name: <span className="text-primary fw-bold" >{name}</span> </p>

								</div>
							</div>

							<div className="d-flex justify-content-md-start justify-content-between ">
								<button className="btn btn-danger me-3" onClick={() => handleDelete(_id)} >Delete</button>
								<button className="btn btn-primary" onClick={() => handleUpdateUser(_id)} >Approve Order</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ManageOrderDetails;