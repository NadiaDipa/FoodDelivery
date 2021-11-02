import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';




const Login = () => {
   const { handleGoogleSignIn, error, setError , setIsLoading} = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="google-button w-50 mt-5 px-5 py-5 mx-auto shadow bg-dark">
            <h1 className="mb-4 fs-3 mt-2 text-danger">Login Using <span className="text-Warning">Google</span></h1>
            <button className="google-sign-in btn btn-outline-danger" onClick={signInUsingGoogle}><i class="fab fa-google fs-3 me-2 google-sign"></i> Google Login</button>
        </div>
    );
};

export default Login;