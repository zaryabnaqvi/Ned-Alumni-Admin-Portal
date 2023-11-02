import React, { useState } from 'react';
import Image from "../assets/download (4).png"

function Login() {
  // Define state variables for form inputs
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Submitted:', userNameOrEmail, password);
  };

  return (
    <section className="h-100 container-fluid Login mt-5">
      <div className="container mb-5" style={{ borderRadius: '0.7rem', borderColor: 'transparent' }}>
        <div className="row">
          <div className="col-sm-5 bg-dark order-lg-0 order-1">
            <div className="login-title-frame">
              <h1 className="h1 text-light">Login</h1>
              <p className="h6 text-light">Enter your account details</p>
            </div>
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                  value={userNameOrEmail}
                  onChange={(e) => setUserNameOrEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <a href="" style={{ color: 'rgb(160, 54, 160)' }}>forgot password ?</a>
              <button className="login_button btn mt-5 py-2" type="submit">Login</button>
              <div className="my-5 py-5">
                <a href="" style={{ color: 'rgb(160, 54, 160)' }}>If you don't have an account, Sign up ?</a>
              </div>
            </form>
          </div>
          <div className="col-sm-7 bg-white position-relative order-lg-1 order-0">
            <h1 className="h1 side2title">Welcome to <span style={{ fontWeight: 'bold' }}>NED Admin Portal</span></h1>
            <p className="side2para">Login to access your account</p>
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src={Image} alt="" />
            </div>
            <div className="screen__background">
              <span className="dot"></span>
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
              <span className="dot4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
