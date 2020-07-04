import React, { Component } from "react";
import { Link } from "react-router-dom";
import './css/home.css'

class Home extends Component {
  state = {
    ministries: [{ name: "Something" }, { name: "Different" }],
    currentMinistry: "",
    currentBranch: "",
    currentService: "",
  };

  getMinistries = () => {
    const ministries = this.state.ministries;
    let names = [];
    for (let index in ministries)
      names.push({ id: index, name: ministries[index].name });

    return names;
  };

  getBranches = () => {
    const ministry = this.state.currentMinistry;
    let branches = this.state.ministries[ministry];
    if (ministry === "Something") branches = ["fahaheel", "Mangaf"];
    else branches = ["abu halifa"];
    return branches;
  };

  handleMinClick = (ministry) => {
    let curState = { ...this.setState };
    curState.currentMinistry = ministry;
    this.setState(curState);
  };

  handleBraClick = (branch) => {
    let curState = { ...this.setState };
    curState.currentBranch = branch;
    this.setState(curState);
  };

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
      // <!-- navigation bar keeps extending -->
      <div className="container-fluid">
        // <!-- logo -->
        <h1 className='navbar-brand'>Ministries</h1>
        // <!-- toggler button when the screen is too small -->
        <button className="navbar-toggler" type="button" data-toggler='collapse' data-target='#navbarResponsive'>
          // <!-- actual button -->
          <span className='navbar-toggler-icon'></span>
        </button>
        // <!-- all the options should pop out when the screen is big -->
        <div className="collapse navbar-collapse" id='navbarResponsive'>
          // <!-- all the options should pop out when the screen is big -->
          <Link to="/login"><button classNam='btn-Primary'
      </div>
      </nav>

        <div>
          <label>Ministry Services</label>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <h2>Ministry</h2>
          {this.getMinistries().map((item) => (
            <li key={item.id} id={item.name}>
              <button
                onClick={() => {
                  this.handleMinClick(item.name);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}

          {this.state.currentMinistry && (
            <div>
              <h2>Branches</h2>
              {this.getBranches().map((item) => (
                <li key={item.id} id={item.name}>
                  <button
                    onClick={() => {
                      this.handleBraClick(item.name);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
