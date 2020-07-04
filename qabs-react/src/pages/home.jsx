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

          {this.state.currentBranch && (
            <div>
              <h2>Services</h2>
              {this.getServices().map((item) => (
                <li key={item.id} id={item.name}>
                  <button
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
        </div>
      </div>
    );
  }
}

export default Home;
