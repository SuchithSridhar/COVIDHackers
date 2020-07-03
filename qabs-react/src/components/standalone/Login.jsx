import React, { Component } from "react";
import "./css/login.css";

class Login extends Component {
  state = {
    data: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    console.log("input:", input);
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    return (
      <div className="login-panel">
        <h1>Login</h1>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input
            name="Username"
            value={this.state.data.username}
            onChange={this.handleChange}
          />
        </div>

        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input
            name="Password"
            value={this.state.data.password}
            onChange={this.handleChange}
          />
        </div>

        <input type="button" className="btn-green btn" value="Sign in"></input>
      </div>
    );
  }
}

export default Login;
