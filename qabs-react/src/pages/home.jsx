import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/login"></Link>
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
