import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

class Queue extends Component {
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
    this.setState(curState);
  };

  handleBraClick = (branch) => {
    let curState = { ...this.setState };
    curState.currentBranch = branch;
    this.setState(curState);
  };

  handleSerClick = (s) => {
    let curState = { ...this.setState };
    curState.currentService = s;
    this.setState(curState);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
              <h1 className="navbar-brand">
                <label>Ministry Services</label>
              </h1>
            </div>
          </nav>
        </div>
        <div>
          <div className="container-fluid padding">
            <div className="row text-center padding">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Ministries</h2>
                <ul type="none">
                  {this.getMinistries().map((item) => (
                    <li key={item} id={item}>
                      <button
                        class="btn btn-primary btn-active"
                        onClick={() => {
                          this.handleMinClick(item);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <ul type="none">
                  {this.state.currentMinistry && (
                    <div>
                      <h2>Branches</h2>
                      {this.getBranches().map((item) => (
                        <li key={item} id={item}>
                          <button
                            class="btn btn-primary btn-active"
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
              </div>
              <div class="col-xs-12 col-md-4">
                <ul type="none">
                  {this.state.currentBranch && (
                    <div>
                      <h2>Services</h2>
                      {this.getServices().map((item) => (
                        <li key={item} id={item}>
                          <button
                            class="btn btn-primary btn-active"
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
            </div>
          </div>
        </div>
        {this.state.currentService && (
          <div class="container">
            <div class="verticala-center">
              <Link
                to={`/queue/${this.state.currentMinistry}/${this.state.currentBranch}/${this.state.currentService}`}
              ><button className='btn btn-lg btn-danger'>Queue</button>

              </Link>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Queue;
