import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

class Home extends Component {
  state = {
    ministries: [{ name: "Something" }, { name: "Different" }],
    currentMinistry: "",
    currentBranch: "",
    currentService: "",

    // {minName : {BranchName: {Service: {queue: true, appointment:false}}}}
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
    // let branches = this.state.ministries[ministry];
    let branches = [];
    if (ministry === "Something")
      branches = [
        { id: 1, name: "fahaheel" },
        { id: 2, name: "Mangaf" },
      ];
    else branches = branches = [{ id: 1, name: "abu halifa" }];
    return branches;
  };

  getServices = () => {
    const ministry = this.state.currentMinistry;
    console.log(ministry);
    const branch = this.state.currentBranch;
    // let services = this.state.ministries[ministry][branch];
    let services = [];
    if (branch === "fahaheel")
      services = [
        { id: 1, name: "air" },
        { id: 2, name: "water" },
      ];
    else if (branch === "Mangaf")
      services = [
        { id: 1, name: "earth" },
        { id: 2, name: "fire" },
      ];
    return services;
  };

  handleMinClick = (ministry) => {
    let curState = { ...this.setState };
    curState.currentMinistry = ministry;
    curState.currentBranch = "";
    curState.currentService = "";
    this.setState(curState);
  };

  handleBraClick = (branch) => {
    let curState = { ...this.setState };
    curState.currentBranch = branch;
    curState.currentService = "";
    this.setState(curState);
  };

  handleSerClick = (service) => {
    let curState = { ...this.setState };
    curState.currentService = service;
    this.setState(curState);
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
          <div className="container-fluid">
            <h1 className='navbar-brand'><label>Ministry Services</label></h1>
                <form class="form-inline">
                  <button class="btn btn-success" type="button">Login</button>
              </form>
          </div>
          </nav>
        </div>
        <div>
          <div class='container-fluid padding'>
          <div class='row text-center padding'>

            <div class='col-xs-12 col-sm-6 col-md-4'>
              <h2>Ministries</h2>
              <ul type='none'>
              {this.getMinistries().map((item) => (
                <li key={item.id} id={item.name}>
                  <button class='btn btn-primary btn-active'
                    onClick={() => {
                      this.handleMinClick(item.name);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              </ul>
            </div>
            <div class='col-xs-12 col-sm-6 col-md-4'>
              <ul type='none'>
              {this.state.currentMinistry && (
                <div>
                  <h2>Branches</h2>
                  {this.getBranches().map((item) => (
                    <li key={item.id} id={item.name}>
                      <button class='btn btn-primary btn-active'
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
            </ul>
            </div>
            <div class='col-xs-12 col-md-4'>
              <ul type='none'>
              {this.state.currentBranch && (
                <div>
                  <h2>Services</h2>
                  {this.getServices().map((item) => (
                    <li key={item.id} id={item.name}>
                      <button class='btn btn-primary btn-active'
                        onClick={() => {
                          this.handleSerClick(item.name);
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </div>
              )}
            </ul>
            </div>
          </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Home;
