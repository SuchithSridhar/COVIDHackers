import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
          <div className="container-fluid">
            <h1 className="navbar-brand">
              <label>Ministry Services</label>
            </h1>
            <form className="form-inline">
              <Link to="/login">
                <button className="btn btn-success" type="button">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </nav>
        <Link to="/appointment">Appointment</Link>
        <Link to="/queue">Queue</Link>
        <Link to="/mdets">Ministry Details</Link>
      </div>
    );
  }
}

export default Home;
