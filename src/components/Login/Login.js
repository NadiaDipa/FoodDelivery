import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div div className = "w-50 mx-auto p-5 shadow mt-5 my-5 bg-danger" >
            <div>
            <form onSubmit="">
                <div className="mb-4 text-white">
                    <img src="https://www.food2-go.co/public/admin/assets/img/login_bg1.png" alt="" />
                    <p className="text-center mt-5">Welcome Back</p>
                    <h2 className="login-header">Login to your account</h2>
                    <hr />
                </div>
                <div className = "mb-3 text-white" >
                    <label for="exampleInputEmail1" className="form-label">Your Email address</label>
                    <input required onBlur="" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div div id = "emailHelp"
                    className = "form-text text-white"> We 'll never share your email with anyone else.</div>
                </div>
                <div className = "mb-3 text-dark" >
                    <label for="exampleInputPassword1" className="form-label" placeholder="Your Password"></label>
                    <input onBlur="" type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div div className = "mb-3 form-check text-white" >
                    <input onBlur="" type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    
                    <Link  className="forget-pass text-warning fs-6 fw-bold ms-5">Forget Your Password?</Link>
                    
                </div>
                <button type="submit" className="btn bg-white fw-bold text-danger">Submit</button>
                
                </form>
            
                <br />
                <br />
                </div>
                <div className="text-white">OR</div>

                <p className="text-white"> Don't have an account? <Link to="/register" className="text-warning fs-6 fw-bold">Create Account</Link></p>
                <div className="fs-2 text-center">
                    {/* <i onClick={signInUsingGoogle} className= "fab fa-google text-danger"></i>
                    <i onClick={signInUsingGit} className= "fab fa-github ms-3"> </i> */}
                </div>
            </div>
        </div>
    );
};

export default Login;