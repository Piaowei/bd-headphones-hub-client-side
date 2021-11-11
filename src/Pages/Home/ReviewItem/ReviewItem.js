import React from 'react';

const ReviewItem = (props) => {
	const { rate, description, name } = props.review;

	return (
		<div class="col">
			<div class="card h-100">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{name}</h5>
					<small class="card-text">{description} </small>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;