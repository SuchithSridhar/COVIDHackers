import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}></label>
      <input
        {...rest}
        name={name}
        id={name}
        placeHolder={name}
        className="form-control"
      />
    </div>
  );
};

export default Input;
