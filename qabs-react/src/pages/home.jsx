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
        <div class="container">
          <div class="vertical1-center">
            <Link to="/appointment"><button class='btn btn-lg btn-danger'>Appointment</button></Link>
          </div>
        </div>

        <div class="container">
          <div class="vertical2-center">
            <Link to="/queue"><button class='btn btn-lg btn-danger'>Queue</button></Link>
          </div>
        </div>

        <div class="container">
          <div class="vertical3-center">
            <Link to="/mdets"><button class='btn btn-lg btn-danger'>Ministry Details</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
