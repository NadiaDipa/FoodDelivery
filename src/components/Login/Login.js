import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="w-50 mx-auto p-5 shadow mt-5 my-5">
            <div>
            <form onSubmit="">
                <div className="mb-4">
                    <p className="text-center">Welcome Back</p>
                    <h2 className="login-header">Login to your account</h2>
                    <hr />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onBlur="" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur="" type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3 form-check">
                    <input onBlur="" type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    
                    <Link  className="forget-pass">Forget Your Password?</Link>
                    
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            
                <br />
                <br />
                </div>
                <div>OR</div>

                <p> Don't have an account? <Link to="/register">Create Account</Link></p>
                <div className="fs-2 text-center">
                    {/* <i onClick={signInUsingGoogle} className= "fab fa-google text-danger"></i>
                    <i onClick={signInUsingGit} className= "fab fa-github ms-3"> </i> */}
                </div>
            </div>
        </div>
    );
};

export default Login;