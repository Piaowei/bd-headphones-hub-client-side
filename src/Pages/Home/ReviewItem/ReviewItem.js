import React from 'react';
import user from "../../../images/user.jpg"
import './ReviewItem.css'
import Rating from '@mui/material/Rating';

const ReviewItem = (props) => {
	const { rate, description, name } = props.review;

	return (
		<div className="col">
			<div className="card h-100">
				<div className="d-flex justify-content-center">
					<img src={user} className="card-img-top user-image text-center" alt="..." />

				</div>
				<div className="card-body  p-1 m-0 ">
					<h5 className="card-title">{name}</h5>
					<Rating name="read-only" value={rate} readOnly />
					<br />
					<small className="text-left">{description.split(' ').slice(0, 40).join(' ')}... </small>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;