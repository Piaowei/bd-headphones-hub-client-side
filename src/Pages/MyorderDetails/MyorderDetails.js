import React, { useState } from 'react';


const MyorderDetails = (props) => {

	const { productName, productimg, _id, productStatus } = props.service;
	const { handleDelete, id } = props;




	return (


		<div className="col ">
			<div className="card h-100 carts-item">
				<div className="d-flex justify-content-evenly align-items-center mt-2">
					<img style={{ height: "100px", width: "80px" }} src={productimg} className="img-fluid  card-img-top px-2" alt="..." />
					<small className="card-title">{productName.slice(0, 40)}</small>

				</div>
				<div className="card-body m-0">
					<div className="d-flex justify-content-between  align-items-center" >
						<h6 className="text-danger" >{productStatus}</h6>
						<button className="btn btn-danger" onClick={() => handleDelete(_id)} >Delete</button>
					</div>

				</div>
			</div>
		</div>




	);
};

export default MyorderDetails;
