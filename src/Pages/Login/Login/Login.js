import { getAuth } from '@firebase/auth';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import login from '../../../images/login.png'

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
        // console.log(loginData)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }







    /* const { signInUsingGoogle } = useAuth();
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home#home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    } */

    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }} >
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Your Name"
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
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {/* ------------------------------ */}

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>----------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={4} md={6} >
                    {/* <img style={{ width: "100%" }} src={login} alt="" /> */}
                </Grid>

            </Grid>
        </Container >

        // <div id="nav-bar" className="my-5">
        //     <div className="my-5 py-5 ">
        //         <h4>Please Login/Google Sign in</h4>
        //         <button onClick={handleGoogleSignIn} className="btn google "><FcGoogle size="2em" /></button>

        //     </div>
        // </div>

    );
};

export default Login;