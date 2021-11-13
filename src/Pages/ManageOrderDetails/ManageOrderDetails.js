import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './ManageOrderDetails.css'
const ManageOrderDetails = (props) => {
	const { productName, productimg, _id, productStatus, email, name } = props.service;
	const { handleDelete } = props;
	const { handleUpdateUser } = props;




	return (
		<div>
			<div className="card mb-3 container-fluid no-margin carts-pub " >
				<div className="row g-0">
					<div className="col-md-4 col-12 ">
						<img style={{ height: "200px", width: "150px" }} src={productimg} className="img-fluid rounded-start my-1 " alt="Product Image" />
					</div>
					<div className="col-md-8 col-12 ">
						<div className="card-body ">
							<h5 className="card-title">{productName}</h5>
							<small className="text-secondary">Order Status: <span className="text-danger fw-bold" >{productStatus}</span> </small>
							<hr className="my-1" />

							<div className="d-flex justify-content-between justify-content-center pb-2 mt-1 pt-1 ">
								<small className="text-secondary" >Email: <span className="text-primary fw-bold" >{email}</span> </small>
								<small className="text-secondary">Name: <span className="text-primary fw-bold" >{name}</span> </small>
							</div>
							<hr className="my-1" />

							<div className="d-flex  justify-content-between ">
								<div>
									<button className="btn btn-danger  p-1 d-flex  me-3" onClick={() => handleDelete(_id)} ><MdDeleteForever size="1.5em" />Delete</button>
								</div>
								<div>
									<button className="btn btn-primary p-1" onClick={() => handleUpdateUser(_id)} >Ship Order</button>
								</div>


							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ManageOrderDetails;