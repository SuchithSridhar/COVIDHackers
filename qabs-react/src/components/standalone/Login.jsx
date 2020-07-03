import React, { Component } from "react";
import "./stylesheets/login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>

        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>

        <input type="button" className="btn" value="Sign in"></input>
      </div>
    );
  }
}

export default Login;
