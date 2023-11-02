import React, { useState } from 'react';
import Image from "../assets/download (4).png"

function SignUp() {
  // Define state variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="h-100 container-fluid Login mt-5">
      <div className="container mb-5" style={{ borderRadius: '0.7rem', borderColor: 'transparent' }}>
        <div className="row">
          <div className="col-sm-5 bg-dark order-lg-0 order-1" style={{ borderTopLeftRadius: '0.7rem', borderBottomLeftRadius: '0.7rem' }}>
            <div className="login-title-frame">
              <h1 className="h1 text-light">Sign Up</h1>
              <p className="h6 text-light">Enter your details in order to make an account</p>
            </div>
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-envelope"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-phone"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="text"
                  className="login__input"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  style={{ color: '#D1D1D4!important' }}
                  type="password"
                  className="login__input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button className="login_button btn mt-5 py-2" type="submit">Sign up</button>
            </form>
            <div className="my-5 py-5">
              <b>
                <a href="" style={{ color: 'rgb(160, 54, 160)' }}>Login If already Sign up</a>
              </b>
            </div>
          </div>
          <div className="col-sm-7 bg-white position-relative order-lg-1 order-0" style={{ borderTopRightRadius: '0.7rem', borderBottomRightRadius: '0.7rem' }}>
            <h1 className="h1 side2title">Welcome to <span style={{ fontWeight: 10 }}>Ned Admin portal</span></h1>
            <p className="side2para">Login to access your account</p>
            <div className="d-flex justify-content-center align-items-center align-content-center mt-5 pt-5">
              <img className="mt-5" width="" src={Image} alt="" />
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

export default SignUp;
