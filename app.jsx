import React, { useState } from 'react';
import './style.css';

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Handlers
  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    window.location.href = 'forget.html';
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header>
        <div className="logo">{/* <img src="Hlogo.png" alt="Logo" /> */}</div>
        <nav>
          <button className="btn" onClick={openLogin}>Login</button>
          <button className="btn signup" onClick={openSignUp}>Sign Up</button>
        </nav>
      </header>

      {/* Login Popup */}
      {showLogin && (
        <main className="popup_main_log">
          <div className="login-box">
            <div className="reject" onClick={closeLogin}>&times;</div>
            <h2>Log In</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />

              <a href="#" onClick={handleForgetPassword}>forget password?</a>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <p className="signup-link">
              Don't have an account? <span className="link" onClick={openSignUp}>Sign up</span>
            </p>
          </div>
        </main>
      )}

      {/* Signup Popup */}
      {showSignUp && (
        <main className="popup_main_sin">
          <div className="container">
            <div className="reject_signU" onClick={closeSignUp}>&times;</div>
            <h2>Create Account</h2>
            <form>
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="input-box">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <label>Password</label>
                <input type="password" placeholder="Create a password" required />
              </div>
              <button className="btn" type="submit">Sign Up</button>
              <p className="login-link">
                Already have an account? <span className="link" onClick={openLogin}>Login</span>
              </p>
            </form>
          </div>
        </main>
      )}

      {/* Hero Section */}
      {!showLogin && !showSignUp && (
        <section className="hero-content">
          <div className="hero">
            <h1>Welcome to Our Website</h1>
            <p>Discover a world of possibilities with us. Join now and be part of our community!</p>
          </div>
        </section>
      )}
    </div>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginSignup from './components/LoginSignup';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginSignup />
  </React.StrictMode>
);
  


