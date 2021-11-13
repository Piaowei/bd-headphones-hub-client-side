import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [unSuccess, setUnSuccess] = useState(false);


	const handleOnBlur = e => {
		setEmail(e.target.value);
	}

	const handleAdminSubmit = e => {
		setSuccess(false);
		setUnSuccess(false);
		const user = { email };
		fetch('https://fierce-woodland-16592.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount) {
					// setEmail('');
					setSuccess(true);
				}
				else {
					setUnSuccess(true);
				}
			})
		e.preventDefault()
	}
	return (
		<div>
			<h2>Make me admin</h2>
			<form onSubmit={handleAdminSubmit} >
				<TextField className="mx-3"
					sx={{ width: '50%' }}
					label="Email"
					type="email"
					onBlur={handleOnBlur}
					variant="standard"
				/>
				<button className="btn btn-info" type="submit" variant="contained" >Make Admin</button>
				<br />
				<br />
				{success && <Alert severity="success">Made Admin Successfully!</Alert>}
				{unSuccess && <Alert severity="error">Invalid User OR User is Already an Admin</Alert>}
			</form>
		</div>
	);
};

export default MakeAdmin;