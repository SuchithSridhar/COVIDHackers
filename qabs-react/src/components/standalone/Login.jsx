import React, { Component } from "react";
import Joi from "joi-browser";
import "./css/login.css";

class Login extends Component {
  state = {
    data: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    return (
      <div className="login-panel">
        <h1>Login</h1>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>

        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>

        <input type="button" className="btn-custom btn" value="Sign in"></input>
      </div>
    );
  }
}

export default Login;
