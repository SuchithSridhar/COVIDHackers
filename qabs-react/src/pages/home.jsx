import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

class Home extends Component {
  state = {
    ministries: {
      ServiceMin: { Fahaheel: { Fire: { queue: true, appointment: true } } },
    },
    currentMinistry: "",
    currentBranch: "",
    currentService: "",

    // {minName : {BranchName: {Service: {queue: true, appointment:false}}}}
  };

  getMinistries = () => {
    const ministries = this.state.ministries;
    let names = [];
    for (let name in ministries) if (name) names.push(name);
    return names;
  };

  getBranches = () => {
    const branches = this.state.ministries[this.state.currentMinistry];
    let names = [];
    for (let name in branches) names.push(name);
    return names;
  };

  getServices = () => {
    let services = "";
    try {
      services = this.state.ministries[this.state.currentMinistry][
        this.state.currentBranch
      ];
    } catch (ex) {
      console.log(this.state);
      return [];
    }
    let names = [];
    for (let name in services) names.push(name);
    return names;
  };

  getServiceObject = () => {
    try {
      const {
        ministries,
        currentMinistry,
        currentBranch,
        currentService,
      } = this.state;
      return ministries[currentMinistry][currentBranch][currentService];
    } catch (error) {
      console.log(error);
      return { queue: false, appointment: false };
    }
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
          <ul>
            {this.getMinistries().map((item) => (
              <li key={item} id={item}>
                <button
                  onClick={() => {
                    this.handleMinClick(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <ul>
            {this.state.currentMinistry && (
              <div>
                <h2>Branches</h2>
                {this.getBranches().map((item) => (
                  <li key={item} id={item}>
                    <button
                      onClick={() => {
                        this.handleBraClick(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </div>
            )}
          </ul>

          <ul>
            {this.state.currentBranch && (
              <div>
                <h2>Services</h2>
                {this.getServices().map((item) => (
                  <li key={item} id={item}>
                    <button
                      onClick={() => {
                        this.handleSerClick(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
        Im adding buttons outside the buttons div
        {this.state.currentService && (
          <div>
            <Link
              to={`/queue/${this.state.currentMinistry}/${this.state.currentBranch}/${this.state.currentService}`}
            >
              Queue
            </Link>
            <Link
              to={`/appointment/${this.state.currentMinistry}/${this.state.currentBranch}/${this.state.currentService}`}
            >
              Appointment
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
