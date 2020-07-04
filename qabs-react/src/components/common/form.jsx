import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import "./css/form.css";

class Form extends Component {
  state = {
    data: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button disabled={false} className='btn-custom'>
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
