import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {signin,authenticate,isAuthenticated} from "../auth/helper"
import Loader from '../components/Loader';

const Signin = () => {
  const [values, setValues] = useState({
    email:"eee@rrr.com",
    password:"4321",
    error:"",
    loading:false,
    didRedirect:false,
  });
  const {email,password, error, loading, didRedirect}= values
  // const {user} = isAuthenticated();
  const handleChange = name => event =>{
    setValues({...values,error:false, [name]:event.target.value});
  }
  const onSubmit = event=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true});
    signin({email, password})
    .then(data=>{
      if(data.error){
        setValues({...values, error: data.error, loading:false});
      }else{
        authenticate(data, ()=>{
          setValues({
            ...values,
            didRedirect:true,
          });
        });
      }
    })
    .catch(err=>console.log(err))
  };
  
  const performRedirect=()=>{
    // TODO: redirection
    if(didRedirect){
      if(isAuthenticated()){
        return <Redirect to="/admin/dashboard" />;
      }
    }
  }
  const errorMessage = ()=>(
    <div className="alert alert-danger" style={{display:error ? "": "none"}}>
      {error}
    </div>
  );
  if(isAuthenticated()){
    return <Redirect to="/admin/dashboard" />;
  }
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `This is test`;
  });
  return (
    <section className="section">
      {Loader(loading)}
      {performRedirect()}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 ">
            <div className="card card-primary">
              <div className="card-header">
                <h4>News Portal - Login to Access Admin Panel</h4>
              </div>
              <div className="card-body">
                {errorMessage()}
                <form method="POST" action="#" className="needs-validation" noValidate>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange("email")} id="email" type="email" className="form-control" value={email} tabIndex="1" required autoFocus/>
                    <div className="invalid-feedback">
                      Please fill in your email
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">Password</label>
                      <div className="float-right">
                        <a href="auth-forgot-password.html" className="text-small">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input onChange={handleChange("password")} id="password" type="password" className="form-control" value={password}  tabIndex="2" required/>
                    <div className="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      {JSON.stringify(values)}
                      {/* <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me"/> */}
                      {/* <label className="custom-control-label" for="remember-me">Remember Me</label> */}
                    </div>
                  </div>
                  <div className="form-group">
                    <button onClick={onSubmit} type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5 text-muted text-center">
              View => <a href="#">Home Page</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Signin