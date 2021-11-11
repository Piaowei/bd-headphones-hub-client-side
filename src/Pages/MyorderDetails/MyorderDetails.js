import React, { useState } from 'react';


const MyorderDetails = (props) => {

	const { productName, productimg, _id, productStatus } = props.service;
	const { handleDelete, id } = props;




	return (


		<div className="col ">
			<div className="card h-100 carts-item">
				<img style={{ height: "280px", width: "200px" }} src={productimg} className="img-fluid  card-img-top" alt="..." />
				<div className="card-body m-0">
					<h5 className="card-title">{productName}</h5>
					<h6 className="text-danger" >{productStatus}</h6>
					<button className="btn btn-danger" onClick={() => handleDelete(_id)} >Delete</button>
				</div>
			</div>
		</div>




	);
};

export default MyorderDetails;
