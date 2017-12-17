// ItemService.js
import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

 render() {
  return (
      <section id="nav-login-window" className="login-window">
        <header>Login</header>
        <form>
          <div className="nav-form-group">
            <label htmlFor="nav-login-email">Email</label>
            <input type="email" id="nav-login-email" placeholder="example@cribli2.com" />
          </div>
          <div className="nav-form-group">
            <label htmlFor="nav-login-password">Password</label>
            <input type="password" id="nav-login-password" placeholder="password" />
          </div>
          <div className="nav-form-group">
            <button className="button main">Sign In</button>
          </div>
        </form>
      </section>
    );
 }
}

export default Login;
