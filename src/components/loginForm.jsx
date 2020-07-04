import React from "react";
// import { Redirect } from "react-router-dom";
import Form from "./common/form";
// import auth from "../services/authService";
import "./css/loginForm.css";


class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
  };

  // add async
  doSubmit = () => {
    console.log("Do submit");
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.username, data.password);
    //   const { state } = this.props.location;
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   console.log("Exception in loginForm");
    //   }
    // }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="login-panel">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
