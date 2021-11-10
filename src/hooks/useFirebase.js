import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // REGISTER USER

    const registerUser = (email, password, name, location, history) => {
        console.log("ami from register", isLoading)
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');

                const newUser = { email, diaplayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name, 'POST');

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/';
                // console.log("registration er destination", location.state.from)
                history.replace(destination);
                // history.replace('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // setUser('');
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // LOGIN USER
    const loginUser = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                console.log("Login er destination", destination)
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }


    // GOOGLE SIGN IN
    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save user to database
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }


    // const signInUsingGoogle = () => {
    //     setIsLoading(true);
    //     const googleProvider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, googleProvider)
    //         //     .then(result => {
    //         //         setUser(result.user);
    //         //     })
    //         .finally(() => setIsLoading(false));
    // }

    // observe user state change
    // OBSERVER OF USER STATE
    useEffect(() => {
        console.log("useeffect worked");
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [auth])


    // SIGNOUT USER
    const logout = () => {
        setIsloading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            // setAuthError(error.message);
        })
            .finally(() => setIsloading(false));
    }


    // const logOut = () => {
    //     setIsLoading(true);
    //     signOut(auth)
    //         .then(() => { })
    //         .finally(() => setIsLoading(false));
    // }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("data of admin", data.admin)
                setAdmin(data.admin)
            })
    }, [user.email])


    /*------------------------------------
               SAVE USER 
    --------------------------------------*/
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;