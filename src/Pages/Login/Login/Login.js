import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import headphoneboy from '../../../images/headphoneboy.png'

import './Login.css'
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }



    return (

        <div className="login-full-body ">
            <Container  >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ mt: 5 }} >
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic"
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" className="login-btn" > <span className="text-white fw-bold" >Login</span> </Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            <h6>or</h6>
                            {isLoading && <Spinner animation="border" variant="danger" />}
                            {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>


                        <button className="btn  btn-light btn-outline-warning" onClick={handleGoogleSignIn} > < FcGoogle size="1.5em" />Google Sign In</button>
                    </Grid>
                    <Grid item xs={12} md={6} className="container-fluid" >
                        <img style={{ width: "100%" }} src={headphoneboy} alt="" />
                    </Grid>

                </Grid>
            </Container >
        </div>




    );
};

export default Login;