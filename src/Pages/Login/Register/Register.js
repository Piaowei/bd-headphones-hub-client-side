import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import login from '../../../images/login.png'


const Register = () => {
	const [loginData, setLoginData] = useState({});
	const location = useLocation();
	const history = useHistory();
	const { user, registerUser, isLoading, authError } = useAuth();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	}

	const handleRegisterSubmit = e => {
		e.preventDefault();
		if (loginData.password !== loginData.password2) {
			alert('Your password did not match');
			// return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, location, history);
	}
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} sx={{ mt: 5 }} >
					<Typography variant="body1" gutterBottom>Register</Typography>
					{!isLoading && <form onSubmit={handleRegisterSubmit}>
						<TextField id="standard-basic"
							sx={{ width: '75%', m: 1 }}
							label="Your Name"
							name="name"
							onBlur={handleOnBlur}
							variant="standard" />
						<TextField id="standard-basic"
							sx={{ width: '75%', m: 1 }}
							label="Your Email"
							type="email"
							name="email"
							onBlur={handleOnBlur}
							variant="standard" />
						<TextField
							sx={{ width: '75%', m: 1 }}
							id="standard-password-input"
							label="Your Password"
							type="password"
							name="password"
							onBlur={handleOnBlur}
							autoComplete="current-password"
							variant="standard" />
						<TextField
							sx={{ width: '75%', m: 1 }}
							id="standard-password-input"
							label="Re-type Your Password"
							type="password"
							name="password2"
							onBlur={handleOnBlur}
							autoComplete="current-password"
							variant="standard" />


						<Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Register</Button>
						<NavLink style={{ textDecoration: 'none' }} to="/login">
							<Button variant="text">Already Registered? Please Login</Button>
						</NavLink>
					</form>}

					{isLoading && <CircularProgress />}
					{user?.email && <Alert severity="success">User Created Successfully!</Alert>}
					{authError && <Alert severity="error">{authError}</Alert>}

				</Grid>
				<Grid item xs={4} md={6} >
					{/* <img style={{ width: "100%" }} src={login} alt="" /> */}
				</Grid>

			</Grid>
		</Container >
	);
};

export default Register;