import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/appointment">Appointment</Link>
        <Link to="/queue">Queue</Link>
        <Link to="/mdets">Ministry Details</Link>
      </div>
    );
  }
}

export default Home;
