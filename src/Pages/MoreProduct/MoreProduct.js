import React from 'react';
import { Nav } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const MoreProduct = (props) => {
	const { user, isLoading } = useAuth();
	// const {service} = props;
	const { _id, name, price, description, img } = props.service;


	return (
		<div>
			<div className="card mb-3 container-fluid no-margin carts" >
				<div className="row g-0">
					<div className="col-md-4  d-flex ">
						<img src={img} className="img-fluid rounded-start" alt="..." />
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
								<h5 className="price" >Price Starts at: <span className="text-black" >&yen;{price}</span> </h5>
								<Nav.Link as={HashLink} to={`/booking/${_id}#booking`}>
									<button className="btn btn-danger button ">Book Now </button>
								</Nav.Link>
							</div>



						</div>
					</div>
				</div>
			</div>
		</div>

	);
};
export default MoreProduct;